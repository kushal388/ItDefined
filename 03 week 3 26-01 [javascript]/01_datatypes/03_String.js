// Strings are immutable: methods like .slice(), .substring(), or + return new strings

// The original string never changes

// *****************************************************************************************

let nation ="india"
let  state = "karnataka"

let capital= 'Karnataka\'s captital is Benngaluru'

//  " \ " : is a escape character in string when we use same type of quotation mark so we use \


// let discription = "Karantaka's state capital is Banglore,
// Bnaglore is a metro city
// There are many metro city in India"

// if we use  " "  or  ' '  string with multipl line wont work
// for working we need to give  \  on every line or we use backtick ``


let discription2 = `Karantaka's state capital is Banglore,
Bnaglore is a metro city 
There are many metro city in India `

  
// console.log(discription2);


// ****************  Concatination **************************

let f_name =  "kushal"
let l_name = "chaturvedi"
let company = "infosys"


//  3 types :  + , ` ` [template literals] + concat

let result1 = " my name is "+f_name+" "+l_name+" i am working in "+company+" Bengaluru."
let result2 = f_name.concat( " ",l_name) // to give space "", usually f_name.concat(l_name)
let result3 = ` my name is ${f_name} ${l_name} and i am working  in ${company} Bengaluru`


// console.log(result1);
// console.log(result2);
// console.log(result3);


// -------------------------------- Remove -------------------------------------------------------

// 1) by slice    ==> it remove the  char  and retrun new  remaning elemts with new string  but wont change the existing string bcz string is immutable (primitve data type)

// slice( starting , ending)        ==> starting must be greater than ending
// slice(3)   ==> mend from 3rd index to full

const str1 = "Hello World";
// const newStr2 = str1.slice(1); // removes first character
console.log(str1.slice(1)); // "ello World"
console.log(str);  // Hello world
console.log(str1.slice(2,5))     // llo
console.log(str1);               // Hello world


// const str2 = "Hello World";
// const newStr = str2.slice(1); // removes first character
// console.log(newStr); // "ello World" 

//2 ) Substring 

// it also return thre removed element but wont change the existing string bcz string is immutable (primitve data type)

const  str2 = "Hey!, Good Morning"

console.log(str2);                   // Hey!, Good Morning
console.log(str2.substring(1));      // ey!, Good Morning       ==> here also retruns the new string when we print previous string it will print same
console.log(str2);                   // Hey!, Good Morning

const str3 = "Afternoon"

console.log(str3);                     // Afternoon
console.log(str3.substring(1,3));      //ft
console.log(str3);                     // Afternoon


//--------------------------------      length        -----------------------------------------------------------

let fav = "Suresh_raina";

console.log(fav.length); // 12 = lentgh of suresh_raina

console.log(fav[3]); //e
console.log(fav[fav.length-1]); // a -==> length-1 
console.log(fav[11]);


let city1="Banglore".toLowerCase()
let city2="Banglore".toUpperCase()

// console.log(city1);  //to lowerCase
// console.log(city2);   //to upperCase


let city = "            Bengaluru                 "

console.log(city.length);  // it takes spaces too for length ==> 38


let tt = city.trim()  // there is trimStart() and trimend() too 
console.log(tt);
console.log(tt.length);


// console.log(city.trim().length); // 9 ==>Bengaluru


//--------------------------   Find         ----------------------


/* 
    1)  includes => return boolean
              check included or not
              check caseSensetive

*/

let Longword = `Royal Challengers Bengaluru face Lucknow Super Giants in IPL clash`

console.log(Longword.includes('face'));  // true
console.log(Longword.includes('Face')); // false

console.log(Longword.includes("loose")); // false




/* 
    2)  IndexOf => return index positon
              check indexof of given char
              if not present === > -1
            

*/

let Longword2 = `Royal Challengers Bengaluru face Lucknow Super Giants in IPL clash CCCCCC sfjgfvjsdb IPL Dbsudbvujsdbv IPL`

console.log(Longword2.indexOf('IPL')); // it will take I value from IPL
console.log(Longword2.indexOf('Z')) ;  // -1 bcz not present

console.log(Longword2.lastIndexOf('L')); // last indx of ==>  105


/* 
    3)  StartsWith => return true or false
              check it is starting with or not
          
              
       endsWith => return true or false
              check it is starting with or not
            

*/


let Longword3 = "Royal Challengers Bengaluru face Lucknow Super Giants in IPL";

console.log(Longword3.startsWith("Royal"));         // true     // check the first world
console.log(Longword3.startsWith("Challengers"));   // false


console.log(Longword3.endsWith("IPL"));  // true
console.log(Longword3.endsWith("face"));  // false


/*

    chartAt => retrun the character of given postion


 */

    let Longword4 = "Royal Challengers Bengaluru face Lucknow Super Giants in IPL";

    
    console.log(Longword4.charAt('59'));  //L at 14 positions  e is there
    

/*
    search => retrun the index positon
                if not -1

 */

    let text = "Mr. Blue has a blue house";

    let position = text.search("blue");
    console.log(position); // ➜ 15            // "blue" matches the lowercase "blue" at index 15.
    

    let position2 = text.search(/Blue/);
    console.log(position2); // ➜ 4         // Here, /Blue/ matches "Blue" (capital "B") at index 4.

    let position3 = text.search(/blue/i);      // ignore the case senitive
    console.log(position3); // ➜ 4           /blue/i matches "blue" in any case, such as: "Blue","BLUE","blue","bLuE"


    // Match *********************************

    console.log(text.match(/blue/i)); // return first matcvh as an array 

    console.log(text.match(/blue/gi)); // ➜ [ 'Blue', 'blue' ]  // With g (global flag — returns array of all matches):

    console.log(text.match("Blue")); //  With string — not recommended (can return null or throw in strict mode):



    // replace 


    let text2 = "Mr. Blue has a blue house";       // case sensitive
    let result = text2.replace("blue", "red");

     console.log(result); // ➜ "Mr. Blue has a red house"

    let resultb = text.replace(/blue/i, "red"); // Replace using regex with i flag (case-insensitive):
    console.log(resultb);

    let resultc = text.replace(/blue/gi, "red"); // Replace all matches with /g (global flag):
    console.log(resultc);
    
    
