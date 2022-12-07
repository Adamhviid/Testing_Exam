import Converters from '../Client/ConvertersTest.js';


document.body.innerHTML =
'<div>' +
'  <span id="lbsOutput" />' +
'</div>';

test('kgsToLbs', () => {
    expect(Converters.kgsToLbs(1)).toBe(2);
  });

  // run singluar test npm test -t kgsToLbs.test.js