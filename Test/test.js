import Converters from '../Client/Converters.js';

test('celsiusToFahrenheit', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="fhtOutput" />' +
    '</div>';


  expect(Converters.celsiusToFahrenheit(-273)).toBe(-459);

});