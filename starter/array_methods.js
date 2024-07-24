

const friends = ['Michael' , 'Steven' , 'Peter']; 
// Add elements
const newLength = friends.push('Jawad');   //pushing value to array 
console.log(newLength);

//adds name to the beginning of the array 
friends.unshift('John');
console.log(friends);
// push adds element at the end of array
// unshift adds element to the end of array


// Remove Elements
friends.pop(); // removes last element
const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift(); // removes first element of array
console.log(friends);


// give the index position of element
console.log(friends.indexOf('Steven'));



// .includes('Steven'): This method checks if the array friends contains the string 'Steven'.
console.log(friends.includes('Steven'));



if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}
else{
    console.log('No friend');
}
