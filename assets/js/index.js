// Assignment Code
const generateBtn = document.querySelector("#generate");

//list of arrays
// const allCHar = alphaUpper + alphaLower + numbers + special;
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

//Password length  prompt
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

// password criteria for characters
const getPasswordCriteria = () => {
  let passwordValues = [];
  const wantsLowercaseLetters = confirm("do you want lowercase letters?");
  if (wantsLowercaseLetters) {
    passwordValues = [...alphaLower];
  }

  const wantsUppercaseLetters = confirm("do you want uppercase letters?");
  if (wantsUppercaseLetters) {
    passwordValues = [...passwordValues, ...alphaUpper];
  }

  const wantsNumbers = confirm("do you want numbers?");
  if (wantsNumbers) {
    passwordValues = [...passwordValues, ...numbers];
  }

  const wantSpecial = confirm("do you want special characters?");
  if (wantSpecial) {
    passwordValues = [...passwordValues, ...special];
  }
  if (
    !wantsNumbers &&
    !wantsUppercaseLetters &&
    !wantsUppercaseLetters &&
    !wantSpecial
  ) {
    alert("at least 1 of these options must be chosen");
    return;
  }

  return passwordValues;
};

// random password
const createRandomPassword = (length, passwordValues) => {
  let password = [];
  for (i = 0; i < length; i += 1) {
    let randomIndex = Math.floor(Math.random() * passwordValues.length);
    password.push(passwordValues[randomIndex]);
  }
  return password.join("");
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
  if (!passwordCriteria) {
    return "Please start again!";
  }
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
