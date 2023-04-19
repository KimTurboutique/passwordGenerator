"use strict"

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

// Step 1: User clicks generate password button then user is prompt for password criteria

// Step 2: User inputs number between 8-128
function generatePassword() {
 var length = parseInt (prompt ("How many characters would you like your password to contain?")); 
 if (length<8 || length>128){
  alert ("Length MUST be between 8-128!")
  return null;
 }
 else if (Number.isNaN(length)){
  alert ("Password length must be a number!")
  return null;
 }

// Step 3: Ask user for character types to include in password
  var includesLowercase = confirm ("Click OK to confirm including lowercase letters."); 
  var includesUppercase = confirm ("Click OK to confirm including uppercase letters."); 
  var includesSpecialCharacters = confirm ("Click OK to confirm including special characters.");
  var includesNumbers = confirm ("Click OK to confirm including numerical characters.");

if (includesLowercase===false && includesUppercase=== false && includesSpecialCharacters=== false && includesNumbers=== false){
  alert ("MUST choose at least ONE type of character!")
  return null;
}

// Step 4: Validate input
var passwordArray = [];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];
var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var userChoice = []

function getRandomCharacter(arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr [index]
}

if (includesLowercase === true) {
  userChoice = userChoice.concat(lowercase)
}

if (includesUppercase === true) {
  userChoice = userChoice.concat (uppercase)
}

if (includesSpecialCharacters === true) {
  userChoice = userChoice.concat (specialCharacters)
}

if (includesNumbers === true) {
  userChoice = userChoice.concat (numerals)
}

// Step 5: Generate password
for (var i = 0; i<length; i++) {
  passwordArray.push(getRandomCharacter(userChoice))
}

//Step : Computer displays password to user

return passwordArray.join("")
}

