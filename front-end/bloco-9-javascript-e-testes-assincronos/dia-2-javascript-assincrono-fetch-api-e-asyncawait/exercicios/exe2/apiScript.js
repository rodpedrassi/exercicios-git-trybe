const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const fetchCoin = async () => {
  try {
  } catch (error) {
    console.log(error);
    return error;
  }
};

fetch('api.coincap.io/v2/assets', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
