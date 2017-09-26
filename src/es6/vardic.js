//call rest in javascript

function test(...args) {
    console.log(args)
}

test(1, 2, 3)

function testvardics(name, ...args) //With this can do sort, map
{
    console.log(name, args)
}

testvardics('Victor', 1, 2, 3) //[1,2,3]

var args = [1, 2, 3]

//ES 5
function testapply(x, y, z) {
    console.log("Apply" + x, y, z)
};
testapply.apply(null, args)
//1,2,3

//ES 6
function testVarArgs(...args) {
    console.log("Test Var Args" + args)
}

testVarArgs(...args)

//Append field to the Object
let mike = {name: 'mike', age: 50};
console.log(mike)
mike = {...mike, sex: 'male'};
console.log(mike)

//Spreading into function and method calls
let numbers = [1, 2, 3, 4, 5, 6];
let maxNum = Math.max(...numbers)
console.log(`Maxium number is ${maxNum}`)

//Spreading into Constructor
let myArr = [1978, 10, 9]
let myDay = new Date(...myArr)
console.log(myDay.toString())

//Spreading into Array
let x = [1, 2]
let y = [3, 4]
let z = [...x, ...y]
console.log(z)
