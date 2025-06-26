


// **************** For Array  ***********************************
let country = [ "inida", "australia", "england", "usa"]

// by for of  ->values
for (let element of country) {
    console.log(element);    //  india austalia england usa
}

// for in --> index
for(let element in country){
    console.log(element);  // return index 0 1 2 3

    // console.log(country[element]); // india austalia england usa
    // console.log(element , country[element]);
    // console.log(element, `country[${element}]`,country[element]);
    
    
    
    
}

// **************  For string ***************
let name = "Kushal"

// for of -> return values
for (let element of  name) {
    console.log(element);   
}

// for in -> return index 
for(let element in name){
    console.log(element);  // retun index 0 1 2 3 4 5


    // console.log(name[element]);
    
}

// ***************** for object  ************************

let userObj = {
    name : "kushal",
    age : 25,
    company : "ZXYZ"
}

// a)for of with object wont work bcz  Err:  object is wont iterbale
/*
    for (const element of userObj) {
        console.log(element);  
    }
*/

// for keys
for (const key of Object.keys(userObj)) {
        console.log(key);  // name age company          
    }

// for values
for(const value of Object.values(userObj)){
    console.log(value); // kushal 25 zxyz 
}

// entries(key, obj)
for(const [key, values] of Object.entries(userObj)){
    console.log(key , values);
    
}

// --------------------------------------------

// b) by for in 
// for...in gives the keys, not values directly.

for(let keys in  userObj){
    console.log(keys);     // gives key
    console.log(userObj[keys]);  // kushal 25 zxyz
    
    
}


// __________________________________________________________________________________________________


/*

for...in → objects → keys

for...of → arrays/strings → values


----------------------------------------------------------------------------------------------------------------


| Feature             | `for...in`                                | `for...of`                                          |
| ------------------- | ----------------------------------------- | --------------------------------------------------- |
| Iterates over       | **Keys (property names)**                 | **Values of an iterable**                           |
| Works with          | **Objects**, arrays (but not recommended) | **Arrays**, strings, sets, maps, etc.               |
| Output              | **String keys/index**                     | **Direct values**                                   |
| Use case            | Looping through object **properties**     | Looping through **elements** in a collection        |
| Can use on objects? | ✅ Yes                                   | ❌ No (throws error unless using `Object.entries()`) |
| Type                | `for (let key in object)`                 | `for (let value of iterable)`                       |


--------------------------------------------------------------------------------------------------------------------------------


| Situation                        | Use                                |
| -------------------------------- | ---------------------------------- |
| Loop through object properties   | `for...in`                         |
| Loop through array/string values | `for...of`                         |
| Loop through Map or Set values   | `for...of`                         |
| Need key+value of object         | `for...of` with `Object.entries()` |


*/