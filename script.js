// Assignment Code
var generateBtn = document.querySelector("#generate");

const passwordCharacterLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const passwordCharacterUp = ["A", "B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Q", "P", "Q", "R", "S", "T", "U", "'V", "W", "X", "Y", "Z"];
const passwordCharacterSym = ["~", "`","!"," @", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "\ ", ":", ";","'", "<", ",", ">", ".", "?", "/"];
const passwordCharacterNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const selectedCharacters = ""
const passLength = "0"
// Write password to the #password input
function writePassword() {
  
  let length = prompt("Please choose a length (Between 8-128)");
  let low =  confirm("Do you want to include lowercase")
  let upper = confirm("Do you want to include uppercase")
 let symbol = confirm("Do you want to include symbols")
 let number = confirm("Do you want to include numbers")
  if (!length) {
   return
  } else  if(length > 128) {
    alert("please choose less than 128")
  }
    else if(length < 8) {
      alert("Please choose a length of at least 8 characters")
    }
  if (length >= 8) {
   low()
  } 
  if (low = true) {
    
    upper()
  } else {
    
    upper()
  }
  if (upper = true) {
    
    symbol()
  } else {
    
    symbol()
  }
  if (symbol = true) {
    
    number()
  } else {
    
    number()
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
