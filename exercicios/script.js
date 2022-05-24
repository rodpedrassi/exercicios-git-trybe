function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//   🚀 Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function diasCalendario() {
  let ul = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index++) {
    let elemento = dezDaysList[index];
    let li = document.createElement("li");
    li.innerText = elemento;
    li.className = "day";

    if (elemento === 24 || elemento === 25 || elemento === 31) {
      li.className = "day holiday";
    }
    if (
      elemento === 4 ||
      elemento === 11 ||
      elemento === 18 ||
      elemento === 25
    ) {
      li.className = "day friday";
    }
    if (elemento === 25) {
      li.className = "day holiday friday";
    }
    ul.appendChild(li);
  }
}

diasCalendario();

// 🚀 Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createButton(Feriados) {
  let btn = document.createElement("button");
  btn.id = "btn-holiday";
  btn.innerText = Feriados;
  let div = document.querySelector(".buttons-container");
  div.appendChild(btn);
}

createButton("Yesssssss");

// 🚀 Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function clickFeriado(event) {
  let lis = document.querySelectorAll(".holiday");

  for (let index = 0; index < lis.length; index++) {
    const element = lis[index];
    if (element.style.color === "red") {
      element.style.color = "#777";
    } else {
      element.style.color = "red";
    }
  }
}
let botao = document.querySelector("#btn-holiday");
// console.log(dias);
botao.addEventListener("click", clickFeriado);

// 🚀 Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createBtnSexta(params = "Sexta-feira") {
  let btn = document.createElement("button");
  btn.id = "btn-friday";
  btn.innerText = params;

  let div = document.querySelector(".buttons-container");
  div.appendChild(btn);
}
createBtnSexta();

// 🚀 Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function clickSexta() {
  let lis = document.querySelectorAll(".friday");

  for (let index = 0; index < lis.length; index++) {
    const element = lis[index];
    element.innerText = "Fun!";
  }

  let btn = document.querySelector("#btn-friday");
  btn.innerText = "Sexto?";
}

let btnSexta = document.querySelector("#btn-friday");
btnSexta.addEventListener("click", clickSexta);

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function zoom(event) {
  if (event.type === "mouseover") {
    event.target.style.fontSize = "25px";
  } else if (event.type === "mouseout") {
    event.target.style.fontSize = "20px";
  }
}

let lis = document.querySelectorAll(".day");
for (let index = 0; index < lis.length; index++) {
  const element = lis[index];
  lis[index].addEventListener("mouseover", zoom);
  lis[index].addEventListener("mouseout", zoom);
  // lis[index].addEventListener("click", mudaCorDia);
}

// 🚀 Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function createTarefa(params) {
  let span = document.createElement("span");
  span.innerText = params;

  let div = document.querySelector(".my-tasks");
  div.appendChild(span);
}
createTarefa("fazer compras");

// 🚀 Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function createDivTask(cor) {
  let div = document.createElement("div");
  div.className = "task";
  div.style.backgroundColor = cor;

  let divPai = document.querySelector(".my-tasks");
  divPai.appendChild(div);
}

createDivTask("white");

// 🚀 Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function taskSelected(event) {
  if (event.target.className === "task") {
    event.target.className = "task selected";
    event.target.style.backgroundColor = "red";
  } else {
    event.target.className = "task";
    event.target.style.backgroundColor = "white";
  }
}

let divTarefa = document.querySelector(".task");
divTarefa.addEventListener("click", taskSelected);

// 🚀 Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function mudaCorDia(event) {

  let tarefaSelected = document.querySelector('.selected')
  let cor = tarefaSelected.style.backgroundColor;


  console.log('vent.target.style.color');

  if (event.target.style.color !== cor) {
    event.target.style.color = cor;
  }else{
    event.target.style.color = 'rgb(119, 119, 119)';
  }
}

lis = document.querySelectorAll(".day");
for (let index = 0; index < lis.length; index++) {
  lis[index].addEventListener("click", mudaCorDia);
}

// 🚀 Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.

function clickAdicionarCompromisso(event){

}

let textBox = document.querySelector('#task-input');
let btnCompromisso = document.querySelector('#btn-add');
// btnCompromisso.addEventListener('click' clickAdicionarCompromisso);
