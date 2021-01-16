var arr = [
   {name : "ish", age : 26, bg : "o+ve", salary : 40000 },
   {name :"abc", age : 24, bg : "o-ve", salary : 35000 },
   {name :"pqr", age : 26, bg : "o+ve", salary : 40000 },
   {name : "xyz", age : 25, bg : "ab+ve", salary : 50000 },
   {name : "stu", age : 24, bg : "a+ve", salary : 30000 },
   {name : "rst", age : 25, bg : "o+ve", salary : 40000 }
];
// console.log(arr);
 
for(i=0;i<=arr.length-1;i++){
   if(arr[i].salary>30000)
   console.log(arr[i]);
}