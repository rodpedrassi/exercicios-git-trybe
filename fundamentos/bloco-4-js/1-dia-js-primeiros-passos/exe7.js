// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let pct = 0;

if (pct >= 90 && pct <= 100) {
  console.log("A");
} else if (pct < 90 && pct >= 80) {
  console.log("B");
} else if (pct < 80 && pct >= 70) {
  console.log("F");
} else {
  if (pct > 100 || pct < 0) {
    console.log("Error");
  } else {
    console.log("Nao categorizado!");
  }
}
