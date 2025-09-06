//OBJECT LITERALS  : are like dictionary in python .

// let student = { 
//     name : "Prashant", 
//     id : 57 , 
//     country : ["Nepal" , "India" , "Japan" ]
// }

// console.log(student["name"]) ;
// console.log(student["country"]);

// console.log(student.id);


// const college = { 
//     name : "jain" , 
//     location : "banglore" , 
//     country : "india",
//     branch: "FET"
// }

// // ACCESSED values 

// console.log(college.name);

// // ADD OR UPDATE 
// college["name"] = "JAIN DEMMED TO BE UNIVERSITY";
// console.log(college["name"]);

// college.gender = "Both"; 

// //DELETEION OF OBJECT LITERALS 

// delete college.branch ; 


// // Math Objects  ( RANDOM INTERGERS )
// console.log(Math.floor(Math.random() * 10 + 1 ));


// NUMBER GUESSING GAME : USING RANDOM 

console.log("WELCOME TO MY GAME ");

const max = prompt("Enter the Maximum number limit ");

const random = Math.floor(Math.random() * max ) + 1 ; 

let guess = prompt("Guess the Number "); 

while ( true){ 
    if (guess == "quit"){ 
         console.log("You Quited the Game !");
         break; 
    }
    if (guess == random){ 
        console.log("CONGRATS !!! YOU GUESSED THE CORRECT NUMBER WHICH IS ", random);
        break ; 
    }
    else if (guess < random){ 
        guess = prompt("Hint : Your number was small . Please try again !!! ") ;
    }
    else  { 
       guess =  prompt("Hint : Your number was large . Please try again !!! ") ;
    }
}













