//What does function as data mean to you?
//###first class citizen mean this

var name = "Victor Tong";

var f = function sayHello(name) {

    return 'Hello,  ' + name;
};

console.log(f.name) //this will give me the function name
console.log(f.call(null, name)) //Hello, Victor

//### Function as arguments
var sayHello = function () {
    console.log("hello I am annoymouse")
};

setTimeout(sayHello, 2000)//Take 2 minutes to sayHello

//### Functions as  Retured Value <- this is it
//Higher-order function
//A function that takes an other function as an argument or return a function as a results
var add = function (x)  {
    return function (y) {
        return x + y //the x variable in in the closure, because it can access all the variable in the block
    }
}

var add1= add(1)
console.log(add1(41)) //it is 42




