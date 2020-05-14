const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) =>{ 
    Recipes.getRecipes()
    .then(recipes=>{
        res.status(200).json(recipes)
    })
    .catch(err=>{
        res.status(500).json({error: "Failed to get recipes"})
    })
})

router.get("/:id/shoppingList", (req, res)=>{
    Recipes.getShoppingList(req.params.id)
    .then(ings=>{
        if(ings.length){
            res.status(200).json(ings)
        }
        else{
            res.status(404).json({error: "Could not find ingredients for given recipe"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "Failed to get ingredients"})
    })
})

router.get("/:id/instructions", (req, res)=>{
    Recipes.getInstructions(req.params.id)
    .then(steps=>{
        if(steps.length){
            res.status(200).json(steps)
        }
        else(
            res.status(404).json({error: "Could not find steps for given recipe"})
        )
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "Failed to get instructions"})
    })
})


module.exports = router;