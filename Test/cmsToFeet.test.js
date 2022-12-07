import Converters from '../Client/ConvertersTest.js';

document.body.innerHTML =
'<div>' +
'  <span id="feetOutput" />' +
'</div>';

test('cmsToFeet', () => {
    expect(Converters.cmsToFeet(30)).toBe(1);
  });

  // run singluar test npm test -t cmsToFeet.test.js