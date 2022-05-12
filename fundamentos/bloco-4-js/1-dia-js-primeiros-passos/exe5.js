// 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const a=30, b=-20, c=90;
let soma = a+b+c;

if(soma == 180){
    console.log("Triangulo valido");
}else{
    console.log("Triangulo invalido ou valor do angulo é negativo");
}