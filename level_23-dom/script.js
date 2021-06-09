// Functions - Animal spotted -> create new li //
const animalSpotted = event => {
  const animal = event.target.textContent;
  
  // Create a new <li> Item with the animal text inside // 
  const setListItem = document.createElement('li');
    setListItem.innerText = animal;
  // Grab the parent and include the new <li> item //
  const getList = document.getElementById('spotted-animals-list');
    getList.appendChild(setListItem);
};

// Functions - delete first list item //
const deleteFirstItem = () => {
  const getFirstItem = document.getElementById('spotted-animals-list').firstChild;
  getFirstItem.remove();
};

// Function - delete All items //
const deleteAllItems = () => {
  const getEntireList = document.getElementById('spotted-animals-list');
  getEntireList.innerHTML = null;
};

// Part 1. Event listener to the buttons 
const getBigFiveButtons = document.querySelectorAll('.big-five-button');  // all the buttons
getBigFiveButtons.forEach( button => {
  button.addEventListener('click', animalSpotted);
});

// Part 2. Delete the first item in the spotted list //
const getRemoveFirstButton = document.querySelector('#remove-first-item-button');
getRemoveFirstButton.addEventListener('click', deleteFirstItem);

// Part 3. Delete all the items in the spotted list //
const getRemoveAllButton = document.querySelector('#remove-all-button');
getRemoveAllButton.addEventListener('click', deleteAllItems);


