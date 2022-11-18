/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("coins", (table) => {
    table.bigIncrements("id");
    table.string("name").notNullable();
    table.string("price").notNullable();
    table.bigInteger("coinId").notNullable();
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {};
