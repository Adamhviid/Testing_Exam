import Converters from '../Client/ConvertersTest.js';

document.body.innerHTML =
'<div>' +
'  <span id="celsOutput" />' +
'</div>';
test('fahrenheitToCelsius', () => {
    expect(Converters.fahrenheitToCelsius(-459)).toBe(-273);
  });

 // run singluar test npm test -t fahrenheitToCelsius.test.js