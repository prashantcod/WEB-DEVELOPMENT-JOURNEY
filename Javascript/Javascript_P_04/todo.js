let todo = [] ; 

let req = prompt("Enter a request  "); 

while(true){ 
    if (req == "quit"){ 
        console.log("quiting sucessfully");
        break; 
    }
    if (req == "list"){ 
        console.log("-----------")
        for (let i =1 ; i<todo.length ; i++){ 
           console.log( i , todo[i]);
        }
        console.log("-----------");
    }
    else if (req == "add") { 
        let task = prompt("Enter a task you want to add to todo  ");
        todo.push(task);
        console.log("Task Added");
    }else if (req == "delete"){ 
        let ind = prompt("Enter a task to be deleteed !!  ");
        todo.splice(ind , 1);
        console.log("Task Deleted");
    }
    else { 
       console.log("Wrong Request !!!");
    }
    req = prompt("Enter a request  ");
  }