//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.


let palavra = 'banana';
let invertido='';
let result = palavra.substring(palavra.length -1, palavra.length);

for (let index = palavra.length -1 ; index >= 0; index--) {
    invertido += palavra.substring(index, index+1);
}


console.log(result);
console.log(invertido);