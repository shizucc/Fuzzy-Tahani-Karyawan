function checkRange(number) {
    switch (true) {
      case (number >= 0 && number <= 10):
        console.log("Number is between 0 and 10");
        break;
      case (number > 10 && number <= 20):
        console.log("Number is between 11 and 20");
        break;
      case (number > 20 && number <= 30):
        console.log("Number is between 21 and 30");
        break;
      default:
        console.log("Number is outside the specified range");
        break;
    }
  }
  
  checkRange(15); // Output: Number is between 11 and 20
  checkRange(5); // Output: Number is between 0 and 10
  checkRange(25); // Output: Number is between 21 and 30
  checkRange(35); // Output: Number is outside the specified range
  