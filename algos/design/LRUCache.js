// JavaScript interview with a Pivotal Labs engineer: LRU Cache: https://youtu.be/yYA_jPqjV1g
// https://leetcode.com/problems/lru-cache/

/* 
  LRU = Least Recently Used Cache

  LRU caches are often used to implement caches which you do not want to grow indefinitely.
  The cache has a max size, and when a new key is inserted that would make it grow
  larger than the max size, the key which has not been accessed for the longest
  time is removed to make space.

  The LRU you design should support these operations:

  get(key): get the value of the key if the key exists in the cache
    - returns -1 if not found

  put(key, value): update or insert the value if the key is not already present

  Browsers use something like this cache / store for later pages you've recently visited,
  but if you haven't visited one in a while it will be removed when a new page is visited.

  START SIMPLE:
    - you know how to add a key to an object
    - you know how to retrieve a value from an object by a key
    - start with this, write two functions, 
      1. function that takes a key and a value, then adds it to an object
      2. function that takes a key and returns a value or -1 if key doesn't exist
    - then wrap these functions into a class as methods and the other necessary vars as properties of the class
    - then think about the other requirements and where to go next

*/

class LRUCache {
  constructor() {}
}

// Tests, create your LRUCache implementation above this then run the file when ready to test
const lruCache = new LRUCache(2);

const testCases = [
  { method: "put", arguments: [1, "one"], explanation: "one should be added." },
  { method: "put", arguments: [2, "two"], explanation: "two should be added." },
  {
    method: "get",
    arguments: [1],
    expected: "one",
    explanation: "one was previously added.",
  },
  {
    method: "put",
    arguments: [3, "three"],
    explanation: "evicts key 2, because key 1 was retrieved more recently.",
  },
  { method: "put", arguments: [4, "four"], explanation: "evicts key 1." },
  {
    method: "get",
    arguments: [1],
    expected: -1,
    explanation: "one was evicted earlier.",
  },
  {
    method: "get",
    arguments: [2],
    expected: -1,
    explanation: "two was evicted earlier.",
  },
  {
    method: "get",
    arguments: [3],
    expected: "three",
    explanation: "three was added and has not been evicted.",
  },
  {
    method: "get",
    arguments: [4],
    expected: "four",
    explanation: "four was added and has not been evicted.",
  },
];

testCases.forEach(({ method, arguments, expected, explanation }, idx) => {
  idx === 0 && console.log("-".repeat(85));
  const caseNumStr = `Case ${idx + 1}`;
  const methodCallStr = `lruCache.${method}(${arguments.join(", ")})`;
  const actual = lruCache[method](...arguments);

  console.log(`${caseNumStr}     : ${methodCallStr}`);

  if (expected) {
    console.log("Expected   :", expected);
    console.log("Actual     :", actual);
  }
  console.log("Explanation:", explanation);
  console.log("-".repeat(85));
});

module.exports = {
  LRUCache,
};
