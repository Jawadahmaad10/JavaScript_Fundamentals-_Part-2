// Function declaration

// function add(a, b) {
//     return a + b;
//   }


// function calcAge1(birthYear){
// const age1 = new Date().getFullYear();
// const age = birthYear - age1;

// console.log(age);


// }

// let yousaf = calcAge1(2006);

//1. Function declaration

function calcAge1(birthYear){
  return 2037 - birthYear;  
}


const age1 = calcAge1(20);
console.log(age1);


//2. Function expression
//  function without name anonymous function
//    function (birthYear){
//    return 2037 - birthYear;
//}

// the above becomes an expression beacuse a value is calculated from the expression and stored in calcAge2


const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

console.log(age1,age2);



//chat gpt
// Anonymous function expression assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  

  console.log(greet('Alice')); // Output: Hello, Alice!
  



// Named function expression assigned to a variable
const factorial = function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  
  console.log(factorial(5)); // Output: 120
  