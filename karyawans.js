// NODE MODULES
const yargs = require("yargs");
const { MongoClient } = require("mongodb");
const Table = require("cli-table3")


// LOCAL MODULES
const { buildUmurFuzzy } = require("./fuzzifikasi/umur")
const {buildIpkFuzzy} = require("./fuzzifikasi/ipk")
const {buildPsikotesFuzzy} = require("./fuzzifikasi/psikotes")
const {buildQuery, buildSort} = require("./query_builder/query_builder")

// Replace the uri string with your connection string.
const uri = "mongodb://mongo:6Y6WqsM2VOhMVVDaS0SM@containers-us-west-47.railway.app:7123";
const client = new MongoClient(uri);

async function run(obj) {
  try {
    await createKaryawan(client,obj)

  } finally {
    await client.close();
  }
}

async function allKaryawan(client){
    const result = await client.db("fuzzy_project").collection("karyawans").find().toArray();
    const table = new Table()
    table.push(
        ['Nama', 'Umur','Ipk','Skor Psikotes'],
        ...result.map(data => [data.nama, data.umur, data.ipk, data.psikotes])
    )

    console.log(table.toString());
    await client.close()
}

async function listKaryawan(argv, client){
    const query = buildQuery(argv.umur,argv.ipk,argv.psikotes)
    const result = await client.db("fuzzy_project").collection("karyawans").find({$and : query}).sort(buildSort()).toArray();
    const table = new Table()
    table.push(
        ['Nama', 'Umur','Ipk','Skor Psikotes'],
        ...result.map(data => [data.nama, data.umur, data.ipk, data.psikotes])
    )

    console.log(table.toString());
    await client.close();
    
}

async function createKaryawan(client, newKaryawan){
    console.log(newKaryawan)
    const nama =  newKaryawan.nama
    const umur= newKaryawan.umur
    const ipk = newKaryawan.ipk
    const psikotes = newKaryawan.psikotes

    const data = {
        nama: nama,
        umur: umur,
        ipk: ipk,
        psikotes: psikotes,
        fuzzy_count : {
            umur_fuzzy : buildUmurFuzzy(umur),
            ipk_fuzzy : buildIpkFuzzy(ipk),
            psikotes_fuzzy : buildPsikotesFuzzy(psikotes)
        }
    }
    const result = await client.db("fuzzy_project").collection("karyawans").insertOne(data);
    console.log(`Karyawan berhasil ditambahkan`);
}

async function seedKaryawan(client){
    await client.db("fuzzy_project").collection("karyawans").deleteMany({});
    createKaryawan(client,{nama:"Ani", umur:25, ipk:2.5, psikotes:70})
    createKaryawan(client,{nama:"Budi", umur:30, ipk:2.75, psikotes:75})
    createKaryawan(client,{nama:"Sari", umur:37, ipk:2.9, psikotes:77})
    createKaryawan(client,{nama:"Amir", umur:40, ipk:3, psikotes:82})
    createKaryawan(client,{nama:"Rian", umur:42, ipk:3.2, psikotes:85})
    createKaryawan(client,{nama:"Kiki", umur:48, ipk:3.7, psikotes:90})
    createKaryawan(client,{nama:"Yoga", umur:52, ipk:4, psikotes:95})
}

// nama ipk, umur, psikotes
yargs
  .command(
    'add',
    'Tambah karyawan',
    {
        'n': {
            alias: 'nama',
            describe : 'Nama karyawan',
            demandOption: true,
            type:'string'
        },
        'u' : {
            alias: 'umur',
            describe : 'umur karyawan',
            demandOption: true,
            type:'number'
        },
        'i' : {
            alias: 'ipk',
            describe : 'ipk karyawan',
            demandOption: true,
            type:'number'
        },
        'p' : {
            alias: 'psikotes',
            describe : 'skor psikotes karyawan',
            demandOption: true,
            type:'number'
        }
    },
    (argv) => {
            run(argv).catch(console.dir);
        },
        
    )

yargs.command(
    'list',
    'List karyawan',
    {
        'u' : {
            alias: 'umur',
            describe : 'muda | parobaya | tua',
            demandOption: true,
            type:'string'
        },
        'i' : {
            alias: 'ipk',
            describe : 'cukup_baik | baik | sangat_baik',
            demandOption: true,
            type:'string'
        },
        'p' : {
            alias: 'psikotes',
            describe : 'cukup_baik | baik | sangat_baik',
            demandOption: true,
            type:'string'
        }
    },
  (argv) => {
              listKaryawan(argv,client)
              
          }
)

yargs.command(
    'all',
    'List all karyawan',
    (argv)=>{
        allKaryawan(client)
    }
)

yargs.command(
    'seed',
    'Seed karyawan into database',
    ()=>{
        seedKaryawan(client)
    }
)

yargs.parse()

