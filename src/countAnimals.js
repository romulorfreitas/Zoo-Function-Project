const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const [ratin, quantos] = species;
const teste2 = ratin.name;
const teste3 = quantos.residents.length;

const [{ ...animais }] = species;
// console.log(animais);

// console.log(teste2);
// console.log(teste3);
// console.log(lion);

function countAnimals(animal) {
  if (!animal) {
    return species.find((s) => s.name === animal).residents.length;
  } return {};
}
console.log(countAnimals());

// module.exports = countAnimals;
