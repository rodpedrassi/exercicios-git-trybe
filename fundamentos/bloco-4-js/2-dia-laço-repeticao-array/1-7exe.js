// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(
  "===========================Exe 1================================================"
);

for (const iterator of numbers) {
  console.log(iterator);
}
console.log(
  "===========================Exe 2================================================"
);
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (const iterator of numbers) {
  soma = soma + iterator;
}
console.log(soma);

console.log(
    "===========================Exe 3================================================"
  );

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media;

media = soma / numbers.length;

console.log(media+" "+(numbers.length));


console.log(
    "===========================Exe 4================================================"
  );

//   Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

console.log("zzzzzzzzzzzzzzzzzzzzzzzz");

console.log(
    "===========================Exe 5================================================"
  );

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = numbers[0];
console.log(maior);


for (const iterator of numbers) {
    if(maior <= iterator){
        maior = iterator;
    }
}
console.log(maior);

console.log(
    "===========================Exe 6================================================"
  );

//   Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let qtdImpar = 0;

for (const iterator of numbers) {
    if (iterator%2 === 1) {
        qtdImpar++;
    }
}
if (qtdImpar === 0) {
    console.log("Nenhum valor impar encontrado");
}else{
    console.log(qtdImpar);
}

console.log(
    "===========================Exe 7================================================"
  );

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for (const iterator of numbers) {
    if (menor >= iterator) {
        menor = iterator;
    }
}
console.log(menor);