// Assignment Code
const generateBtn = document.querySelector("#generate");

/* this function creates a password based on inputted specifications
   (lowercase, uppercase, numbers and special characters.
    It also lets you set the length between 8-128*/
function writePassword() {

// set up my two arrays I will be pushing to and my variable that will get displayed
const digitArray = []
const password = []
let myNewPasswordDisplay = ""

//four prompts/loops to ask if you want to include each type of figure in your password 
const lowerCase = prompt('Do you want lowercase in your password?', 'yes or no');
if (lowerCase.toLowerCase() === 'yes') {
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  for (let index = 0; index < lower.length; index++) {
    digitArray.push (lower[index])
  }
}; 

const upperCase = prompt('Do you want uppercase in your password?', 'yes or no');
if (upperCase.toLowerCase() === 'yes') {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let index = 0; index < upper.length; index++) {
    digitArray.push (upper[index])
  }
}; 

const numbers = prompt('Do you want numbers in your password?', 'yes or no');
if (numbers.toLowerCase() === 'yes') {
  const digits = '0123456789'
  for (let index = 0; index < digits.length; index++) {
    digitArray.push (digits[index])
  }
};

const specialCharacters = prompt('Do you want special characters in your password?', 'yes or no');
if (specialCharacters.toLowerCase() === 'yes') {
  const special = '!@#$%^&*?_'
  for (let index = 0; index < special.length; index++) {
    digitArray.push (special[index])
  }
}; 

// I got the below way to get a number from prompt box from this link https://stackoverflow.com/questions/17907455/how-to-get-numeric-value-from-a-prompt-box

const passWordLengthPrompt = prompt('Please enter password length between 8 and 128', '')
const passWordLength = parseInt(passWordLengthPrompt)

// got the random method to select from an array here https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

//if else statement to make sure the password is in the acceptable range 8-128
//else portion adds a randomized group of digits from our digitArray to our password array

  if (passWordLength > 128) {
    myNewPasswordDisplay = 'To long, please try again!'
    document.getElementById("password").innerHTML = myNewPasswordDisplay
  } else if (passWordLength < 8) {
    myNewPasswordDisplay = 'To short, please try again!'
    document.getElementById("password").innerHTML = myNewPasswordDisplay
  } else {
    for (let index = 0; index < passWordLength; index++) {
    const random = Math.floor(Math.random() * digitArray.length);
    password.push ((digitArray[random]))
  };
  
//converts the password array into a string then displays that new password

  myNewPasswordDisplay = password.join((''))
  
  document.getElementById("password").innerHTML = myNewPasswordDisplay
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);