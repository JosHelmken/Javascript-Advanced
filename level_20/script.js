 const addTheWordCool = array =>{
 array.push("cool");
  return array;
} 
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
  // resultaat: ["nice", "awesome", "tof", "cool"]

const amountOfElementsInArray = array => array.length;
console.log('Amount of elements:', amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
  // 3

const selectBelgiumFromBenelux = array => array[0];
console.log('First item:', selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
  // resultaat: "Belgie" 
const lastElementInArray = array => array[array.length -1];
console.log('Last item:', lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  // resultaat: "Schildpad"

const presidents = ["Trump", "Obama", "Bush", "Clinton"];
  
  const impeachTrumpSlice = array => array.slice(1);
  const impeachTrumpSplice = array => array.splice(1);

  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
 
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

  const stringsTogether = array => array.join(' ');

  console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"

  const combineArrays = (array1, array2) => array1.concat(array2);
  console.log(combineArrays([1,2,3], [4,5,6]));
  // resultaat: [1,2,3,4,5,6]