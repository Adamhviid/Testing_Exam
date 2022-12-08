const getFirstFact = require("../Database/Api2");

it("Ensuring dataretrival from CatFactAPI", async () => {
  console.log("Connection to CatFact API confirmed");
  const fact = await getFirstFact();
  expect(fact).not.toBe(null);
});
