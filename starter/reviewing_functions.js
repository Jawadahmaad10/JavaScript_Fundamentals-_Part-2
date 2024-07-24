
// function for calculating age 

const calcAge = function(years){
    return 2024 - years;
}



const yearsUntilRetirement = function (birthYear , firstname ) 
{

    const age = calcAge(birthYear);   //calling the above calcAge function for calculation of age
    const retirement = 66 - age ;
    
    if(retirement > 0){
        console.log( `${firstname} retires in ${ retirement} years`);
        return retirement;
    }
    else{
        console.log(`${firstname} has already retired  `);
        return -1 ;
    }
  
  
    // return retirement;
    // return `${firstname} retires in ${ retirement} years`;
}

console.log(yearsUntilRetirement(1950 , 'Jawad'));
console.log(yearsUntilRetirement(2002 , 'Khan'));





