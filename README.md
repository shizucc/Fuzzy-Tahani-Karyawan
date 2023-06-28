# About
This CLI application is an implementation of Tahani's fuzzy model that can display a list of employees based on requested criteria.

# Usage
First, you must connect to MongoDB or any NoSQL databases.
- **node karyawans seed** : if you connect to new databases, you need to seed the example data
- **node karyawans all** : display all employee list
- **node karyawans add -n <name:string> -u<age:int> -i<GPA:double> -p<psycotest_score:string>** : add employee
- **node employee list -u "<muda|parobaya|tua>" -i "<cukup_baik|baik|sangat_baik>" -p"<cukup_baik|baik|sangat_baik>"** : display employee basen on criteria
