//1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  
  const usuario = { ...user, ...jobInfos };
  
  console.log(usuario);
  
  //   2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
  // Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
  
  const {
    name: nome,
    age,
    nationality,
    profession,
    squad,
    squadInitials,
  } = usuario;
  
  console.log(
    `Olá, meu nome é ${nome}, tenho ${age} anos e sou ${nationality}. Eu trabalho como ${profession} e minha equipe se chama ${squadInitials}-${squad}`
  );
  