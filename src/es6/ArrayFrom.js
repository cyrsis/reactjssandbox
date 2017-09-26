let someVar = 'food'
console.log(Array.from(someVar))

 function foo() {
     console.log(arguments.length)
     return Array.from(arguments)
 }

console.log(foo(1,2,3,4))