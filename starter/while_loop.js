// for looop
for(let rep=1 ; rep<= 5 ; rep++ ){
    console.log(`For loop ${rep}` );
}


// while loop
 let rep= 1 ;
while(rep<=5){
    console.log(`while loop ${rep} `);
    rep++;
}


// 

//math.random() * 6 generates a random  number 
let dice = Math.trunc(Math.random() * 6) + 1 ;

while(dice !== 6){
    console.log(`You rolled a dice ${dice}`);
    
    //assigning again because brower will crash and it will iterate again and again
    dice = Math.trunc(Math.random() * 6) + 1 ;
    if(dice=== 6) console.log('Loop is about to end ');
}