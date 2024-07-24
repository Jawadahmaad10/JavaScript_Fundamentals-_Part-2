//Function Expression 

// Anonymous function expression assigned to a variable
const age2 = function (birthYear){
    return 2037 - birthYear;
}

const a = age2(1991);
console.log(a);



// Named function expression assigned to a variable

const age3 = function Age(birthYear){
    return 2037 - birthYear;
}

const b = age3(40);
console.log(b);


//Arrow functions 
//birthYear => 2037 - birthYear; 

const age4 = birthYear => 2037 - birthYear;     // one liner code
const c = age4(88);
console.log(c);
 





// more line of code we add body 
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    console.log(age);
    const retiremet = 65 - age ;
    return retiremet;
}


console.log(yearsUntilRetirement(1991));





//  (birthYear, firstname) in this case we use () braces because we have two arguments 

const retire = (birthYear , firstname) => {
 const age = 2024 - birthYear ;
 const retiremet = 65 - age ;
 
 return `${firstname} retires in ${retiremet} years`; 
}

const aa = retire(1991 , 'Jawad');

console.log(aa);
























