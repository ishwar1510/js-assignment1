/*----javascript array slice method---*/
/*Definition and Usage
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array will not be changed.*/


/*---extract the second position and the third item from the array --*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var x = fruits.slice(1, 3);
console.log('Extracted fruits:',x);