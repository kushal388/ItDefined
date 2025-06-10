//  ********** Flat ************************
// The flat() method creates a New Array with all nested sub-arrays flattened into it up to a given depth (default is 1)

let arr = [1, 2, [3, 4], [5, [6, 7]]];

let res = arr.flat()

let res2 = arr.flat(2) // depth 2

console.log("orginal array :" ,arr);                 // orginal array : [ 1, 2, [ 3, 4 ], [ 5, [ 6, 7 ] ] ]
console.log("Flt  array with depth 1 :" ,res);      // Flt  array with depth 1 : [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log("Flt  array with depth 2 :" ,res2);     // Flt  array with depth 2 : [1, 2, 3, 4, 5, 6, 7]


// **************** FLAT_MAP ******************************
//flatMap() is like doing .map() followed by .flat(1) — maps each element and then flattens the result one level deep.
// it also return new array


let array = [10,20,40, [30,40]]


let result = array.flatMap(el =>[[ el*2 ]] ); // only flaten to one level 

console.log("orginal",array);
console.log("resulted flatmap array :", result);  // resulted flatmap array : [ [ 20 ], [ 40 ], [ 80 ], [ NaN ] ]

//  If you want to flatten deeper (like .flat(2)), use map() + flat(2):
const result2 = array.map(x => [[x * 2]]).flat(3);
console.log(result2);  
