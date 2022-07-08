const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then(({ value }) => value)
//     .catch((error) => `Algo deu errado :( \n${error}`);

//   console.log(result);
// };

// fetchJoke();

//usando async await
const fetchJoke = async () => {
  try {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    const result = await fetch(url);
    const json = await result.json();
    const { id, value } = json;
    console.log(`Id: ${id} \nValue:${value}`);
    return value;
  } catch (error) {
    //Metodo que envia um erro
    // console.log('Algo deu errado com a api );', error.errno);
    // return error;

    //Nesse caso o mais elegante é mandar uma piada do chucknorris padrão, sempre que der erro, o usuario pode não perceber
    return 'No one has ever pair-programmed with Chuck Norris and lived to tell about it.';
  }
};

fetchJoke();
