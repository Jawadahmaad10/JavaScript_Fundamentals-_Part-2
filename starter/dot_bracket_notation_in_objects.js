const jawad = {
    firstName :  'Jawad',
    lastName  :  'khan',
    age       :  2037 - 1991 ,
    job       : 'teacher',
    friends   :  ['Michael' , 'Peter' , 'Steven'], 
  };
 
 console.log(jawad);
 //DOT
 //accessing object property lastname by using dot operator
 console.log(jawad.lastName);

// BRACKET
//both works in same way by using brackets
 console.log(jawad['lastName']);

// firstName :  'Jawad',
// lastName  :  'khan',
// Name string is used here 'first' + Name

 const nameKey = 'Name';
 console.log(jawad['first' + nameKey]);


// lastName  :  'khan',
 console.log(jawad['last'+ nameKey]);




const interestedIn = prompt('What do you want to know about Jawad ? Choose firstName, lastName, age, job, and friends');
 // javascript will replace [interestedIn] with job that was given input by user
console.log(jawad[interestedIn]);   

 // jawad is the object and the property will be inserted int the [interested]
if(jawad[interestedIn]){
  console.log(jawad[interestedIn]);
}

else{
  console.log(" Wrong request ");
}
 
// add elements to objects 
jawad.location = 'Pakistan';
jawad['twitter'] = '@jawadkhan10';
console.log(jawad);

