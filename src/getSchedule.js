const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const [lion] = species.map((d) => d.availability)
// const [, tiger] = species.map((d) => d.availability)
// const [, , bear] = species.map((d) => d.availability)
// const [, , , penguin] = species.map((d) => d.availability)
// const [, , , , otter] = species.map((d) => d.availability)
// const [, , , , , frog] = species.map((d) => d.availability)
// const [, , , , , , snakes] = species.map((d) => d.availability)
// const [, , , , , , , elephant] = species.map((d) => d.availability)
// const [, , , , , , , , giraffes] = species.map((d) => d.availability)

// const schedulee = species.map((t) => t.availability)
// console.log(schedulee);
const findAnimals = species.map((a) => a.name);
const [teste] = hours;
console.log(teste);
// const findAnimals2 = species.map((a) => a.name).find((as) => as);
// const days = species.map((day) => day.availability)
// console.log(days);
// const animals = species.map((animal) => animal.name)
// console.log(animals);
// const times = hours
// console.log(times);
// const daysTime = Object.keys(data.hours)
// console.log(daysTime);

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (findAnimals.find((sa) => sa === scheduleTarget)) {
    return (species.find((specie) => specie.name === scheduleTarget).availability);
  }
}
// console.log(getSchedule('bears'));
module.exports = getSchedule;
