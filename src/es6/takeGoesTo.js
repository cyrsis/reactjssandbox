let add1 = (a,b) => {return a+b;}
let add2 =(a,b) => a+b ;
let add3 = function(a,b)
{
    return a+b;
}


console.log(add1(3,4));
console.log(add2(3,4));
console.log(add3(3,4));
//7,7,7

let number = [1,2,3]
console.log(number.map((number) => number*2));
//[ 2, 4, 6 ]