
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'ingredient 1', quantity: "1 cup", recipe_id: 1},
        {id: 2, name: 'ingredient 1', quantity: "2 cup", recipe_id: 2},
        {id: 3, name: 'ingredient 1', quantity: "3 cup", recipe_id: 3},
        {id: 4, name: 'ingredient 2', quantity: "1 cup", recipe_id: 1},
        {id: 5, name: 'ingredient 2', quantity: "2 cup", recipe_id: 2},
        {id: 6, name: 'ingredient 2', quantity: "3 cup", recipe_id: 3},
        {id: 7, name: 'ingredient 3', quantity: "1 cup", recipe_id: 1},
        {id: 8, name: 'ingredient 3', quantity: "2 cup", recipe_id: 2},
        {id: 9, name: 'ingredient 3', quantity: "3 cup", recipe_id: 3},
      ]);
    });
};
