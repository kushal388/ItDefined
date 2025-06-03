

/**** Array declaration *********/

// Array ==> tyoeof ==> object

// 1) Empty Array

const myArray = [];
const myArray2 = new Array()

// 2) using Array literals 

const myArray3 = ["abc","def","ghi"]

// 3) using Array constructor

const myArray4 = new Array(1,2,3,4) 
const myArray5 = new Array(5)     // only single paramter means ==> length of an array

// 4) Array.of Methods

     const myArray6=  Array.of(1, 2, 3,4);
     
// 5) Array.from() Methods

     const myArray7 = Array.from("kushal")
     console.log(myArray7);
     
     // const myArray8 = Array.from(1,2,3,5,6) // it wont works  // Array.from(arrayLike[, mapFn[, thisArg]])

     // console.log(myArray8);

//------------------------------------------------------------------
     const myArray8 = Array.from([1, 2, 3, 5, 6]);
     console.log(myArray8);

     let abc= [1,2,4,5]
     let def = ["adnj","dshajsk","sbjbhs"]

     console.log(abc,"+", typeof(abc));      //  [ 1, 2, 4, 5 ] + object

     console.log(def ," +", typeof(def));      //  [ 'adnj', 'dshajsk', 'sbjbhs' ]  + object
     
     
     

