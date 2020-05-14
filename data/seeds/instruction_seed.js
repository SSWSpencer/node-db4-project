
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, name: "Do the thing", recipe_id: 1},
        {id: 2, name: "Do the thing", recipe_id: 2},
        {id: 3, name: "Do the thing", recipe_id: 3},
        {id: 4, name: "Do the thing again", recipe_id: 1},
        {id: 5, name: "Do the thing again", recipe_id: 2},
        {id: 6, name: "Do the thing again", recipe_id: 3},
        {id: 7, name: "Do the thing a third time", recipe_id: 1},
        {id: 8, name: "Do the thing a third time", recipe_id: 2},
        {id: 9, name: "Do the thing a third time", recipe_id: 3},
      ]);
    });
};
