//Divide by 3, would say fizz
//Divide by 5, would say Buzz
//Divide by 3 and 5 , would say fizzbuzz
//use of "%" operator
function fizzBuzz(num) {
  for (var i = 1; i<= num; i++);
  {

      if (i%15 === 0) console.log("fizzBuzz") ;
      else if (i %3 ===0 ) console.log("fizz") ;
      else if (i %5 ===0 ) console.log("buzz") ;
      else console.log(i)
  }

}

fizzBuzz(20)

//Expected results
