//Just use const by default
// let if rebinding is needed
//var should be never

//const is block scope
//let is block scope
var age = 20;

if (age >18) {
    const dogyear = age*7
    console.log(`You dog have ${dogyear}`);
    
}
//var is global

// var can be hoisted -> variable can be at the bottom, rest of them dont

let updateFunction =[]

for (let i = 0; i<2; i++)
{
    updateFunction.push(function () {
       return i;
    })
}
console.log(updateFunction[0]()) // 0 for Closure, make sure use let



