// Assignment Code
const generateBtn = document.querySelector("#generate");


//list of arrays
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphaLower= "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const special= "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

const valid = false 
const getPasswordLength = () => {
//have a prompt for password length 
const lengthNum = parseInt( prompt(
  "What is the length of your password?- try to have it between 8-26 characters"));

// rules + boolean 

if (lengthNum == isNaN || lengthNum < 8 || lengthNum > 256) {
alert ("this message contains too few numbers or has characters")
  
}
else (lengthNum <= 8 && lengthNum >= 256); {valid = true}
}


const getPasswordCriteria = () => {
prompt ("do you want lowercase letters?")
if (confirm) { 
  //push
}
prompt( "do you want uppercase letters?")
if (confirm){
//push
}
prompt ("do you want numbers?")
if (confirm){
//push
}
prompt ("do you want special characters?")
if (confirm){
  //push
}

  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

const createRandomPassword = () => {
   ``
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
