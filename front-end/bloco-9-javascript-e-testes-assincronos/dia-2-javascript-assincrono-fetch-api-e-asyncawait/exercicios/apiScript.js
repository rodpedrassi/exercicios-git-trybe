const h2Piada = document.querySelector('#jokeContainer');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      h2Piada.innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();
