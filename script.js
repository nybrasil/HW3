// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password based on user criteria
function generatePassword() {
  var password = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return generatePassword();
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return generatePassword();
  }

  var allChars = "";
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

// window.prompt
// window.confirm

// Generate password
for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * allChars.length);
  password += allChars[randomIndex];
}

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


