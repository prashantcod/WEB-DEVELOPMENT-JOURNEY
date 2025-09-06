
// Async Functions : 
// (async and await Keywords)

// async function yellow(){ 
//    throw "404 page not found !!! ";
//    return "Hello Prash !" ;  // returns the Promise Object
// }

// yellow()
//   .then( (result) => { 
//       console.log("Promise was Resolved");
//       console.log("result was : " ,result);
//   })
//   .catch((error) => { 
//       console.log("Promise was Rejected");
//       console.log("Error was : " ,error );
//   })


// // async fxn in a variable : 

// let demo = async () => { 
//      return "Prashant Aryal";
// }

//---------------------------------------------------------------------------
// Await Keyword : 


// function getNum() { 
//     return new Promise( (resolve , reject) =>  { 
//       setTimeout(() => { 
//           let num = Math.floor(Math.random()* 10) +1 ; 
//           console.log(num);
//           resolve();
//       } , 1000);   
//     });
// }

// async function demo() {
//    await getNum(); 
//    await getNum(); 
//    await getNum(); 

// }
//---------------------------------------------------------------------------

// Optimizing that Changecolor() fxn code using async and await keyword : 
// and Handling rejections in Promise 

// let h1 = document.querySelector("h1");


// function Changecolor(color,delay){ 
//   return new Promise( (resolve , reject) => { 
//      setTimeout(()=> { 
//        let randNum = Math.floor(Math.random() * 5) + 1 ;
//        if (randNum > 3){ 
//           reject("Your promise Was Rejected !!!");
//        }
//        h1.style.color = color; 
//        console.log(`COLOUR CHANGED TO ${color} in ${delay/1000} seconds ....`)
//        resolve("Colour Changed !!!")
//     },delay)
//   }) 
// }

// async function runcolor() { 
//  try { 
//    await Changecolor("red" , 1000);
//    await Changecolor("blue" , 2000);
//    await Changecolor("yellow" , 3000);
//    await Changecolor("green" , 4000);
//  }
//  catch(err){ 
//     console.log("error caught ");
//     console.log(err);
//  }
   


// }


// Changecolor("red" , 1000)
//   .then( () => { 
//       console.log("Red Colour Was Completed!");
//       return Changecolor("blue" , 1000);
//   })
//   .then( () => { 
//       console.log("Blue Colour Was Completed!");
//       return Changecolor("green" , 1000);
//   })
//   .then( () => { 
//       console.log("Blue Colour Was Completed!");
//   }) 
//   // here it doesn't run as I don't have this case 
//   .catch( () => { 
//       console.log("Invalid Colour !!!!!!!!");
//   })
//---------------------------------------------------------------------------

// APIS 
// FREE APIS : catfact.ninja/fact


// JSON -Javascript object Notation : 

// let jsonResponse = '{"fact":"Cats make about 100 different sounds. Dogs make only about 10.","length":62}';

// let validResponse = JSON.parse(jsonResponse);  // json -> js object 
// console.log(validResponse.fact); 


// let student = { 
//     name : "prash" , 
//     age : 12 , 
//     grade : "A"
// }

// let StringifyResponse = JSON.stringify(student);
// console.log(StringifyResponse);


//---------------------------------------------------------------------------

// Our FIRST API REQUEST USING fetch 

// let url = "https://catfact.ninja/fact";

// fetch(url)
//  .then( (response) => { 
//       // console.log(response.json()) // with this fxn it becomes Readable.
//       return response.json();
//  })
//  .then( (data1)=> { 
//           console.log("DATA1 : " ,data1.fact);  // as it has been in js
//           return fetch(url);
//       })
//   .then( (response) => { 
//       return response.json();
//   })
//   .then ( (data2) => { 
//       console.log("DATA2 : " ,data2.fact);
//   })
//  .catch( (err) => { 
//       console.log("error is : " ,err);
//  })

//---------------------------------------------------------------------------


// Optimizing this with asyn and await : 


let url = "https://catfact.ninja/fact";


async function getFacts(){ 
  try{ 
    let res = await fetch(url);
    let data = await res.json() ;    // converting into readable format
    console.log(data.fact);
  }catch { 
      console.log("Error : " ,e);
  }
  console.log("bye apna baby");
    
}

















//---------------------------------------------------------------------------
