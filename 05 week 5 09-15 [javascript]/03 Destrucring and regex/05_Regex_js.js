let str = ` 
        Apple, a leading tech player in the world,  officially announced at WWDC 2025 
        that its much-anticipated AI-powered Siri upgrade won’t be available until 2026. 
        ggogle@gmail.com okokay@okay.com  njb hdb ybc@yahoo.com The confirmation has cast doubt over the company’s big AI promise from last year, and left many wondering if 
        it’s worth buying the iPhone 17 in 2025, especially since AI features are now a core selling point for modern smartphones
        `;



// let out = str.match(/\w+@\w+\.\w+/gm)  
// console.log(out);              // [ 'ggogle@gmail.com', 'okokay@okay.com', 'ybc@yahoo.com' ]


// /\w+@\w+\.\w+/gm

// \b -> start boundary and end bounary

let result = str.match(/\b\w{6,}\b/g);  // > 6
let result1 = str.match(/\b\w{6,8}\b/g);  // > 8
console.log(result);
console.log(result1);


// let str = "hi my name is kushal my rool no is 99867857";
// let pattern = /h+/g;
// let result = pattern.test(str); 
// console.log(result); // true 


//let str = "l koo kooo ko";

// let result = str.match(/lo*/g);   //==>  0 or more
// console.log(result);

// let result = str.match(/ko+/g);       // => one or more
// console.log(result);

