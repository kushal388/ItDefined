//1) ESM Modules

export function add(x,y){
    return x+y
}

export const PI = 3.14


// 2) Common jS modules
/*

 function add(x,y){
    return x+y
}

 const PI = 3.14

 module.exports = {add , PI}

*/




 // 3) AMD modules
/*
define(function(){
    return{
        add : function(x,y){
            return x+ y
        },
        PI : 3.14
    }
})
    */