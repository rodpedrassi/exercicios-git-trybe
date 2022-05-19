//🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let numeros = [2, 3, 2, 5, 8, 2, 3];
let arrayAux = [];
let contador = 0;
let aux = 0;
function exe5(param) {
  for (let index = 0; index < param.length; index++) {
    aux = param[index];
    for (let j = index; j < param.length; j++) {
      if (aux === param[j]) {
          contador++;
        arrayAux.push(contador);
      }
    }
  }
  return arrayAux;
}
console.log(exe5(numeros));