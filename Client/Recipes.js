async function getRecipes() {
  const response = await fetch('http://localhost:3000/recipes');
  const recipes = response.json();
  recipes.then(data => {
    document.getElementById("recipe1").innerHTML = data[0].Name + data[0].ButterGram
    document.getElementById("recipe2").innerHTML = data[1].Name;
  });
}

getRecipes()