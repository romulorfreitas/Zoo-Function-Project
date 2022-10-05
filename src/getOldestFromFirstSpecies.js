const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const fisrtResp = employees.find((employee) => employee.id === id).responsibleFor[0]; // const para pegar o primeiro animal que o empregado e responsavel.
  // console.log(fisrtResp);
  const verifyAge = species.find((specie) => specie.id === fisrtResp).residents; // const para buscar os residentes do id que for igual ao do inserido no parametro.
  const older = verifyAge.sort((a, b) => b.age - a.age)[0]; // const para ordenar os animais pela idade, do animal mais velhor para o mais novo, acessando o primeiro.
  if (id !== undefined) { // caso o parametro id receba um valor, retorna o value da const older, o animal mais velho.
    return Object.values(older);
  }
}

module.exports = getOldestFromFirstSpecies;
