function sortInputData(array) {
  const sortedData = array.sort((a, b) => ((+a.age < +b.age) || (a.name < b.name) ? 1 : -1));
  return sortedData;
}

module.exports = { sortInputData };
