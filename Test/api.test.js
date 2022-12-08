const apidata = [
  {
    fact: "Cats are not similar to dogs in any way. They are superior",
    length: 58,
  },
  {
    fact: "Cats are not similar to dogs in any way. They are superior 2",
    length: 60,
  },
  {
    fact: "Cats have 4 legs",
    length: 16,
  },
];

test("Mocked fact to be found correctly", () => {
  expect(apidata[0].fact).toBe(
    "Cats are not similar to dogs in any way. They are superior"
  );
});

test("Mocked fact to be found correctly 2", () => {
  expect(apidata[1].fact).toBe(
    "Cats are not similar to dogs in any way. They are superior 2"
  );
});

test("Mocked fact doesn't match other mocked fact", () => {
  expect(apidata[0].fact).not.toBe(
    "Cats are not similar to dogs in any way. They are superior 2"
  );
});

test("Mocked fact doesn't match other mocked fact 2", () => {
  expect(apidata[1].fact).not.toBe(
    "Cats are not similar to dogs in any way. They are superior"
  );
});

test("Mocked fact length wrong", () => {
  expect(apidata[1].length).not.toBe(38);
});

test("Mocked fact length right", () => {
  expect(apidata[1].length).toBe(60);
});

test("Mocked fact length can't be boolean", () => {
  expect(apidata[0].fact).not.toBe(true);
});

test("Mocked fact lengths aren't same", () => {
  expect(apidata[0].length).not.toBe(apidata[2].length);
});

// run singluar test npm test -t api.test.js
