// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";

// Write code here

// add code to change password variable.

// window.prompt
// window.confirm

  return password; // return generated password
}

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button // Still will learn about it.
generateBtn.addEventListener("click", writePassword);


