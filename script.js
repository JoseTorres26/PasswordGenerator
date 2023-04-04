// Assignment Code
var generateBtn = document.querySelector("#generate");

const passwordCharacterLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const passwordCharacterUp = ["A", "B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Q", "P", "Q", "R", "S", "T", "U", "'V", "W", "X", "Y", "Z"];
const passwordCharacterSym = ["~", "`","!"," @", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "\ ", ":", ";","'", "<", ",", ">", ".", "?", "/"];
const passwordCharacterNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let selectedCharacters = [""]

// Write password to the #password input
function writePassword() {
  let length = prompt("Please choose a length (Between 8-128)");
  if (!length) {
   return writePassword;
  } else  if(length > 128) {
    alert("please choose less than 128")
    return;
  }
    else if(length < 8) {
      alert("Please choose a length of at least 8 characters")
      return;
    }
    
  if (length >= 8) {
   console.log(length);
  } 
  if (confirm("Do you want to include lowercase?") ) {
    console.log("true");
   selectedCharacters = selectedCharacters.concat(passwordCharacterLow)
    console.log(selectedCharacters);
  } else  {
    console.log("false");
  
  }
  if (confirm("Do you want to include uppercase?")) {
    console.log("true")
   selectedCharacters = selectedCharacters.concat(passwordCharacterUp)
    console.log(selectedCharacters);
  } else {
    console.log("false")
    
  }
  if (confirm("Do you want to include symbols?")) {
    console.log("true");
   selectedCharacters = selectedCharacters.concat(passwordCharacterSym)
    console.log(selectedCharacters);
  } else {
    console.log("false")
    
  } 
  if (confirm("Do you want to include numbers?")) {
  console.log("true");
  selectedCharacters = selectedCharacters.concat(passwordCharacterNum)
  console.log(selectedCharacters);
} else {
  console.log("false")
}    
let passLength = Number(length);
    console.log(passLength);
function generatePassword() {
  for (let i = 0; i < passLength; i++) {
    const pass = selectedCharacters[Math.floor(Math.random() * passLength)];
     }
     console.log(generatePassword());
    };
  
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var element = this.EventTarget;
