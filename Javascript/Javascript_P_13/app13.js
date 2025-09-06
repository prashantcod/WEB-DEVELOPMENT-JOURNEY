// AXIOS :  Library to make HTTP Requests. 

// Optimizing the code of part12 and by using AXIOS rather then fetch(url) to send request to API .

// let btn = document.querySelector("button");
// let h2 = document.querySelector("h2");
// let p = document.querySelector("#result");

// btn.addEventListener("click" , async () => { 
//    let fact =  await getFacts();
//   //  console.log(fact);
//    p.innerText = fact ; 
// })


// let url = "https://catfact.ninja/fact";


// async function getFacts(){ 
//   try{ 
//     let res = await axios.get(url);   // here it get us json 
//     return res.data.fact;

//   }catch (e){ 
//       console.log("Error : " ,e);
//       return "No fact Found !!"
//   }
// }


//---------------------------------------------------------------------------


// AXIOS FOR HEADERS : 

const url = "https://icanhazdadjoke.com/";

async function getJokes() { 
    try{ 
         const config = { headers : { Accept: "application/json"}};
         let res = await axios.get(url, config);
         console.log(res.data);
    }catch(e){ 
         console.log("ERRROR : " ,e);
    }
}









