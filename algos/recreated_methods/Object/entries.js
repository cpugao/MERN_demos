/* 
  Recreate Object.entries method

  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array

  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = { firstName: "Foo", lastName: "Bar", age: 13 };
obj1.__proto__.keyOnProto = "val from proto";
const expected1 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];

/**
 * Returns a 2d array of key value pairs from @obj
 * @param   {Object} obj
 * @typedef {Array<Array<string, any>>} output
 *          The nested arrays should look like: [key, val]
 * @return  {output}
 * Time:    O(n) linear, n = amount of keys
 * Space:   O(n) linear
 */
function entries(obj) {
  const keyValPairs = [];

  for (const key in obj) {
    // has own property means it is a prop directly on obj, not on it's proto
    if (obj.hasOwnProperty(key)) {
      const val = obj[key];

      keyValPairs.push([key, val]);
    }
  }
  return keyValPairs;
}
