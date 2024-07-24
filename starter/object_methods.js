const jawad = {
    firstName :  'Jawad',
    lastName  :  'khan',
    birthYear     :  2037 - 1991 ,
    job       : 'teacher',
    friends   :  ['Michael' , 'Peter' , 'Steven'], 
    hasDriversLicense : true,
    // 
    
    calcAge :  function(){
        console.log(this);    // this points to jawad object
        return 2037 - this.birthYear;  // this points to jawad birthyear object
    }
 
};

//same as above 
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }


//console.log(jawad.calcAge(1991));    // using dot 

console.log(jawad.calcAge());

//console.log(jawad['calcAge'](1991)); // using braces 






 