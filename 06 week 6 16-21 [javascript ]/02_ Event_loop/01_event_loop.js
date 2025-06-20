/*
        function fun1(){
            console.log("created a order");
            
        }

        function fun2(){
            console.log("Made the Payment");
            
        }

        function fun3(){
            // console.log("Deliver the order");
            setTimeout(()=> 
            console.log("Deliver the order "), 2000)
            
        }

        function fun4(){
            console.log("Eat");
            
        }


        fun1()
        fun2()
        fun3()
        fun4()

*/


// ********************************
// to look as synchronus

/*

// first way


let isDelivered = false


function fun1(){
    console.log("created a order");
    
}

function fun2(){
    console.log("Made the Payment");
    
}

function fun3(){
    // console.log("Deliver the order");
    setTimeout(()=> {
    console.log("Deliver the order "),
    isDelivered = true
    }, 2000)
    
}

function fun4(){
    if(isDelivered){
    console.log("Eat");
    clearInterval(intervalid)
    }
    
}


fun1()
fun2()
fun3()
// fun4()

let intervalid = setInterval(fun4, 1000)

*/


// second way  by using callback




function fun1(){
    console.log("created a order");
    
}

function fun2(){
    console.log("Made the Payment");
    
}

function fun3(callback){
    // console.log("Deliver the order");
    setTimeout(()=> {
    console.log("Deliver the order "),
   callback()
    }, 2000)
    
}

function fun4(){
    console.log("Eat");
    }


fun1()
fun2()
fun3(fun4)
