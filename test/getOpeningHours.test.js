const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    expect(getOpeningHours()).toBe(hours);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para os argumentos Wednesday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  // https://jestjs.io/docs/expect#tothrowerror

  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: The day must be valid. Example: Monday', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrowError('The day must be valid. Example: Monday');
  });

  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem:', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem:', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrowError('The hour should represent a number');
  });

  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem:', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrowError('The minutes should represent a number');
  });

  it('Para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem:', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrowError('The hour must be between 0 and 12');
  });

  it('Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem:', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrowError('The minutes must be between 0 and 59');
  });
});
