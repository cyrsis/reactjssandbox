//Goes to => always anonymous function

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