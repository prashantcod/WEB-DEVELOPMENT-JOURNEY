// CALL STACK : 
// function one(){ 
//     return 1 ; 
// }

// function two(){ 
//     return one() + one() ; 
// }

// function three() { 
//      let add = two() + one() ;
//      console.log(add);
// }

// three() ; 
//---------------------------------------------------------------------------
// CallBack Hell : 

// let h1 = document.querySelector("h1");


// function Changecolor(color,delay,nextColorChange){ 
//     setTimeout(function(){ 
//        h1.style.color = color; 
//         if (nextColorChange) nextColorChange();
//     },delay)
// }

// // here this is nested callback hell 

// Changecolor("red" , 1000 , function(){ 
//    Changecolor("yellow" , 1000 , function(){ 
//         Changecolor("blue" , 1000)
//    });  
// })
// Changecolor("blue" , 4000)


// setTimeout( function(){ 
//    h1.style.color = "purple";
// },2000);


// setTimeout( function(){ 
//    h1.style.color = "green";
// },3000);

//---------------------------------------------------------------------------
// promises 

// function saveDb(data , sucess , faliure ){ 
//     let internetSpeed = Math.floor(Math.random() *10 )+1 ; 
//     if (internetSpeed > 4){ 
//           sucess(); 
//     }
//     else { 
//          faliure() ; 
//     }
// }
// // calling the fxn saveDb  and this is Callback Hell 
// saveDb( "Prashant Gyawali" , 
//    () => { 
//         console.log("Sucess : Data was stored in DB");
//         // for the next data to be saved in Db 
//         saveDb("Cherrrinng sherpa" , () => { 
//             console.log("Sucess2 : Data2 was stored in DB") ; 
//              saveDb("Kapil Shah" , () => { 
//                  console.log("Sucess3 : Data3 was stored in DB") ;   
//              } , () => { 
//             console.log("Faliure3 : Weak Connection : Data3 was not saved ") ; 

//              })
//         } , 
//        () => { 
//             console.log("Faliure2 : Weak Connection : Data2 was not saved ") ; 
//        })
//    } , 
//   () => { 
//        console.log("Faliure : Weak Connection : Data was not saved ");
//   });


// NOW USING Promise Object  : 

// function saveDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Sucess : Data was stored in DB");
//     } else {
//       reject("Faliure : Weak Connection : Data was not saved")
//     }
//   }
//   )
// }

// saveDb("Prashant Gyawali")
// .then( () => { 
//      console.log("Promise Was Resolved. . . ");
// } )
// .catch( () => { 
//     console.log("Promise was Rejected !!!!!")
// })

//---------------------------------------------------------------------------
// Promise Chaining :(Improved Version)  --> multiple then() and one catch() like exceptions that we have studied 
// saveDb("Acchividhu Aryal")
//   .then((result) => {
//     console.log(" Data1 Saved : Promise Was Resolved. . . ");
//     console.log("Result of Promise : " , result);
//     return saveDb("Praccti Gyawali Aryal"); // here it returns the new Promise as an output and passes to next then() so that that next then() could perform action on it . 
//   })
//   .then((result) => {
//     console.log("Data2 Saved : Promise Was Resolved. . . ");
//     console.log("Result of Promise : " , result);
//   })
//   .catch((error) => {
//     console.log("Promise was Rejected !!!!!");
//     console.log("Error of Promise : " , error);

//   })

//---------------------------------------------------------------------------


// OPTIMIZING THAT CALLBACK HELL CODE FROM LINE (17 - 46 ): NOW WE USE PROMISES


let h1 = document.querySelector("h1");


function Changecolor(color,delay){ 
  return new Promise( (resolve , reject) => { 
     setTimeout(()=> { 
       h1.style.color = color; 
       resolve("Colour Changed !!!")
    },delay)
  }) 
}

Changecolor("red" , 1000)
  .then( () => { 
      console.log("Red Colour Was Completed!");
      return Changecolor("blue" , 1000);
  })
  .then( () => { 
      console.log("Blue Colour Was Completed!");
      return Changecolor("green" , 1000);
  })
  .then( () => { 
      console.log("Blue Colour Was Completed!");
  }) 
  // here it doesn't run as I don't have this case 
  .catch( () => { 
      console.log("Invalid Colour !!!!!!!!");
  })
//---------------------------------------------------------------------------


// Optimizing that Changecolor() fxn code using async and await keyword : 

let h1 = document.querySelector("h1");


function Changecolor(color,delay){ 
  return new Promise( (resolve , reject) => { 
     setTimeout(()=> { 
       h1.style.color = color; 
       resolve("Colour Changed !!!")
    },delay)
  }) 
}

async function runcolor() { 
   await Changecolor("red" , 1000);
   await Changecolor("blue" , 1000);
   await Changecolor("yellow" , 1000);
   await Changecolor("green" , 1000);


}
