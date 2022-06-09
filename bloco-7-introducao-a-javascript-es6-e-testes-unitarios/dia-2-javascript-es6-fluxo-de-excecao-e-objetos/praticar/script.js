//====================================================Usando try catch para verificar se é numero

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Os valores devem ser numéricos");
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};
//   console.log(sum(2, '3'));

//==================================================== Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const cliente = {};

const pessoa = {
  olhos: "castanho",
  idade: 10,
};

const novoCliente = (objeto, chave, valor) => {
  objeto = {
    [chave]: valor,
  };
  return objeto;
};
const obj = novoCliente("pessoa", "olhos", "castanho");
// console.log(obj);

//====================================================Usando Object.keys pra listar as chaves do objeto (como se fosse um for)

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};
// for (const property in coolestTvShow) {
//   console.log(property);
// }

//   console.log(Object.keys(coolestTvShow));
  
  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
//   console.log('Estudante 1');
//   listSkills(student1);
  
//   console.log('Estudante 2');
//   listSkills(student2);

  //====================================================Usando Object.value

  const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
//   console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
//   console.log(listSkillsValuesWithValues(student));

  //===============================Usando Object.entries()
  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };

  const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

  for(index in pairKeyValue) {
    // console.log('--------');
    // console.log('País:', pairKeyValue[index][0]);
    // console.log('Capital:', pairKeyValue[index][1]);
  };

  //====================================== Usando Object.assign()


const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);