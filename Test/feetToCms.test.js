import Converters from '../Client/ConvertersTest.js';


document.body.innerHTML =
'<div>' +
'  <span id="cmsOutput" />' +
'</div>';

test('feetToCms', () => {
    expect(Converters.feetToCms(1)).toBe(30);
  });


    // run singluar test npm test -t feetToCms.test.js