// Find the Missing Number
function missingNumber(arr){
    
    for(let i=1 ; i< arr.length+1;i++){
        let found = false;
        for(let j = 0 ; j< arr.length ; j++){
            if( arr[j] === i){
                found= true;
                break;
            }

        }

        if(!found){
            return i
        }
   
    }
    return -1
}

let resArr = [8, 2, 4, 5, 3, 7, 1];
console.log(missingNumber(resArr));


// 2)let string return

let str = "Hello!!"
let rev=''

for(let i =str.length-1; i>=0;i--){
     rev+=str[i]
}
console.log(rev);

// 3) rev string with words


let str2 ="hello my name is kushal"
let word = str2.split(" ")  // converted into arary
let rev2 =''

for(let i= word.length-1 ; i>=0 ;i--){
    rev2+=word[i]
    // console.log(rev2);
    
    // to add spaces 
    if(i!==0){
        rev2+= ' '
    }
}

console.log(rev2);

// 4) 