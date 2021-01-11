/*-------2D Array creation and Access items from 2D Array------*/

var items = [
   [1, 2],
   [3, 4],
   [5, 6]
 ];
 console.log(items[0][0]); // 1
 console.log(items[0][1]); // 2
 console.log(items[1][0]); // 3
 console.log(items[1][1]); // 4
 console.log(items[2][0]); // 5
 console.log(items[2][1]); // 6
 console.log(items);



 /*--------------sum of 2D Array----------*/

 let array = [
    [5, 3],
    [6, 4],
    [8, 2]
 ];

 let sum = 0;
 //console.log(array.length);

 for(let i = 0; i< array.length; i++){
    //console.log(array[i]);
    for(let j = 0; j <array[i].length;j++){
       //console.log(array[i][j]);
       sum += array[i][j];
    }
 }
 console.log(sum);