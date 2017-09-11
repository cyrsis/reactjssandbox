//Goes to => always anonymous function
// The real purchase of the arror function to to handle
//This keyword

var getprice = count => count * 4.0
console.log(getprice(2)) //Take single do not need  ()

var invoice ={
    number : 123,
    process: function (){
        return () => console.log(`Invoice print out ${this.number}`)
    }
}
invoice.process() (); //123, this way can gain access the inner number

//With bind funciton, u can not change the value of this
var newInvoice ={
    number: 456
}
invoice.process().bind(newInvoice)(); //Invoice Print out 123, cannt change this
invoice.process().call(newInvoice); //Invoice Print out 123, cannt change this




// document.addEventListener('click',function () {
//     console.log(this)
// }); //Output #Document

// document.addEventListener('click', () => console.log(this))
//Output Windows {...}

const name = ['VV', 'AA' ,'TT']

console.log(name.map(function (name) {
    return `${name} bos`;
}))

//Goes function in action,
//1. Just delete the function keyworld and add =>
console.log(name.map((name) => {
    return `${name} bos`
}))

//delete the return and {}
console.log(name.map((name) => `${name} bos`))