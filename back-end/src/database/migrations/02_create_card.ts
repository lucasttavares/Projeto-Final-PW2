import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('cards', table => {
      table.increments('id').primary();
      table.string('subject').notNullable();
      table.string('avatar').nullable();

      table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
    });
  }
export async function down(knex:Knex) {
    return knex.schema.dropTable('cards');
}