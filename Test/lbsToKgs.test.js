import Converters from '../Client/ConvertersTest.js';

document.body.innerHTML =
'<div>' +
'  <span id="kgsOutput" />' +
'</div>';

test('lbsToKgs', () => {
    expect(Converters.lbsToKgs(2)).toBe(1);
  });

test('lbsToKgs', () => {
  expect(Converters.lbsToKgs(-1)).toBe("invalid");
});

  // run singular test npm test -t lbsToKgs.test.js