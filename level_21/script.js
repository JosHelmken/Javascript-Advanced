 const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
const findSpiderMan = array => array.find(array => array.name === "Spiderman");
  
 console.log(findSpiderMan(superheroes)); 
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//const doubleArrayValues = array => array.forEach(element => console.log(element + element));
///////////////////////////  SOLUTION  ////////////////////////////////////////////////////////////////
const doubleArrayValues = array => {
  let newArray = [];
  array.forEach(number => newArray.push(number * 2));
  return newArray;
}


////////////////////////////////////////////////////////////////////////////////////////////

 
  doubleArrayValues([1, 2, 3]);
  // result should be [2, 4, 6]

  const containsNumberBiggerThan10  = array => console.log(array.some(element => element > 10));
  

  containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]);
  // result should be true
  containsNumberBiggerThan10([1,2,1,2,1,2]);
  // result should be false

const isItalyInTheGreat7 = array => console.log(array.includes("Italy"));

  isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']);
  // result should be true

  //const tenfold = array => array.forEach((item, index, arr) => arr[index] = item * 10) ;
  const tenfold = array => {   
    array.forEach(myFunction);
  
    function myFunction(item, index, arr) {
      console.log (arr[index] = item * 10);
    }
  }
  
  console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
  // result should be [10, 40, 30, 60, 90, 70, 110]

const isBelow100 = array => {
  const isLowerThen100 = number => number < 100;
  return array.every(isLowerThen100);
}
  
  console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false