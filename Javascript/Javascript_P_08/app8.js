// ARRAY METHODS : These are all high order fxn's that uses callback . 

// FOREACH(func or name)  : 
// FOREACH FOR ARRAY ONLY : 
// let arr = [1,2,3,4,5];

//using normal function inside foreach : 
// arr.forEach(function (arg){ 
//     console.log(arg);
// })

//using function variables : 

// let my_aroos = function (arg){ 
//     console.log(arg);
// }
// arr.forEach(my_aroos);

// using arrow functions : 

// arr.forEach((arg) =>{ 
//     console.log(arg);
// } ) 


//------------------------------------------------------------------------------
// Map and Filter : 
// map 
// let mero_array = [2 ,3 , 4, 5 ,7]; 
// let triple = mero_array.map( (exp)=> { 
//      return exp *3 ; 
// })

// FLITER :
// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// let even = nums.filter( (num) => (num % 2 == 0));

//------------------------------------------------------------------------------

//every() 
// let numing = [1,2,3,4,5];
// let hehe = numing.every( (ev) => (ev % 2 == 0));

//------------------------------------------------------------------------------
// reduce () 

// let hello = [1,2,3,4,5].reduce( (res, el) => (res*el));

// FINDING MAXIMUM NUMBER IN AN ARRAY USING reduce()

// Normal way to finding the maximum value is : 

// let val = [1,2,35,6,98,6,3];

// let max = -1 ; 
// for (let i = 1 ; i<val.length ; i++){ 
//     if(max < val[i]){ 
//         max = val[i];
//     }
// }
// console.log(max);

//now using the reduce() : 

// let max = val.reduce( (max , el) => { 
//     if(max < el){ 
//         return el ; 
//     }else { 
//         return max ; 
//     }
// });
// console.log(max);

//------------------------------------------------------------------------------

// arr = [10 ,20,30,40,50];
// let result = arr.every( (el) => (el%10 ==0)); 
// console.log("HEHE IT'S IS THO ");

//------------------------------------------------------------------------------


// default parameters : 

// function sum(b , a=5){ 
//     return a+b ;
// }

// console.log(sum(6));

//------------------------------------------------------------------------------
// spread ()  --> uses ... to expands an iterable into multiple values . 
// hehe = "PRASHANT GYAWALI" ; 
// console.log(...hehe);

// // spread with array literals 

// huhu = [..."PRASHANTPRACCTI"];
// console.log(huhu);


// // spread with object : 
// let hihi = { 
//     name : "prash" , 
//     password : 4543 
// };

// let dataparting = {...hihi , id : "14btre43"}; 

//------------------------------------------------------------------------------
// rest ()

// function sum(...s){ 
//    //arguments 
//    for(let i = 0 ; i < s.length ; i++){ 
//       console.log("You gave us : " , arguments[i]);
//    }
// }

// function min(a , b , c , d){ 
//    console.log(arguments);   //here this arguments act as an array but it's not as we cannot apply array methods on it . 
//    console.log(arguments.length);
//    console.log(arguments[1]);
// }

// // AS WE CANNOT USE ARRAY METHODS IN arugments we will use rest() 
// // function sum(){ 
// //    return arguments.reduce((sum,el) => sum+el);
// // }


// // using rest()
// function sum(...args){ 
//       return args.reduce( (su,el) => su+el);
// }

//------------------------------------------------------------------------------

//Destructuring in js 

// let num = [10 ,20, 30 ,40 ,50 ];

// //normal way 
// let a = num[0];
// let b = num[1];

//destructuring method : 
// let [a1 , b2 , c3 , d4 , e5] = num; 
// console.log(a1);
// console.log(b2);
// console.log(e5);

//destructuring method  with  rest: 
// let hehe = ["abc" , "hehe" , "prash" , 1, 3 ,5 ,"arrayan" , "bhalu " , "aalu" , "maaluchinke" , "hihihi"];
// let[e6 , g , h, j, ,k ,l , ...others] = hehe ; 
// console.log(...others);
// console.log(e6);
// console.log(j);
// console.log(l);


//destrcuting with objects : 
const student = { 
    name : "prash" , 
    id : 123 , 
    usn : 148459,
    locaion : "ranamanager " , 
    passord : "hdfhoehrf "
}

// to use destructing we use {} instead of [] 
// let {locaion , passord} = student ;
// console.log(locaion);
// console.log(passord) ; 


// to use destructuing to assign this to new variable we give a new name with the key of it : 
let {locaion : hehi , passord : pasi} = student ; 
console.log(hehi);
console.log(pasi);

//------------------------------------------------------------------------------









