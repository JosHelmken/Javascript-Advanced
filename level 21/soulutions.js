const doubleArrayValues = array => {
  let newArray = [];
  array.forEach(number => newArray.push(number * 2));
   console.log(newArray);
}


////////////////////////////////////////////////////////////////////////////////////////////

 
  doubleArrayValues([1, 2, 3]);


  const tenfold = array => {   
    return array.map(number => {
      return number * 10;
    });
  };
  
  console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

  const isBelow100 = array => {
    return array.every(number => {
      return number < 100;
    });
  };

  console.log("Is below 100:", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]))

  
  const numbers = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];

  const bigSum = array => {
    return array.reduce((acc, number) => {
      return acc + number;
  });
  }

  console.log("Big sum, add all numbers in array:", bigSum(numbers));