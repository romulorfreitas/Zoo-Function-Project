const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const animalsName = species.map((a) => a.name);

// const open = data.hours;

// const [lion] = species.map((d) => d.availability)
// const [, tiger] = species.map((d) => d.availability)
// const [, , bear] = species.map((d) => d.availability)
// const [, , , penguin] = species.map((d) => d.availability)
// const [, , , , otter] = species.map((d) => d.availability)
// const [, , , , , frog] = species.map((d) => d.availability)
// const [, , , , , , snakes] = species.map((d) => d.availability)
// const [, , , , , , , elephant] = species.map((d) => d.availability)
// const [, , , , , , , , giraffes] = species.map((d) => d.availability)

// console.log(species);
// console.log(days);
// console.log(animalsName);
// console.log(open);

function verifyDay() { // verifica o dia da semana e retorna agenda do dia ou se o zoo esta fechado.
  const reserveDay = {};
  // forEach para percorrer cada dia da semana criado na const. day e caso o parametro seja igual ao domingo retorna no getSchedule() a mensagem de que o zoo esta fechado. Caso receba outro dia retorna horario de func. e as exibicoes do dia.
  days.forEach((day) => {
    if (day === 'Monday') {
      reserveDay[day] = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      };// retorna msg de zoo closed na segunda
    } else {
      reserveDay[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species
          .map((specie) => specie.availability.includes(day) && specie.name)
          .filter((s) => s),
      };// retorna o horario de func. com os animais em exibicao do dia escolhido.
    }
  }); return reserveDay;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (animalsName.find((aN) => aN === scheduleTarget)) {
    return (species.find((specie) => specie.name === scheduleTarget).availability);// caso o parametro passado seja um animal retorna os dias da semana disponiveis para ve-lo.
  } if (days.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: verifyDay()[scheduleTarget],
    };// caso receba um dia sem ser a segunda retorna funcionamento/atracoes
  } if (scheduleTarget === 'Monday') {
    return {
      Monday: verifyDay().Monday,
    };// caso receba segunda retorna zoo closed.
  }
  const array = [];
  days.forEach(() => {
    array.push(verifyDay());
  });
  return Object.assign(...array);
  // caso receba outro valor que nao dia/animal retorna todos os dias/atracoes
}

// console.log(verifyDay());
console.log(getSchedule('Monday'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('drogon'));
module.exports = getSchedule;
