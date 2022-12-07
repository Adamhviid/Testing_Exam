import Converters from '../Client/ConvertersTest.js';

test('celsiusToFahrenheit', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="fhtOutput" />' +
    '</div>';

  expect(Converters.celsiusToFahrenheit(-273)).toBe(-459);
});

test('fahrenheitToCelsius', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="celsOutput" />' +
    '</div>';

  expect(Converters.fahrenheitToCelsius(-459)).toBe(-273);
});

test('cmsToFeet', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="feetOutput" />' +
    '</div>';

  expect(Converters.cmsToFeet(30)).toBe(1);
});

test('feetToCms', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="cmsOutput" />' +
    '</div>';

  expect(Converters.feetToCms(1)).toBe(30);
});

test('lbsToKgs', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="kgsOutput" />' +
    '</div>';

  expect(Converters.lbsToKgs(2)).toBe(1);
});

test('kgsToLbs', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="lbsOutput" />' +
    '</div>';

  expect(Converters.kgsToLbs(1)).toBe(2);
});