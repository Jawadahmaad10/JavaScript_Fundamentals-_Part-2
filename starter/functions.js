// Functions are piece of  code that we can use in our code over and over again 

// keyword

//function name(parameter1, parameter2, parameter3) {
    // code to be executed
 // }


 // 1.function one without parameters
 function logger(){     
    //function body 
    console.log("This is a logger function");
 } 

 // calling / running / invoking function
 logger();   // invoking calling a function 
 logger();
 logger();




 // 2. function two with parameters

 function fruitProcessor(apples , oranges){
   console.log(apples, oranges);
   
   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  
   return juice;
 }




 fruitProcessor(5,0);    //(arguments) == actual values of parameters are called arguments


 //the return value of fruitProcessor which is return juice is stored in appleJuice

 const appleJuice = fruitProcessor(5,0);
 console.log(appleJuice);
 console.log(fruitProcessor(5,0));


 // now calling the functio for this 

 const appleOrangeJuice = fruitProcessor(2,4);
 console.log(appleOrangeJuice);



 


