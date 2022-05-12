// 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.


const a=1, b=5, c=21;

if ((a%2===0) || (b%2===0) || (c%2===0)) {
    console.log("pelo menos um deles é par");
}else{
    console.log("Nenhum deles é par");
}