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

userInput = window.prompt(
  "Pick a calculation to perform\n a for addition\n b for subtraction\n c for multiplication\n d for division"
);
if (userInput === "a") {
  addition();
} else if (userInput === "b") {
  subtraction();
} else if (userInput === "c") {
  multiplication();
} else if (userInput === "d") {
  division();
} else {
  alert("Invalid entry!!!\n Please Try Again.");
}
