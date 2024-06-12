//Random password generator


function generatePassword(length, includeLowercase, includeNumbers, includeUppercase,includeSymbols){
  const LowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "0123456789";
  const symbolChars = "!@#$$%^&*()-+=";
 let allowedChars = "";
 let password = "";
 
 allowedChars += includeLowercase ? LowercaseChars: "";
 allowedChars += includeUppercase ? UppercaseChars: "";
 allowedChars += includeNumbers ? numberChar: "";
 allowedChars += includeSymbols ? symbolChars:"";
 console.log(allowedChars);

 if(length<=0){
  return `(password length must be at least 1)`;
  }

 if(allowedChars.length === 0){
  return `(At least 1 set of character needs to be selected)`;
 } 

 for(i = 0; i<length; i++){
  const randomIndex = Math.floor(Math.random() * allowedChars.length);
 }

 return password;
}

 const passwordLength = 12;
 const includeLowercase = true;
 const includeUppercase = true;
 const includeNumbers = true;
 const includeSymbols = true;



 const password = generatePassword(passwordLength,
                                   includeLowercase,
                                   includeUppercase, 
                                   includeNumbers,
                                   includeSymbols);

console.log(`Generator password: ${password}`);

