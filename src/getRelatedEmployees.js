const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const [, burlId, olaId, , stephanieId, , emery] = employees;
const manager1 = burlId.id;
const manager2 = olaId.id;
const manager3 = stephanieId.id;
const manager4 = emery.id;

// const managerBurlIdFor = burlId.responsibleFor;
// const managerOlaID1For = olaId.responsibleFor;
// const managerStephanieId1For = stephanieId.responsibleFor;

// const [nigel, , wilburn, , ...rest] = employees;
// const nigelEmployee = nigel;
// const wilburnEmployee = wilburn;
// const othersEmployees = rest;

function isManager(id) {
  if (manager1 === id || manager2 === id || manager3 === id || manager4 === id) {
    return true;
  } return false;
}
console.log(isManager());

function getRelatedEmployees(managerId) {
  const verifyFor = isManager(managerId);
  if (verifyFor === true) {
    return employees.filter((employee) => employee.managers
      // filtro array employee sem altera-lo para acessar os managers com o some
      .some((valor) => valor === managerId))
      // verifico com o some se os valores dos managers sao iguais ao da funcao managerId,caso positivo retornara true e prossiguira com o map
      .map((nome) => `${nome.firstName} ${nome.lastName}`);
    // uso o map com um template literals para retornar um array contendo o primeiro e ultimo nome das pessoas geranciadas
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  // Caso o valor do id inserido nao seja de um gerente retornara um erro
}

// getRelatedEmployees(manager1);

// const teste = employees.filter((employee) => employee.managers);
// console.log(teste);
// function getRelatedEmployees(managerId) {
//   return employees.some((valor) => valor.managers === manager3);
// }
// getRelatedEmployees(manager1);
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// const teste3 = employees.filter((employee) => employee.managers.some((valor) => valor))
//   .map((nome) => `${nome.firstName} ${nome.lastName}`);
// console.log(teste3);

module.exports = { isManager, getRelatedEmployees };
