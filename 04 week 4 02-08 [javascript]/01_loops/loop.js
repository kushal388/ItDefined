// let arr = [1,2,3,4,5,6]

// for(let i of arr){
//     console.log(i);   
// }


// for (let x=5 ; x <13 ; x++){
//     console.log(x);
    
// }


//  ********************  for of ***********************************

let country = [ "inida", "australia", "england", "usa"]

// let elements declared once and assign for each elemts in array 
// each time take new refrence by forgetting previous

for (let element of country) {
    // console.log(element);   
}



//  ********************  for in ***********************************

// use for if when we want index value
//  console.log(elements) gives index of array elements 
//   console.log(country2[element]); gives the country 

let country2 = [ "inida", "australia", "england", "usa" ,"irland"]


for (let element in country2) {
    // console.log(element); 
    // console.log(country2[element]); 
    // console.log(element, country2[element]);

     console.log(element,` country2[${element}]`, country2[element]);
    
      
}


// by using for loop

let x = [ "inida", "australia", "england", "usa" ,"irland"]

for(let i=0; i<x.length; i++){
    console.log(`x[${i}] ==>`,x[i]);
    
}


// *************************************

// break => come out of loop
// skip that remaing woul print

for(let i=0 ; i< 30 ; i++){
    if(i == 13){
        // break
        continue;
    }
    console.log(i);
    
    
}
console.log("come out of loop for using break");

//******************************************************************* */

let some_x = [ "inida", "australia", "england", "usa" ,"irland"]

for(let i=0; i<some_x.length; i++){

    if( some_x[i].startsWith('e')){
        continue;
    }
    console.log(some_x[i]);
    
}

// while loop ****************************

let a = 4
while(a < 10 ){
    console.log("loop run until condition is true and a value is ", a );
    a++
    
}


// do while loop 

// run once late rit will check

let b = 14;
do{
     console.log(" do while loop run until condition is true even condition is fals it aleast run once and b value is ", b );
    b++;

}while(b<20)


// ***********************************

let num = 5;

for(let i= 1 ; i<=10 ; i++){
    console.log(`${num} * ${i} = ${num * i}`);
    console.log(num + " * " + i + " = " + num*i );
    
    
}


for(let i=1 ; i<=3 ; i++){
    let  row = ""
    for(let j=1 ; j<=3 ; j++){
        row += j*i + " "
    }
    console.log(row);
    
}

let ns_data = [ [1,2,3],[4,5,7],[7,8,9]]


for(let data of ns_data){
    console.log(data);
    for(let el of data){
        console.log(el);
        
    }
    
}



let ns_data2 = [ [1,2,3],[4,5,7],[7,8,9]]
let resul_array = []


for(let data of ns_data2){
    for(let el of data){
       resul_array.push(el)
        
    }
    
}

console.log(resul_array);

