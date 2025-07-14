let arr =[34,60,70,89,87,98]

let out = arr.map(el => el+1)
console.log(out);

let res = arr.filter(el => el%2==0)
console.log(res);

let output = arr.reduce((a,b)=> a+b)
console.log(output);//



let a = {
    name : "kushal",
    age : 45
}

let b = {
    name1 : " XYZ",
    age1 : 24

}

let outpu1 = Object.assign({}, a ,b , {hobby : "cricekt"})
console.log(outpu1);
