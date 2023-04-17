// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Step 1: User clicks generate password button then computer prompts user for password criteria

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  prompt ("How many characters would you like your password to contain?");
}

// Step 2: User inputs random number between 8-128
var userChoice = Math.floor(Math.random() * 128) + 8;
console.log(userChoice);

// Step 2: Computer prompts user for length of password


// Step 3: Computer prompts user for character types to include in password

// Step 4: Computer validates input

// Step 5: Computer generates password

//Step 6: Computer displays password to user






