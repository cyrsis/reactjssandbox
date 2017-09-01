//call rest in javascript

function test(...args) {
    console.log(args)
}
test(1,2,3)

function testvardics(name,...args) //With this can do sort, map
{
    console.log(name,args)
}

testvardics('Victor',1,2,3)

var args = [1,2,3]

//ES 5
function testapply(x,y,z) {
    console.log("Apply"+x,y,z)
};
testapply.apply(null,args)
//1,2,3

//ES 6
function testVarArgs(...args) {
    console.log("Test Var Args"+args)
}
testVarArgs(...args)

//Append field to the Object
let mike = {name: 'mike', age: 50};
console.log(mike)
mike = {...mike, sex: 'male'};
console.log(mike)


