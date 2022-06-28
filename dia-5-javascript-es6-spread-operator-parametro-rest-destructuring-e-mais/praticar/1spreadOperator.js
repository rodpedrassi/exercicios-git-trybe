const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, hack : 'imperador', ...about };
  console.log(customer);
//   {
//     id: 101,
//     name: 'Alysson',
//     age: 25,
//     hack: 'imperador',
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer'
//   }