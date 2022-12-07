import Converters from '../Client/ConvertersTest.js';

document.body.innerHTML =
'<div>' +
'  <span id="ozOutput" />' +
'</div>';
test('milliliterToOunce', () => {
    expect(Converters.milliliterToOunce(118)).toBe(4);
  });

// run singular test npm test -t milliliterToOunce.test.js