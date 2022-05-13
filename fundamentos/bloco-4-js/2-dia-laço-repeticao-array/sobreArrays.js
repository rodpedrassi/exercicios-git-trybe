// criando array
let listaTelefones = [13311221, 12331312, 31231253467, 756985674565345];

//adicionando novo valor
listaTelefones.push(43789923908218);

//removendo o ultimo valor
listaTelefones.pop();
//removendo o primeiro valor
listaTelefones.shift();
// remove um valor especifico
listaTelefones.splice(0, 1);
//pegar o index de um valor
listaTelefones.indexOf(31231253467);


console.log(listaTelefones);
console.log( listaTelefones.indexOf(31231253467));

