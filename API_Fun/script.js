const getButton = document.querySelector('.button');
const getJokeArea = document.querySelector('#joke');
const getJokeImageArea = document.querySelector('#jokeImg');
const customheaders = new Headers();
customheaders.append('Accept', 'application/json');

const options = { 
  method: 'GET',
  headers: customheaders
};

const setJoke = joke => getJokeArea.innerHTML = joke;

const setJokImg = joke => {
  const jokeImage = document.createElement('img');
  jokeImage.src = `http://icanhazdadjoke.com/j/${joke}.png`;
  getJokeImageArea.appendChild(jokeImage);


}

async function getJoke() {
  try {
    const response = await fetch('http://icanhazdadjoke.com', options);
    const data = await response.json();
    const joke = data.joke;
    setJoke(joke);
  } catch (error) {
    console.log(error);
  }
};

async function getJokeImage() {
  try {
    const response = await fetch('http://icanhazdadjoke.com', options);
    const data = await response.json();
    const image = data.id;
    console.log(image);
    const jokeImage = document.createElement('img');
    jokeImage.src = `http://icanhazdadjoke.com/j/${image}.png`;
    getJokeImageArea.appendChild(jokeImage);
 
  } catch (error) {
    console.log(error);
  }
};




// Making the button work 

getButton.addEventListener('click', getJoke);

document.addEventListener('DOMContentLoaded', () => {
  // load the image //
  getJokeImage();

});