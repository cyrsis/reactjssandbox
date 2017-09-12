// ******************************
// ** Reduce
// ******************************

deposits = [100,50,20,40]

sum = deposits.reduce((acc,next) => {return acc + next},0)

console.log(sum)

sum2 = deposits.reduce((acc, next)=> {return acc*(next)*2})

console.log(sum2)