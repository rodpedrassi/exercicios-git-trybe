// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css', 'aaaaaaaaaaaaaaaaaaaaaaa', 'a'];
let resultMaior = array[0];
let resultMenor = array[2];


for (let index = 0; index <= array.length-1; index++) {

    if ( array[index].length >= resultMaior.length) {
        resultMaior = array[index];
    }   

    if (array[index].length <= resultMenor.length) {
        resultMenor = array[index];
    }
}

console.log(resultMaior);
console.log(resultMenor);



