//why we want to do anonymous function,
//all because we want to do inline function (a single link of everything)

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const divisibleByTwo = number.filter(function (n) {
//     return n % 2 === 0;
// });

const divisibleByTwo= number.filter((number) => number%2 ===0)  ///This is it for lambda express
//()=> single variable do not need
//And this is anonymous function because it do not have a name

console.log(divisibleByTwo)