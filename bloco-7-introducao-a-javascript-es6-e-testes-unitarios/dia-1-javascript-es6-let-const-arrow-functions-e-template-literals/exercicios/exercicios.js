//Exe 1
const fatorial = (num) => {
  let fatorial = 1;
  for (num - 1; num > 0; num -= 1) {
    fatorial *= num;
    console.log(fatorial, num);
  }
  return fatorial;
};

// console.log(fatorial(10));
//============================================================
//exe2

const maiorPalavra = (frase) => {
  let palavras = frase.split(" ");
  let maior = "";
  for (word of palavras) {
     const qualOMaior = (word.trim().length > maior.length) ? maior = word.trim() : '' ;
  }
  return console.log(maior);
};

maiorPalavra("AntônioDaSilvaSauro foi no banheiro e não sabemos o que aconteceu");


// const cont = document.querySelector('.cont');
// const botao = document.querySelector('.botao');
// let contador = 1;

// botao.addEventListener('click', () => {
//     cont.innerHTML = contador;
//     contador += 1;
// });

//Exe 4.1
const exe4Um = (frase, x) => frase.replace('x', x);
// console.log(exe4Um('Eu sou o x', 'maximo'));

//Exe 4.3
const skills = ['java', 'js', 'css'];

const exe4tres = (frase = exe4Um('Eu sou o x', 'robney'), skills) => {
let novaFrase = `Tryber ${frase.replace('x', 'robney')} aqui!
Minhas cinco principais habilidades são:
${skills[0]};
${skills[1]};
${skills[2]};
#goTrybe.`
return novaFrase;
};
console.log(exe4tres(exe4Um('é o x', 'robney'), skills));