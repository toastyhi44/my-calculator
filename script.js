const $add = document.getElementById("add");
const $addX = document.getElementById("addX");
const $subtract = document.getElementById("subtract");
const $display = document.getElementById("display");
const $date = document.getElementById("date");
const literallyanything = document.getElementById("divide");

// JavaScript data types
let number = 0;
let string = "my string";
let myBoolean = true; // or false
let date = new Date();
let array = [1, 2, 3];
let myObject = {
  key: "pair"
};

myFunction2();

// This was first, function declaration
function myFunction2() {}

// myFunctionExpression(); // not ok
// Function expression
let myFunctionExpression = function() {};
myFunctionExpression(); // ok

// much newer so generally preferred
let myArrowFunction = () => {};

// a comment
let counter = $display.value;

$date.innerHTML = date.toString();

// This is the add thing
$add.addEventListener("click", () => {
  counter = Number(counter);

  const result = add(counter, 1);
  counter = result;

  $display.value = result;
});

$subtract.addEventListener("click", () => {
  counter = subtract(Number(counter), 1);

  $display.value = counter;
});

$addX.addEventListener("click", () => {
  const amount = prompt("How much?");

  counter = add(Number(counter), Number(amount));

  $display.value = counter;
});

literallyanything.addEventListener("click", () => {
  const amount = prompt("How much?");

  counter = divide(Number(counter), Number(amount));

  $display.value = counter;
});

$display.addEventListener("blur", event => {
  const value = Number(event.target.value);

  if (isNaN(value)) {
    return;
  }

  counter = value;
});

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  return a / b;
};
