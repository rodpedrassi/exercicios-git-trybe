// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude});
  
  const getPositionShortHand = (latitude, longitude) => ({
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));
  console.log(getPositionShortHand(-2, -43.9542));