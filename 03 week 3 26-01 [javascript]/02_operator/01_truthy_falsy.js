//  truthy value and falsy value


let some_var;


// truthy
some_var = true    
some_var = "  "   // some char in string and even space also cosnodered as truthy value
some_var = +5
some_var = -5      // both Positive and negativbe value is truthy 
some_var = null 

// {} , [] , { a :"b"} , [1 ,2,4]  ==> truthy






// falsy value

//  some_var = undefined; 
//  some_var= false 
//  some_var =''        // no charin string also falsy value (no length)
//  some_var = 0        // 0 is falsy value
//  some_var =NaN        // Not an number
//   some_var=-0
//      some_var=0n             // zero bigint



if(some_var){
    console.log("it is trythy value");   
}
else{
    console.log("it is falsy value");
    
}



