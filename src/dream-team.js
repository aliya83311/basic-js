const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let stringsOnly = checkForStrings(members);
  return stringsOnly
    .map((member) => member.trim().slice(0, 1).toUpperCase())
    .sort()
    .join("");
};

function checkForStrings(arr) {
  return arr.filter((name) => typeof name === "string");
}
