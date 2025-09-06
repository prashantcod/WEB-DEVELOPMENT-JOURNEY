// this keyword : 

// const college = { 
//     name : "jain" , 
//     math : 98 , 
//     science : 87 , 
//     computer : 83, 
//     avgeragee() { 
//          let avg = ((this.math + this.science + this.computer)/3);
//          console.log(`This is ${this.name} which has these subjects  and it's averages is : ` , avg);
//     }
// }

// college.avgeragee(); 

// TRY AND CATCH : 

// console.log("THIS IS EXCEPTION HANDLING !!! ");
// try { 
//     console.log(a);
// }catch { 
//     console.log("THE VARIABLE IS NOT DEFINED"); 
// }
// console.log(9+1);


// ARROW FUNCTIONS : =>

  // const sub = (a , b) => { 
       
  //      console.log(a-b) ; 
  // }

  // const square = n => { 
  //      return n**2 ; 
  // }


// implicit return in arrow fxn : -> here we use () instead of {} remember that . 

// const mul = (a,b) => (a*b) ; 


//SET TIMEOUT : 
// setTimeout(fcuntion , timeout) : 
// console.log("HI THERE !!! ");

// setTimeout( () => { 
//      console.log("PRASHANT GYAWALI !!!");
// } , 3500);

// console.log("MY NAME IS ");



// SETINTERVAL ( FUNCTION , INTERVAL/TIMEOUT) --> here Interval = 3000 means it  excutes this function every 3000ms everytime infinitely to stop we use functionvaribale and clearInterval() ; 

// console.log("THIS IS setInterval fxn ") ; 

// let stop =  setInterval( ()=> { 
//     console.log("Hey there THIS IS INFINTE BABY");
// } , 5000);

//    let stop2 =  setInterval( ()=> { 
//     console.log("NEXT ");
// } , 8000);

//Write a function that prints out "Prash" 5 times at intervals of 2s each : 

let stopping = setInterval( ()=> { 
    console.log("Prash");
} , 2000);

setTimeout( ()=> { 
    clearInterval(stopping);
    console.log("EXCEUTED SUCESSFULLY BABY")
}, 10000)