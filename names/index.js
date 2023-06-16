const array = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

function getPeopleInCity(array) {
  return getFirstNames(array);
}

module.exports = getPeopleInCity;
