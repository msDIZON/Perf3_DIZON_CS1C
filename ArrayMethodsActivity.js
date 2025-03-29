// USE OF .concat()
// to join the two variables into one array
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", " Linus"];

console.log(arr1.concat(arr2));

// Using .push(), add "Kiwi" at the end of the array

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// to add "Kiwi" at the end of array
fruits.push("Kiwi"); 
// console the updated array
console.log("The use of Push:", fruits);

// Using .unshift(), 

let array1 = [1,2,3]; 
// add 4 and 5 at the beginning of the array
array1.unshift(4,5); 
// console the array with updated elements
console.log("The use of Unshift:", array1);

// Using .pop(), 
//to remove the last element ("Kiwi") at the end of array
fruits.pop(); 
// console the fruits array with updated element
console.log("The use of Pop:", fruits);

// Using .shift(), 

let array2 = [1,2,3]; 
//to remove the first element (1) in the array
array2.shift(); 
//console the updated array and new element
console.log("The use of Shift:", array2);

// Using .sort(), 
//to sort the element inside the array 
let fruits_sorted = fruits.sort(); 
//console the updated array that is sorted
console.log("The use of Sort:", fruits_sorted);

//  Using .slice(), 
//to create a new array containing a portion of the fruits array.
let fruits_lists = fruits.slice(2); 
// console the updated element inside the array
console.log("The use of Slice:", fruits_lists);

// Using .splice(), to insert and remove an element in the array

let months = ["July", "May", "June", "April", "March"];
// to remove an element (June) inside the array
months.splice(2,1); 
// console the updated alement
console.log("Removed Element Using Splice:", months); 

// to insert another months ("February") inside the array
months.splice(2,0, "February"); 
// console the updated element 
console.log("Inserted Element Using Splice:", months);
