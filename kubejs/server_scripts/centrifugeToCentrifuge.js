ServerEvents.recipes(event => {  
    // Find all smelting recipes  
    event.forEachRecipe({ type: 'complicatedbees:centrifuge' }, recipe => {  
        // Get the input and output from the smelting recipe  
        let input = recipe.originalRecipeIngredients[0]  // ingredient  
        let output = recipe.originalRecipeResult          // result  
          
        // Create a shapeless crafting recipe with the same input/output  
        event.recipes.vintageimprovements.centrifugation(output, [input])  
            .id(`createCentrifuging${recipe.getId().path}`)  
    })  
})