//strict mode allow developers to avaoid accidental errors
// avoid bugs in our code 
//1. first strict mode forbids us to do certain things
// 2 . It will create visible errors in certain situations

'use strict';

let hasDriversLicense = false;
const passTest = true;




if(passTest) hasDriversLicense = true ;
if(hasDriversLicense) console.log("I can drive :D");



// gives error because   in console - > SyntaxError: Unexpected strict mode reserved word
const interface = 'Audio';


