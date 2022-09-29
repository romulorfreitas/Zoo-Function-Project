const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => {
    if (ids === 'undefined') {
      return [];
    } return ids.includes(specie.id);
  });
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

//documentacao https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

module.exports = getSpeciesByIds;