let employee = [
   {name:"ishwar", age:25, height:5.6, salary:35000, bg:"o+ve"},
   {name:"ram", age:25, height:5.6, salary:35000, bg:"a+ve"},
   {name:"sattya", age:24, height:5.6, salary:35000, bg:"ab+ve"},
   {name:"pranay", age:23, height:5.6, salary:30000, bg:"o+ve"},
   {name:"sandeep", age:25, height:5.6, salary:45000, bg:"b-ve"},
   {name:"ahamadh", age:23, height:5.6, salary:55000, bg:"o+ve"},
   {name:"jithendra", age:24, height:5.6, salary:30000, bg:"ab+ve"},
   {name:"narendra", age:25, height:5.6, salary:35000, bg:"a+ve"}
];

for(i=0;i<employee.length-1;i++){
   if(employee[i].age>23,employee[i].salary>=35000,employee[i].bg=="o+ve")
  console.log(employee[i]);
}