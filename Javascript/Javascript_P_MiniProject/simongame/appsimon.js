// SIMON GAME : 

let userSequence = []; 
let gameSequence = [] ; 

let level = 0 ; 
let started = false ; 

let btns = ["red" , "yellow" , "green" , "blue"]

let h2 = document.querySelector("h2")

// STEP 01 - Press any key to start the game . 
document.addEventListener("keypress" , function(){ 
    if(started == false){ 
          console.log("Game started!!!");
          started = true ; 
          levelUp();
    }
})

// STEP 02 - btnflash + levelup 

function gameFlash(btn) { 
    btn.classList.add("gameFlash")
    setTimeout(function (){
        btn.classList.remove("gameFlash");
    },200);
}

function userFlash(btn) { 
    btn.classList.add("userFlash")
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){ 
     userSequence = [];   // resetting the user sequence . 
     level++ ; 
     h2.innerText = `Level ${level}`;
     
     let randIdx = Math.floor(Math.random() * 3);
     let randColour = btns[randIdx];
     let randBtn = document.querySelector(`.${randColour}`)
    //  console.log(randIdx);
    //  console.log(randColour);
    //  console.log(randBtn);
     gameSequence.push(randColour);
     console.log(gameSequence)
     gameFlash(randBtn);
}

// STEP 03 - ADDING EventListerner's in btn's : 

function checkAns(idx){ 
    if (userSequence[idx] === gameSequence[idx]){ 
      if (userSequence.length === gameSequence.length){
              setTimeout(levelUp , 1000);
            }
    }else { 
     h2.innerHTML = `GAME OVER ! Your Score is : <b>${level}<b> </br> Please press any key!!!`;
     document.querySelector("body").style.backgroundColor = "red" ; 
     setTimeout(function (){ 
         document.querySelector("body").style.backgroundColor = "white";
     }, 300)
     reset();
    }
}

function btnpressed(){ 
    //  console.log(this);
     let btn = this ; 
     userFlash(btn);
     let userColour = btn.getAttribute("id"); 
     userSequence.push(userColour); 
     checkAns(userSequence.length -1);

}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){ 
      btn.addEventListener("click" , btnpressed);
}


function reset(){ 
    started = false ; 
    gameSequence = [] ; 
    userSequence = []; 
    level = 0 ; 
}































