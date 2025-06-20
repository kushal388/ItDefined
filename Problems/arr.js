/*
let arr =[[10,20], [20,30,50] ,[30,50]]
let res = [];


    for(let i = 0; i < arr.length; i++) {
        for(let j=0 ; j < arr[i].length; j++){
       
        res.push(arr[i][j])
        
    }
}

console.log(res);
// // flatten the array 
*/

/*
let arr2 = [[10, 20], [20, 30, 50], [30, 50]];
let flattened = [];

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    flattened.push(arr2[i][j]);
  }
}

console.log(flattened); // [10, 20, 20, 30, 50, 30, 50]
*/

// function factorial(num){
//     let fact = 1;
//     for(let i=1; i<= num ; i++){
//         fact *= i
        
//     }
//     console.log(fact);
    
    
// }

// factorial(5)

// let arr =[[10,20], [20,30,50] ,[30,50] ,30 ,40 ,50]
// let res = [];


//     for(let i = 0; i < arr.length; i++) {
//         for(let j=0 ; j < arr[i].length; j++){
       
//         res.push(arr[i][j])
        
//     }
// }

// console.log(res);

// -------------------------------------

// let arr = [1,2,4,5,6,7,8]

// console.log(Array.isArray(arr));  // true



//     for(let i = 0; i < arr.length; i++) {
//        if(Array.isArray(arr[i])){
//        console.log(arr[i]);
//        }
      
//     }


// --------------------------------

// let arr2 = [1,2,4,5,6,7,8, [20,30,40]]

// console.log(Array.isArray(arr));

// _______________________________________

/*
let arr =[[10,20], [20,30,50] ,[30,50],40,50,60]
let res = [];


    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
            for(let j=0 ; j < arr[i].length; j++){
          
                res.push(arr[i][j])
            
        }
      }
      else{
        res.push(arr[i])

      }
}

console.log(res);

*/

//print largest number in array

/*
let arr = [10,30,40,50,67]
let lar = arr[0]

for(let i =1 ; i<arr.length ;i++){
  if(arr[i] > lar){
    lar = arr[i]
    
  }
}

console.log(lar);
*/


// in nested array

/*
let arr =[[10,20], [20,30,50] ,[30,50]]

let lar = -1

for(let i=0 ; i<arr.length; i++){
  for(let j=0 ; j<arr[i].length ; j++){
    if(arr[i][j] > lar){
      lar = arr[i][j]
    }

  }
  }


  console.log(lar);
*/
  

// print even numbers

/*
let arr =[[11,20], [21,30,50] ,[39,52]]
let res = []



for(let i=0 ; i<arr.length; i++){
  for(let j=0 ; j<arr[i].length ; j++){
    if(arr[i][j] % 2 === 0){
      res.push(arr[i][j])
    }

  }
  }


console.log(res);   // [ 20, 30, 50, 52 ]
*/

// str revese

/*
  let str = "kushal"
  let res1 = ''

  for(let i =str.length-1 ; i>=0 ;i--){
    console.log(str[i]);
    res1+= str[i]
    
  }

  console.log(res1);

  */
  
//   let str = " my name is kushal"
//   let word = str.split(' ')
//   let res1 =''

// for(let i= word.length-1 ; i>=0 ;i--){
//     res1+= word[i]

//     if(!word.length == 0){
//       res1+= " "
//     }
   
    
//   }

//   console.log(res1);

// *****************************************

  let arr = [ 1,2,5,7,10]
  let target = 15
  let res = []

  for(let i=0 ; i<arr.length ;i++){
    for(let j =i+1 ; j<arr.length ; j++){
      if(arr[i]+arr[j]=== target){
        res.push(i,j)
        break
      }
    }
  }

  console.log(res);



// finoaci series

let n = 10
let a = 0
let b = 1

for(let i =0 ; i<n ; i++){
  console.log(a);
  
  let c= a+b
  a =b;
  b = c;
}



