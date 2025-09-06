// // FOR LOOPS 
// for (let i =0 ; i<6 ; i++){ 
//       console.log(i);
// }

// //Print all the odd numbers(1 to 15)
// for (let i=1 ; i<=15 ; i+=2){ 
//       console.log(i);
// }

// //print even numbers 
// for(let i=2 ; i<=10 ; i+=2){ 
//        console.log(i);
// }

//print the multiplication table of 5 

// for (let i=1 ; i<=10 ; i++){ 
//         console.log(`5 * ${i} = ${5*i}`);
// }

//print the multiplication table for user input : 
// let n = prompt("Enter the number you want a multiplication table : ")
// n= parseInt(n);
// for(let i = 1 ; i<=10 ; i++){ 
//        console.log(`${n} * ${i} = ${n*i}`);
// }

//WHILE LOOP 
// let i =1 ; 

// while (i< 5){ 
//       console.log(i);
//       i++; 
// }

//GUESSING GAME : 
// const fav = "avatar" ; 

// let guess = prompt("Guess the name of the game : "); 
// while((guess != fav) && (guess != "quit")){ 
//       console.log("Wrong Guess!!!");
//       guess = prompt("Please Try again!")
       
// }
// if (guess == fav){ 
//        console.log("Congrats bBAY");
// }else { 
//        console.log("You quit");
// }


// NESTED ARRAYS WITH NESTED LOOPS 

// let hero = [ ["ironman" , "spiderman" , "antman"] , ["superman" , "batman" , "joker"]]; 

// for (let i = 0 ; i<hero.length ; i++){ 
//        console.log(`List #${i+1}`);
//        for ( let j=0 ; j<hero[i].length ; j++){ 
//               console.log(hero[i][j]);
//        }
// }

// FOR OF LOOP  : 

// let names = ["prash" , "ajay" , "krish" , "aakash" , "gaybhai"]; 

// for(naming of names){ 
//        console.log(naming);
// }

// for of nested loop 

let heros = [ ["ironman" , "spiderman" , "antman"] , ["superman" , "batman" , "joker"]]; 

for (list of heros){ 
      console.log(`list ${list}`);
    for(hero of list){ 
          console.log(hero);
    }
}

 