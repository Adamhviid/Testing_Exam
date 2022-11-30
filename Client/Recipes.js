async function getLasagne() {
  const response = await fetch('http://localhost:3000/recipes/lasagne');
  const recipes = response.json();
  recipes.then(data => {
    document.getElementById("recipe2").innerHTML = data.Name;
  });
}

async function getPancakes() {
  const response = await fetch('http://localhost:3000/recipes/pancakes');
  const recipes = response.json();
  recipes.then(data => {
    document.getElementById("recipe1").innerHTML = 
      data.Name + "\n" + 
      data.ButterGram + "\n"
      data.MilkMilliliter + "\n" +
      data.SugarGram + "\n" +
      data.PancakeLengthCentimeter + "\n" +
      data.TemperatureCElcius
  });
}

getLasagne()
getPancakes()