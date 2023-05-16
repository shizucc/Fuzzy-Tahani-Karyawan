buildQuery = (umur,ipk,psikotes) => {
    const umur_fuzzy = umur.toLowerCase();
    const ipk_fuzzy = ipk.toLowerCase();
    const psikotes_fuzzy = psikotes.toLowerCase();
    const query_umur = queryUmur(umur_fuzzy)
    const query_ipk = queryIpk(ipk_fuzzy)
    const query_psikotes = queryPsikotes(psikotes_fuzzy)
    return([query_umur, query_ipk, query_psikotes]) 
}

let sortUmur
let sortIpk
let sortPsikotes

const queryUmur = (umur) => {
    switch (umur){
        case "muda":
            sortUmur = "fuzzy_count.umur_fuzzy.umur_muda"
            return {"fuzzy_count.umur_fuzzy.umur_muda": { $ne: 0 },}
        case "parobaya":
            sortUmur = "fuzzy_count.umur_fuzzy.umur_parobaya"
            return {"fuzzy_count.umur_fuzzy.umur_parobaya": { $ne: 0 },}
        case "tua":
            sortUmur = "fuzzy_count.umur_fuzzy.umur_tua"
            return {"fuzzy_count.umur_fuzzy.umur_tua": { $ne: 0 },}
    }
}
const queryIpk = (ipk) => {
    switch (ipk){
        case "cukup_baik":
            sortIpk = "fuzzy_count.ipk_fuzzy.ipk_cukup_baik"
            return {"fuzzy_count.ipk_fuzzy.ipk_cukup_baik": { $ne: 0 },}
        case "baik":
            sortIpk = "fuzzy_count.ipk_fuzzy.ipk_baik"
            return {"fuzzy_count.ipk_fuzzy.ipk_baik": { $ne: 0 },}
        case "sangat_baik":
            sortIpk = "fuzzy_count.ipk_fuzzy.ipk_sangat_baik"
            return {"fuzzy_count.ipk_fuzzy.ipk_sangat_baik": { $ne: 0 },}
    }
}
const queryPsikotes = (psikotes) => {
    switch (psikotes){
        case "cukup_baik":
            sortPsikotes = "fuzzy_count.psikotes_fuzzy.psikotes_cukup_baik"
            return {"fuzzy_count.psikotes_fuzzy.psikotes_cukup_baik": { $ne: 0 },}
        case "baik":
            sortPsikotes = "fuzzy_count.psikotes_fuzzy.psikotes_baik"
            return {"fuzzy_count.psikotes_fuzzy.psikotes_baik": { $ne: 0 },}
        case "sangat_baik":
            sortPsikotes = "fuzzy_count.psikotes_fuzzy.psikotes_sangat_baik"
            return {"fuzzy_count.psikotes_fuzzy.psikotes_sangat_baik": { $ne: 0 },}
    }
}

const buildSort = () => {
    return {
        [sortUmur] : -1,
        [sortIpk] : -1,
        [sortPsikotes] : -1
    }
}

module.exports = {buildQuery, buildSort}