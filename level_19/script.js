const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
  let birdYear = new Date();
  let bday = birdYear.getFullYear()	- person.age;
  //hier moeten console.logs komen
  //clconsole.log("Dit is de gehele persoon:", person);
  //console.log("Dit is de naam:", person.name);
  //console.log("Geboortejaar",person.name, bday)
  //console.log(person.name, " is een ", person.profession);

  if(person.age > 50) {
    console.log("Ouder dan 50:", person.name, person.age)
  }
}