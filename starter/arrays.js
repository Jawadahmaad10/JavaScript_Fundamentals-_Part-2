const friend1 = 'Michael';
const friend2 = 'Steven' ;
const friend3 = 'Peter';

//1. Array one

const friends = ['Michael' , 'Steven' , 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);
// Accessing the Last Element: friends[friends.length - 1]
// This expression calculates the index of the last element in the friends array. friends.length gives the total number of elements in the array, which is 3 in this case. Subtracting 1 from this length gives the index of the last element (since array indices are zero-based), which is 2.


//changing or mutating index 2 value from Peter to James
friends[2] = 'James';

console.log(friends);

//2. Array two 
const years = new Array(1991,1984,2008,2020);
console.log(years);
console.log(years[0]);  //accesing index zero 





//3. Array 3 

const firstname = 'Jawad';
const jonas = [firstname,'Khan' , 2037 - 1991 , 'teacher' , friends];
console.log(jonas);
console.log(jonas.length);



//4. Exercise
// Passing array index values to a function to calculate ages


const calcAge = function(birthYear){
   return 2037 - birthYear;  
}


const year = [1990,1991,1992,1993,1995];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[2]);
const age3 = calcAge(year[year.length-1]);


console.log(age1,age2,age3);


//it gives the 3 ages values in array
const ages = [calcAge(year[0]) , calcAge(year[2]), calcAge(year[year.length-1])];

console.log(ages);


