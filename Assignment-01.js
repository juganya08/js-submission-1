console.log("Q1. Write a function that converts an array of strings to uppercase.");
//const strings = ["hello", “world”];

const strings = ["hello", "world"];
const uppercased = strings.map(function (name) {
  return name.toUpperCase();
});

console.log(uppercased);

console.log("Q2. Given an array of numbers, write a function to create a new array that only contains the even numbers.");
//const numbers = [1, 2, 3, 4, 5, 6];

const numbers = [1, 2, 3, 4, 5, 6];

function evenNumber() {
  const finalEvenNumber = [];
  numbers.forEach(num => {
    if (num % 2 == 0) {
      finalEvenNumber.push(num);
    }
  })
  return finalEvenNumber;
}

console.log(evenNumber());

console.log("Q3. Write a function that removes all the empty strings from an array of strings.");
//const strings = ["hello", "", "world", "", “javascript"];

function removeEmptyElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = ["hell", "", "world", "", "javascript"];
let filteredArr = removeEmptyElements(arr);
console.log(filteredArr);

console.log("Q4. Write a function using the reduce method that concatenates an array of strings into a single string, with each word separated by a space.");
//const words = ["hello", "world", “javascript"];

const words = ["hello", "world", "javascript"];

const concatenateWords = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
  });
};

const result = concatenateWords(words);
console.log(result);

console.log("Q5. Given an array of mixed data types, the end user needs the sum of squared numbers in");
//this array. Write a program for this.
//const array = [4, ‘hello’, 3, true, ‘Uki’, 5];

const array = [4, 'hello', 3, true, 'Uki', 5];

const sumOfSquaredNumbers = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'number') {
      return accumulator + currentValue ** 2;
    }
    return accumulator;
  }, 0);
};

const resultSum = sumOfSquaredNumbers(array);
console.log(resultSum);

console.log("Q6. Write a function named reverseArray that takes an array as input and returns a new")
//array with the elements in reverse order.

const reverseArray = (arr) => {
  return arr.slice().reverse();
};

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray);
console.log(originalArray);

console.log("Q7. Create a function createPerson that returns an object representing a person with");
//properties name, age, and a method greet that logs a greeting message something like
//"Hello, my name is John and I am 25 years old."

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

const person = createPerson('John', 25);
person.greet();

console.log("Q8. Write a function getHighGrades that takes an array of student ");

const students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 70 },
  { name: 'Charlie', grade: 85 }
];

const getHighGrades = (students) => {
  return students
    .filter(student => student.grade > 80)
    .map(student => student.name);
};

const highGradeStudents = getHighGrades(students);
console.log(highGradeStudents);

console.log("Q10. Write a JavaScript code to check if a variable age is greater than or equal to 18, and print");

const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Not an adult");
}

console.log("Q11. Write a JavaScript code to check if a variable score is passing (>=50), and print ");


const score = 45;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

console.log("Q12");
/*Q12. Write a JavaScript code to categorize a variable grade into "Excellent" (>=90), "Good"
(>=75), "Average" (>=50), and "Poor" (<50).*/

const grade = 50;

if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 75) {
  console.log("Good");
} else if (grade >= 50) {
  console.log("Average");
} else console.log("Poor");

console.log("Q13");

/*13. Write a function addTask that takes an array of tasks and a task to add to the list. The
function should return the updated array of tasks.*/

function addTask(tasks, newTask) {
  tasks.push(newTask);
  return tasks;
}

const tasks = ['Buy groceries', 'Clean the house'];
console.log(addTask(tasks, 'Pay bills'));

console.log("Q14")

function findCommonElements(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

console.log(findCommonElements([1, 2, 3], [3, 4, 5]));

console.log("Q15")
function updateEmployeeRecord(employee, updates) {
  for (let key in updates) {
    employee[key] = updates[key];
  }
  return employee;
}

const employee = { name: 'John', position: 'Developer', salary: 50000 };
const updates = { position: 'Senior Developer', salary: 60000 };
console.log(updateEmployeeRecord(employee, updates));


console.log("Q16")
function inventoryValue(products) {
  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    sum = sum + (products[i].price * products[i].quantity);
  }
  return sum;
}

const products = [
  { name: 'Laptop', price: 1000, quantity: 5 },
  { name: 'Phone', price: 500, quantity: 10 }
];

console.log(inventoryValue(products));

console.log("Q17")
function applyDiscount(price, discount = 10) {
  let finalPrice = price - (price * (discount / 100));
  return finalPrice;
}

console.log(applyDiscount(100, 40))
console.log(applyDiscount(100))

console.log("Q18")

function factorial(n) {

  if (n === 0 || n === 1) {
    return 1;
  } else {

    return n * factorial(n - 1);
  }
}

console.log(factorial(10))

console.log("Q19")
function registerUser(userObj, newUserObj) {
  for (let i = 0; i < userObj.length; i++) {
    if (userObj[i].userName !== newUserObj.userName) {
      userObj.push(newUserObj)
    }
  }
  return userObj;
}

const userList = [{ userName: 'juvi' }];
const newUser = { userName: 'juga' };
console.log(registerUser(userList, newUser));

