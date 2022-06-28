const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [posUm, posDois] = saudacoes;

posDois(posUm);


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água




let numerosPares = [1, 3, 5, 6, 8, 10, 12];

//virgula é capaz de ignorar um indice do array LOL
[,,, ...numerosPares] = numerosPares;
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
console.log(numerosPares); // [6, 8, 10, 12];
