const fizzBuzz = (num1, num2) => {
  for (i = 1; i <= 100; i += 1) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log("FizzBuzz");
    } else if (i % num1 === 0) {
      console.log("Fizz");
    } else if (i % num2 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(5, 7);