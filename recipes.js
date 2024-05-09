let recipe = [
    {
        name: "Chocolate Chip Cookies",
        ingredients: ["flour", "sugar", "chocolate chips"],
        instructions: "Mix ingredients, bake at 350°F for 10 minutes."
    },
    {
        name: "brownies",
        ingredients: ["cocoa powder","flour","eggs","sugar","espresso powder","butter","oil",]
    }
    ]
    // Function to display the recipe
    function displayRecipe() {
        let recipeContent = `
            Recipe Name: ${recipe.name}
            Ingredients: ${recipe.ingredients.join(", ")}
            Instructions: ${recipe.instructions}
        `;
        document.getElementById('recipeDisplay').innerHTML = recipeContent;
    }