//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numeros = [];

for (let index = 1; index <= 25; index++) {
  numeros.push(index);
}
console.log(numeros);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (const iterator of numeros) {
  console.log(iterator / 2);
}
