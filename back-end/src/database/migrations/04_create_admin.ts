import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('admin', table => {
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
    });
  }
export async function down(knex:Knex) {
    return knex.schema.dropTable('admin');
}


