/* Operators in JavaScript are symbols or keywords used to perform operations on variables or values


1) Arithmetic Operators ==> + ,- ,*,/, % ,,** power
2) Assignment operators ==> = ,+= ,-=, *=, /= ,%=
3) Comparison Operators ==> == ,!= ,=== ,!== , >= >, < ,<= 
4)Logical Oerators      ==> && , || , !
5)) unnary Operators    ==>  ++ (incremetn) , --(decrement)
6)Ternary Operators    ==> condition ? true : false



*/


// comparsion operator:

/*
        let x= 21 ;
        let y ="21"

        console.log(x == y );  // true JavaScript automatically converts one type to match the other.(coersion)   // 
        console.log( x === y);  // false check type0f ( datatype) so returns fasle

*/
/*
        == => compare only value
        === => compare both value and datatype
        
 */


// console.log(x+y);  // 2121 

/*
            console.log(x < y);
            console.log(x <= y);

            console.log(x > y);
            console.log(x >= y);


            console.log(x != y); // false not equal to
            console.log(x !== y); // true

*/


// *********************************************************************************************************************
 
// let a = "virat ";
// let b=  "virat";

// console.log(a == b);  // false , spcae matters , case sensitive too


// ******************* qUESTOIONS ******************************


// let a ="02"
// let b = "10"

// console.log(a > b );  // false 

/* 
        both a and b or in string it will conver the first of them both 
        first it will comapre 0 and 1 then it false 

        in case of a= "2" and b = "10"
        console.log(  a > b)
        ==>  true   ==> bcz 2 will compare with 1 bcz both are string 


*/


/*


        let a ="2"
        let b = "10"
        console.log( a> b); // true // bcz 2 will compare with 1 bcz both are string


        let x = 10;
        let y = "10";
        console.log(x >= y); // true


        let some_x = "a"
        let some_y = "A"
        console.log( some_x > some_y);  // comapre between ASCII value




        console.log( !12 || !10);


*/

// note 💡💡💡💡💡💡💡💡💡

// || (OR) returns the first truthy value.

// && (AND) returns the first falsy value or the last value if all are truthy.


// ***************** INC and DEC *****************************************************


let num = 10


// Pre INCrement
// console.log(num);  //10
// console.log(++num);   // 11 =>   Pre incremnet




// Post INCrement
console.log(num);      // 10
console.log(num++);    //10  ==> post incremnt it will increate later
console.log(num);    // 11  ==> now it is increased



let num1 =20 


// Pre DECrement
// console.log(num1);  //20
// console.log(--num1);   // 19 =>   Pre decremnet

// Post DECrement
console.log(num1);      // 20
console.log(num1--);    //20  ==> post dec cremnt it will decreate later
console.log(num1);     // 19








