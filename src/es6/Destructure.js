const person = { name:'Victor', age: 35}
const {name : personName,age :personAfge } = person

console.log(`${personName} and ${personAfge}`)

const evens =[2, 4, 6,8,10]
const [,second,thrid] = evens

console.log(second) //4
console.log(thrid) //6

