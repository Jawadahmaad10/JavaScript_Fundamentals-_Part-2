function cutFruitPieces(fruit){
   return fruit * 4 ; 
}

function fruitProcessor(apples,oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
  
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} of orange pieces`;

    return juice;
} 



const thefruit = fruitProcessor(2, 3);
console.log(thefruit);






function car(carparts){
    return car * 4 ;
}



// const carprocessing(bonut, bumper){
// const a = car(bonut);
// const b = car (bumper);

// const j = `${a} and b  ${b} are these`;

// return j ;
// }


// const e = carprocessing(2,3);
// console.log(e);








