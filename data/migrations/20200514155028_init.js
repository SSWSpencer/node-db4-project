
exports.up = function(knex) {
  return knex.schema.createTable("recipes", recipe=>{
      recipe.increments();
      recipe.string("name", 255).notNullable();
  })
  .createTable("ingredients", ing=>{
      ing.increments();
      ing.string("name", 255).notNullable();
      ing.string("quantity", 255).notNullable();
      ing.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipes").onUpdate("CASCADE").onDelete("RESTRICT");
  })
  .createTable("steps", steps=>{
    steps.increments();
    steps.string("name", 255).notNullable();
    steps.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipes").onUpdate("CASCADE").onDelete("RESTRICT");
})



};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipes").dropTableIfExists("ingredients").dropTableIfExists("steps");
};
