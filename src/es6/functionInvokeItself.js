(function () {
    var name = 'victor'
    console.log(name) //this will work fine…
})();

//This can be run when the brower load the script
//Immediately-Invoked function Expression (IIFE)

//console.log(`The name can be access in here? ${name}`) //name is not define,

// The problem is that the brower have a 'name' variable already, we need a way to use 'name; variable

//I can do this for block scope of const

{
    const time = time.now() //thats it, the block scope for the const
}
