//below are for functions for each math operation that the user specifies by his/her input following the instruction provided on the prompt.

function addition(num1, num2) {
  var num1 = window.prompt("Enter First Number: ");
  var num2 = window.prompt("Enther Second Number: ");
  //addition function
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  alert("Answer = " + (num1 + num2));
}

function subtraction(num1, num2) {
  var num1 = window.prompt("Enter First Number: ");
  var num2 = window.prompt("Enther Second Number: ");
  //subtraction function
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  alert("Answer = " + (num1 - num2));
}

function multiplication(num1, num2) {
  var num1 = window.prompt("Enter First Number: ");
  var num2 = window.prompt("Enther Second Number: ");
  //multiplication function
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  alert("Answer = " + (num1 * num2));
}

function division(num1, num2) {
  var num1 = window.prompt("Enter First Number: ");
  var num2 = window.prompt("Enther Second Number: ");
  //division function
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  alert("Answer = " + (num1 / num2));
}

let userInput = window.prompt(
  "Pick a calculation to perform\n a for addition\n b for subtraction\n c for multiplication\n d for division"
);
let userSelection = userInput.toLowerCase();
if (userSelection === "a") {
  addition();
} else if (userSelection === "b") {
  subtraction();
} else if (userSelection === "c") {
  multiplication();
} else if (userSelection === "d") {
  division();
} else {
  alert("Invalid entry!!!\n Please Try Again.");
}
