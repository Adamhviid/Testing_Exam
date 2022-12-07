import Converters from '../Client/ConvertersTest.js';

document.body.innerHTML =
'<div>' +
'  <span id="mlOutput" />' +
'</div>';
test('ounceToMilliliter', () => {
    expect(Converters.ounceToMilliliter(4)).toBe(118);
  });

// run singular test npm test -t ounceToMilliliter.test.js