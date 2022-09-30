const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Passando por argumento um objeto vazio ({}) deve retornar a string', () => {
    expect(handlerElephants({})).toStrictEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar', () => {
    expect(handlerElephants('')).toStrictEqual(null);
  });
});
