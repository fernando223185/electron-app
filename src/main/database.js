const path = require('path');
const { app } = require('electron');
const knex = require('knex');

const dbPath = path.join(app.getPath('userData'), 'pos-db.sqlite');

const db = knex({
  client: 'sqlite3',
  connection: { filename: dbPath },
  useNullAsDefault: true
});

// Crear tabla de usuarios si no existe
db.schema.hasTable('usuarios').then(exists => {
  if (!exists) {
    return db.schema.createTable('usuarios', table => {
      table.increments('id').primary();
      table.string('usuario').unique().notNullable();
      table.string('password').notNullable();
      table.string('nombre');
      table.boolean('sincronizado').defaultTo(false);
    });
  }
});

module.exports = db;
