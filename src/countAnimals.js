const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // uso a condicional if para saber se o parametro animal recebe algo, caso nao receba ele retornara todas as especies e a quantidade,independente do sexo.
  if (!animal) {
    const totalAnimals = {};
    species.forEach((specie) => { totalAnimals[specie.name] = specie.residents.length; });
    return totalAnimals;
  }
  // crio uma constante utilizando o find para aramzenar os valores caso o parametro animal.specie receba um objeto com nome de alguma especie.
  const getSpecies = species.find((specie) => (animal.specie === specie.name));
  // crio outra constante utilizando dessa o filter para armazenar os valores caso o paramentro animal.sex receba um objeto contendo o sexo.
  const verifyIfSex = getSpecies.residents.filter((i) => (animal.sex === i.sex));
  // em caso de nao haver definicao do sexo, retornara somente a quantidade da especie animais, independente do sexo.
  if (!animal.sex) {
    return getSpecies.residents.length;
    // caso seja inserido o nome da especie, bem como o sexo, retornara o total de devidas informacoes.
  } return verifyIfSex.length;
}

console.log(countAnimals({ specie: 'penguins', sex: 'male' }));
module.exports = countAnimals;
