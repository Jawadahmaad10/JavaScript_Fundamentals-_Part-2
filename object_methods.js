//arrays are also objects 
const jawad = {
    firstName : 'Jawad',
    lastName  : 'Khan' ,
    birthYear : 1991,
    job       : 'coder',
    friends   : ['Khan' , 'Ahmad' , 'Jawad'],
    hasDriversLicense : true,
 
 // 1
 //    calcAge : function(birthYear){
 //     return 2037 - birthYear;
 //    }
 // 2
 //    calcAge : function (){
 //     console.log(this);
 //     return 2037 - this.birthYear;
 //    }
 
 //3 
    calcAge : function (){
     this.age = 2037 - this.birthYear;  //sets new property as below
     return this.age;
    },
 
    getSummary : function(){
    return `${this.firstName} is a ${this.calcAge()} -year old ${jawad.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license;`
    }
 
 };
 
 //setting new property or key value to jawad object or adding new or another key value pair 
 jawad.location = 'Pakistan';
 console.log(jawad);
 
 // const calcAge = function(birthYear){
 //     return 2037 - birthYear;
 // }
 
 
 console.log(jawad.calcAge());  // dot product
 //console.log(jawad['calcAge']());  // brackets
 
 //now for this.age = 2037 - birthyear above function
 console.log(jawad.age);
 
 console.log(jawad.getSummary());
 
 //Challenge 
 // "Jawad is a 46-year old teacher and he has a driver's license"