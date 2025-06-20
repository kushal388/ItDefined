

function fun1(callback1 , callback2, callback3){
    console.log("created a order");
    callback1(callback2,callback3)
    
}

function fun2(callback2, callback3){
    console.log("Made the Payment");
    callback2(callback3)
    
}

function fun3(callback4){
    // console.log("Deliver the order");
    setTimeout(()=> {
    console.log("Deliver the order "),
   callback4()
    }, 2000)
    
}

function fun4(){
    console.log("Eat");
    }


fun1(fun2 , fun3 , fun4)
