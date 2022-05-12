// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const a=8, b=6, c=20;

if ((a%2!=0) || (b%2!=0) || (c%2!=0)) {
    console.log("pelo menos um deles é impar");
}else{
    console.log("Nenhum deles é impar");
}