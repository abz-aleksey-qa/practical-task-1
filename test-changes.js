const fs = require('fs')
const { buffer } = require('buffer')
let readFile1 = fs.readFileSync('./tests/test-valid.csv', 'utf-8')
let readFile2 = fs.readFileSync('./tests/test-valid-copy.csv', 'utf-8')
let bufTest1 = Buffer.from(readFile1)
let bufTest2 = Buffer.from(readFile2)
let result = bufTest1.equals(bufTest2)
console.log(result);





let fileData = [
    {
        "name": "Diego Heidenreich",
        "posistion": "Lead Dev",
        "age": 50,
        "phone": "+38095684359"
    },
    {
        "name": "Cheyanne Bradtke",
        "posistion": "Programmer",
        "age": 49,
        "phone": "+38091423638"
    },
    {
        "name": "Darius Cruickshank",
        "posistion": "Buisness Developer",
        "age": 49,
        "phone": "+38013997345"
    },
    {
        "name": "Eino Nolan",
        "posistion": "Programmer",
        "age": 49,
        "phone": "+38001610582"
    },
    {
        "name": "Jaylen Kling",
        "posistion": "Programmer",
        "age": 49,
        "phone": "+38023799189"
    },
    {
        "name": "Demario O'Conner",
        "posistion": "Buisness Developer",
        "age": 47,
        "phone": "+38054907738"
    },

]




let arrayOfLastName = ['Apple', 'Ios', 'Cherry', 'Pinaple', 'Ios'];



function getPopularLastName(array) {
    // for (user of array) {
    //     let fullname = user.name.split(' ');
    //     arrayOfLastName.push(fullname[1]);
    // };


    // console.log(array);
    let lastNameCounter = array.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        // console.log(prev);
        return prev;
    }, []);

    console.log(lastNameCounter);

    let lastnameMaxCount = 0


    let totalArr = {}



    for (element in lastNameCounter) {
        lastnameMaxCount = Math.max(lastNameCounter[element], lastnameMaxCount)
    }


    for (element in lastNameCounter) {
        if (lastNameCounter[element] >= lastnameMaxCount) {
            totalArr[`${element}`] = lastNameCounter[element]
        }
    }






    console.log(lastnameMaxCount);
    console.log(totalArr);


    // return soretdData(totalArr, lastnameMaxCount)
};


// function soretdData(obj, maxCount) {
//     console.log(Object.entries(obj));
// }

getPopularLastName(arrayOfLastName)