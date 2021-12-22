function sortFileData(array) {
    let sortedData = array.sort((a, b) => (+a.age < +b.age) || (a.name < b.name) ? 1 : -1); // Sort by age and name
    return sortedData
}

function getOldestUser(data) {
    let oldestPerson = data.sort((a, b) => (+a.age < +b.age) ? 1 : -1); // Sort by age 
    console.log(`The oldest person is ${oldestPerson[0].name}, age : ${oldestPerson[0].age}`);
}

function getPopularLastName(array) {
    let arrayOfLastName = [];
    for (user of array) {
        let fullname = user.name.split(' ');
        arrayOfLastName.push(fullname[1]);
    };
    let lastNameCounter = arrayOfLastName.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    let lastnameMaxCount = 0;

    for (element in lastNameCounter) {
        lastnameMaxCount = Math.max(lastNameCounter[element], lastnameMaxCount)
    };

    let popularLastname = Object.keys(lastNameCounter).find(key => lastNameCounter[key] === lastnameMaxCount);
    return console.log(`The most popular lastname is  ${popularLastname}, count ${lastnameMaxCount}`);
};

module.exports = {
    sortFileData,
    getPopularLastName,
    getOldestUser
};