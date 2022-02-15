function consoleLogData(object) {
  const objValues = Object.values(object);

  objValues.forEach((item) => {
    if (typeof (item) === 'string') {
      console.log(item);
    } else {
      throw Error(`Data for log is not a string : ${item}`);
    }
  });
}

module.exports = { consoleLogData };
