export const partial = (fn,...args ) => fn.bind(null,...args)

//... first - bundle into array
//... second one - seperate out into different args

const _pipe = (f,g) => (...args)=> g(f(...args))  //2 function and return a function

export const pipe =(...fns) => fns.reduce(_pipe)