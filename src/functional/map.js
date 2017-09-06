const R = require('ramda')

var arr = [1,2,3,4];


function handle(newArr,x) {
    newArr.push(x+2);
    return newArr;
}

console.log(arr.reduce(handle,[]))

var plusOne = x => x+2;
console.log(arr.map(plusOne))

//事实上，所有的map方法都可以基于reduce实现。


//Ramda

// 写法一
var square = x => x*x;

console.log(R.map(square, [4, 8]))

// 写法二 (Recommended)
R.map(square)([4, 8])
// 或者
var mapSquare = R.map(square);
mapSquare([4, 8]);