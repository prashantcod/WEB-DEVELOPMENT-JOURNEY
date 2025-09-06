// EVENT BUBBLING : When one event which has it's parent like ul and li here it will also trigger the parent eventlisterner while triggering itself for example when I click to ul it also triggers the event listerner of div which is it's parent . 

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");


// div.addEventListener("click" , function(){ 
//     console.log("Div was Clicked !");
// })

// ul.addEventListener("click" , function(){ 
//     console.log("ul was Clicked !");
// })


// for( li of lis){ 
//    li.addEventListener("click" , function(){ 
//     console.log("li was Clicked !");
// })

// }
/*--------------------------------------------------------------------------- */

// To Do App 
let ini = document.querySelector("input");
let buts = document.querySelector("button");
let lis = document.querySelectorAll("li")
let ul = document.querySelector("ul");
buts.addEventListener("click" , function(){ 
     let item = document.createElement("li");
     item.innerText = ini.value;
     ul.appendChild(item);
     ini.value= ""; // to reset what you have written


    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
})



// IT DOESN'T WORK FOR NEWCHILD ELEMENT THO 
// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns){ 
//      delbtn.addEventListener("click" , function(){ 
//            let par = this.parentElement;
//            par.remove();

//      })
// }

// Instead we use EVENT DELEGATION : 
ul.addEventListener("click" , function(event){ 
  if (event.target.nodeName == "BUTTON") { 
      let par = event.target.parentElement; 
      par.remove();
      console.log("Item deleted!!");
  }
     
})




