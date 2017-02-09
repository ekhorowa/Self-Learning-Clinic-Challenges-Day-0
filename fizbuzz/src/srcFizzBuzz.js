// Program fizzBuzz
function fizzBuzz (value) {
  if(value % 3 == 0 && value % 5 == 0){
    return "FizzBuzz";// FizzBuzz is returned when the arguement is evenly divisible by 3 and 5
  }
  else if(value % 3 == 0){
    return "Fizz";// Fizz is returned when the arguement passed is evenly divisible by 3
  }
  else if(value % 5 == 0){
    return "Buzz";//Buzz is returned when the arguement passed is evenly divisible by 5
  }
  else{
    return value;//The arguement is returned when it is not divisible by 3 or 5
  }
}

module.exports = fizzBuzz;

