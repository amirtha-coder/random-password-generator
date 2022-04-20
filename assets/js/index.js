// Assignment Code
const generateBtn = document.querySelector("#generate");

//list of arrays

const alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const alphaLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = [
  "!",
  '"',
  "#",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Changeable boolean
let valid = false;

//Password length question  - not working
const getPasswordLength = () => {
  //have a prompt for password length
  const lengthNum = prompt(
    "What is the length of your password?- try to have it between 8-26 characters"
  );
  // rules + boolean

  if (isNaN(lengthNum) || lengthNum < 8 || lengthNum > 26) {
    alert("this message contains too few numbers or has characters");
    return null;
  }
  return parseInt(lengthNum);
};

const getPasswordCriteria = () => {
  let passwordValues = [];
  const wantsLowercaseLetters = confirm("do you want lowercase letters?");
  if (wantsLowercaseLetters) {
    passwordValues = [...alphaLower];
  }
  //push ???
  const wantsUppercaseLetters = confirm("do you want uppercase letters?");
  if (wantsUppercaseLetters) {
    passwordValues = [...passwordValues, ...alphaUpper];
  }

  //push ???
  const wantsNumbers = confirm("do you want numbers?");
  if (wantsNumbers) {
    passwordValues = [...passwordValues, ...numbers];
  }
  ``;
  //push ???
  const wantSpecial = confirm("do you want special characters?");
  if (wantSpecial) {
    passwordValues = [...passwordValues, ...special];
  }
  return passwordValues;

  // notes from class
  // return [
  //   "abcdefghijklmnopqrstuvwxyz",
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  //   "0123456789",
  //   " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  // ];
};
const createRandomPassword = () => {
  // how to math random function????
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  if (!passwordLength) {
    return;
  }
  // get the password criteria
  const passwordCriteria = getPasswordCriteria();
  console.log(passwordCriteria);
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
