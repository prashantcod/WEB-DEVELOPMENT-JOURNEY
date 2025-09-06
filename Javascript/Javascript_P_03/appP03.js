//STRING METHODS : 

// trim()  --> only trims on left side 

let greet = "    HELLO       Prashant     ";
console.log(greet);
console.log(greet.trim()) ; 


//STRING METHODS WITH ARGUMENTS : 


//indexof(): 

let naming ="i love me";
let he = naming.indexOf("love");   // 1 
console.log(he);

//Method Chaining : using one method after another . order of execution will be from the left to right

let final = naming.toUpperCase().trim() ; 
console.log(final);


//slice(start , end) : 

// console.log(naming.slice(1,6));
console.log(naming.slice(-2));   // 7-2 = 5 so it starts with 

//replace() : 

console.log(naming.replace("love" , "hate"));  
console.log(naming); //here the original string is not replaced though . 

//repeat():  in a same line it repeat's it's string or make copies of it . 

console.log(naming.repeat(5)); 


//practice baby 

let msg = "  help!  ";
console.log(msg.trim().toUpperCase());

let msg1 ="APNACOLLEGE" ;
console.log(msg1.slice(4,11).replace("L","t"));


//Arrays  are mutable tho : 


//creation 

let arr = [1,2,3,4,5];
console.log(arr);


let arr1 = [];
arr1[0] = ["Prashant"];
arr1[1] = [8];
arr1[5] = ["Adityamuji"];
console.log(arr1);



// splice()

let my_arr = ["janauary" , "july" ,"march" , "august"];
my_arr.splice(1);
my_arr.splice(1,0,"june");



//ARRAY REFERENCES : 
let arr4 = ["a" , "b"] ; 
let newarr = arr4 ; 



