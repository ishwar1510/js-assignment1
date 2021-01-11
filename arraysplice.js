/*-----javascript Array Splice Method-------*/
/*Definition and Usage
The splice() method adds/removes items to/from an array, and returns the removed item(s).
with particular mensioned position only.
Note: This method changes the original array.*/

/*---add the data in 2nd position that is 2 and remove the data from original array is 0 ---*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);



/*---add the data in 2nd position that is 2 and remove 2nd posion data from original array that is 1 ---*/
let colors = ['red','pink','green','blue','white'];
colors.splice(2, 1,'ishwar','sattya');
console.log(colors);


/*---add the data in 2nd position that is 2 and remove 2nd posion of 2 data from original array, that is 2 ---*/
let names = ['red','pink','green','blue','white'];
names.splice(2, 2,'ishwar','sattya');
console.log(names);