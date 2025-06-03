// function is a block of code which can be number of statemets ,logic that can be resued by calling the function()

// fucntion name should be camelCase 
// thid called block or scope {        }

// to need to invoke a function  == > name()

function getName(full_name , last_name){
    let name = full_name.toUpperCase() +  " " + last_name.toUpperCase().trim()
    console.log("your full name : ", name);
    console.log(` welcome ${name}`);
    
}

getName("kushal", "chaturvedi")
getName("suresh", "raina")
    
