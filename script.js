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

function generatePassword() {
  prompt ("How many characters would you like your password to contain?"); // Step 2: User inputs number between 8-128
  confirm ("Click OK to confirm including lowercase letters."); 
  confirm ("Click OK to confirm including uppercase letters."); 
  confirm ("Click OK to confirm including special characters.");
  confirm ("Click OK to confirm including numerical characters.");
} // Step 3: Ask user for character types to include in password

// Step 4: Validate input
var passwordArray = [];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];
var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Step 5: Generate password
function getRandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUpToMax = randomNumber * max
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);

}
function getRandomValueFromArray(lowercase) {
  var randomArrayPosition = getRandomNumber (0, lowercase.length);
  return lowercase [randomArrayPosition];
}

console.log (getRandomValueFromArray(lowercase));

function getRandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUpToMax = randomNumber * max
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);

}
function getRandomValueFromArray(uppercase) {
  var randomArrayPosition = getRandomNumber (0, uppercase.length);
  return uppercase [randomArrayPosition];
}

console.log (getRandomValueFromArray(uppercase));

function getRandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUpToMax = randomNumber * max
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);

}
function getRandomValueFromArray(specialCharacters) {
  var randomArrayPosition = getRandomNumber (0, specialCharacters.length);
  return specialCharacters [randomArrayPosition];
}

console.log (getRandomValueFromArray(specialCharacters));

function getRandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUpToMax = randomNumber * max
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);

}
function getRandomValueFromArray(numerals) {
  var randomArrayPosition = getRandomNumber (0, numerals.length);
  return numerals [randomArrayPosition];
}

console.log (getRandomValueFromArray(numerals));

//Step 6: Computer displays password to user






