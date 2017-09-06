const person = {
    name:'victor',
    age:35
}

person.name ='Ann'
console.log(`Person.name can be change? ${person.name}`)

//The atribute of the person can be change

const realperson = {
    name:'victor',
    age:35
}
victor = Object.freeze(realperson);

victor.name= 'Tony'

console.log(`Person.name can be change wth Object.Freeze? ${victor.name}`)
//victor, the object wont change