import Converters from '../Client/ConvertersTest.js';

document.body.innerHTML =
'<div>' +
'  <span id="fhtOutput" />' +
'</div>';
test('celsiusToFahrenheit', () => {
    expect(Converters.celsiusToFahrenheit(-273)).toBe(-459);
  });
   // run singluar test npm test -t celsiusToFahrenheit.test.js