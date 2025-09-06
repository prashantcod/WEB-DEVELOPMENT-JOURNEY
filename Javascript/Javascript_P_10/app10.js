// Events : 

// onclick 
// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function () { 
// //     alert("button was clicked hehe !!!")
// // }

// function sayhello(){ 
//     alert("Hello")
// }

// btn.onclick = sayhello ; 

// // onmouseenter 
// btn.onmouseenter = function show(){ 
//     console.log("HEHE BUTTON HOVERERD !!!!");
// }

//------------------------------------------------------------------------------
// // EVENT LISTERNER : 

// addEventListener : 
// btn.addEventListener("click", sayhello );
// btn.addEventListener("click" , sayname);
// btn.addEventListener("dblclick" , function () { 
//    console.log("You doubled clicked me !!! ")
// });




// function sayhello () {
//     alert("HELLO")
// }

// function sayname () { 
//    alert("SAY IT'S PRACCTI NOT PRASH");
   
// }

//------------------------------------------------------------------------------
//ACTIVITY : 

// let btn = document.querySelector("button"); 


// btn.addEventListener("click" , function () { 
//      let h1 =document.querySelector("h1");
//      let randomClr = generateRandomColor(); 
//      h1.innerText = randomClr ; 

//      let div = document.querySelector("#inside_div"); 
//      div.style.backgroundColor = randomClr ; 
// });

// function generateRandomColor(){ 
//      let r = Math.floor(Math.random() * 255 );
//      let g = Math.floor(Math.random() * 255 );
//      let b = Math.floor(Math.random() * 255 );

//      let color = `rgb(${r} , ${g} ,${b})`;
//      return color
// }

//------------------------------------------------------------------------------

// this in event Listener :  used for multiple eventlistener . 

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changebgcolor() { 
//     console.log(this.innerText);
//      this.style.backgroundColor = "blue" ; 
// }


// btn.addEventListener( "click" ,changebgcolor);
// h1.addEventListener( "click" ,changebgcolor);
// h3.addEventListener( "click" ,changebgcolor);
// p.addEventListener( "click" ,changebgcolor);


//------------------------------------------------------------------------------
// KEYBOARD EVENTS :

// let inp = document.querySelector("input"); 

// inp.addEventListener("keyup" , function (event) { 
//      console.log(event);
//      console.log("key was pressed up ")
// })

//------------------------------------------------------------------------------
// Form Events : 

// let fro = document.querySelector("form");

// fro.addEventListener("submit" , function(event) { 
//       event.preventDefault();
//       console.log("Form is submitted  !!!")
//       // for accessing the input 

//       // let user = document.querySelector("#user");
//       // let pass = document.querySelector("#pass");

//       // another method without using document.query method

//       let user = this.elements[0];  // same as form.elements[0] as elements helps to access the objects inside the form . 
//       let pass = this.elements[1];

//       console.dir(user.value); 
//       console.dir(pass.value); // to print the value which is given in a input to a console window . 

//       alert(`Hi ${user.value} your password is created which is ${pass.value} so keep it secret `);
// })


//------------------------------------------------------------------------------
// change Event and Input Event : 

let inp = document.querySelector("#text");
let para = document.querySelector(".para")
inp.addEventListener("input" , function(){ 
    console.log(inp.value);
    para.innerText = inp.value ; 
    
});












