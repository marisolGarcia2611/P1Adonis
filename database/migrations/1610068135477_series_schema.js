'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SeriesSchema extends Schema {
  up () {
    this.create('series', (table) => {

      table.increments()
      table.string('nombre', 200).notNullable().unique()
      table.string('categoria', 200).notNullable()
      table.string('plataforma', 200).notNullable()
      table.integer('puntuacion').notNullable()
      table.timestamps()

    })
  }

  down () {
    this.drop('series')
  }
}

module.exports = SeriesSchema
