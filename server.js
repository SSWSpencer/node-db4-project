const express = require("express");
const helmet = require("helmet");
const recipeRouter = require("./recipes/recipe-router.js")

const db = require("./data/db-config.js");

const server = express();

server.use("/api/recipes", recipeRouter)

server.get("/", (req, res)=>{
    res.status(200).json({api: "up"})
})


module.exports = server;