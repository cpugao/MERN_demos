const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const names = ["Benjamin", "Tural", "Adrian"];
const students = [
  { name: "Ryan", isPresentForLecture: false },
  { name: "Trinh", isPresentForLecture: false },
  { name: "Howard", isPresentForLecture: false },
];

// log each number
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // log each name
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// functional programming, abstract the loop to another method to focus just on what we want to do for each item
// numbers.forEach((item, i) => {
//   console.log(item);
// });

// names.forEach((item, i, arr) => {
//   if (item === "Benjamin") {
//     console.log("Hellow Benjamin");
//   }
// });

// students.forEach((student) => {
//   student.isPresentForLecture = true;
// });

// console.log(students);

// .map to create a NEW array of the same length based on an existing array where every item is "transformed" to a new item (or item kept the same)
const numsDoubled = numbers.map((item, i) => {
  // whatever our arror function returns is the new item that will be in the new array the current index
  return item * 2;
});

const evenNumsDoubled = numbers.map((num, i) => {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num;
  }
});

console.log(evenNumsDoubled);

// .filter to return a NEW array when you want some items to be excluded, conditionally

const oddNums = numbers.filter((num) => {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
});

// console.log(oddNums);

// whether we specify a 2nd paramter or not in our arrow function, the index is always passed to our arrow function at the 2nd position
const evenNumsAtEvenIndicies = numbers.filter((num, i) => {
  if (num % 2 === 0 && i % 2 === 0) {
    return true;
  }
  return false;
});

function isEven(num) {
  return num % 2 === 0;
}

// console.log(evenNumsAtEvenIndicies);

const evenNums2 = numbers.filter(isEven);
console.log(evenNums2);

// Recreate .filter
Array.prototype.where = function (callback) {
  // this refers to the array that .where was called on, e.g., arr1.where arr2.where
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const shouldKeep = callback(item, i);

    if (shouldKeep === true) {
      filteredArr.push(item);
    }
  }
  return filteredArr;
};

const evenNumsAtEvenIndicies2 = numbers.where((num, i) => {
  if (num % 2 === 0 && i % 2 === 0) {
    return true;
  }
  return false;
});

console.log(evenNumsAtEvenIndicies2);
