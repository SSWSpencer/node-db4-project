const db = require("../data/db-config.js");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes(){
    return db("recipes")
}

function getShoppingList(id){
    return db("ingredients").where({recipe_id: id})
}

function getInstructions(id){
    return db("steps").where({recipe_id: id})
}

// getRecipes();
// getShoppingList(recipe_id)
// getInstructions(recipe_id)