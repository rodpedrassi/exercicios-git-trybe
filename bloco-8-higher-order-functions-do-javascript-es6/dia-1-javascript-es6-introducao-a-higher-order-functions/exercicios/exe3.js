const createEmploy = (nomeCompleto) => {
    let nome = nomeCompleto.replace(/\s/g, '_');
    nome = nome.toLowerCase();
    const email = `${nome}@trybe.com`;
    return {nomeCompleto, email};
};

console.log(createEmploy('Rodrigo Pedrassi Alves'));

const newEmployees = () => {
    const employees = {
      id1: createEmploy('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: createEmploy('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: createEmploy('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees());