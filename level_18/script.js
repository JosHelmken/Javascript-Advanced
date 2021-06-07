/*  zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
}; */

const ikRockArrowFunctions = () => console.log("Joe ik rock de arrow functions!");

//ikRockArrowFunctions()


/* const fivePlusSeven = function () {
  return 5 + 7
};
fivePlusSeven();
*/
const fivePlusSeven = () => 5 + 7;



const myFunction = (a, b) => a + b;
console.log(myFunction(3, 4))

const plusFive = a => a + 5;
console.log(plusFive(20))


const createObject = () => ({greeting: 'Hoi'})
console.log(createObject())