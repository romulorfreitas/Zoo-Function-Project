const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const entrants2 = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// const somaIdade = entrants2.map((entrant) => entrant.age).reduce(((acc, curr) => acc + curr), 0);

// console.log(somaIdade);

function countEntrants(entrants) {
  // utilizo o reduce para saber de acordo com o que o parametro entrants receber, adiciona + 1 em seus devidos objetos.
  return entrants.reduce((acc, curr) => {
    // uso a estrutura do if/else para separar e adicionar aos objetos pela idade.
    if (curr.age > 0 && curr.age <= 17) {
      acc.child += 1;
    } else if (curr.age >= 18 && curr.age <= 49) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    } return acc;
  }, { child: 0, adult: 0, senior: 0 }); // valor inicial do acumulador,bem como retorno em objeto.
}

function calculateEntry(entrants) {
  // condicional para retornar 0 caso entrants nao seja definido ou seja um array de objetos vazio.
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  // valor inicial total
  let totalPrice = 0;
  // para saber o total de child
  const child = entrants.filter((e) => e.age > 0 && e.age <= 17).length * prices.child;
  // para saber o total de adult
  const adult = entrants.filter((e) => e.age >= 18 && e.age <= 49).length * prices.adult;
  // para saber o total de senior
  const senior = entrants.filter((e) => e.age >= 50).length * prices.senior;
  // para saber o total de todos
  totalPrice = child + adult + senior;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
