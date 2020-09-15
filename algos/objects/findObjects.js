/* 
Given a search criteria object whose values will only be primitives (ints, strings, bools)
and a list of objects,

return any object that matches all the key value pairs in the search criteria object

Bonus: write a 2nd solution using build in methods to practice functional programming
*/

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
  firstName: "Bob",
  age: 31,
};
const expected1 = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
  lastName: "Smith",
};
const expected2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects from @collection that match the @criteria
 * @param   {Object} criteria
 * @param   {Array<Object>} collection
 * @return  {Array<Object>}
 *          The found objects.
 * Time:    O(n * m)
 *          n = @collection length
 *          m = num of keys in @criteria
 * Space:   O(n) linear
 *          All objects in @collection could be a match.
 */
function findObjects(criteria, collection) {
  const foundDocuments = [];

  for (const item of collection) {
    let isMatch = true;

    for (const searchKey in criteria) {
      const searchVal = criteria[searchKey];

      if (
        item.hasOwnProperty(searchKey) === false ||
        item[searchKey] !== searchVal
      ) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      foundDocuments.push(item);
    }
  }
  return foundDocuments;
}

function findObjectsFunction(criteria, collection) {
  return collection.filter((doc) => {
    for (const searchKey in criteria) {
      if (
        !doc.hasOwnProperty(searchKey) ||
        doc[searchKey] !== criteria[searchKey]
      ) {
        return false;
      }
    }
    return true;
  });
}

module.exports = {
  findObjects,
};
