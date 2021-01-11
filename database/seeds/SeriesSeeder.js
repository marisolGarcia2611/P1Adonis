'use strict'

const { createMany } = require('../../app/Models/Series')

/*
|--------------------------------------------------------------------------
| SeriesSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class SeriesSeeder {
  async run () {
    //const users = await Database.table('series')
    //console.log(series)
    await Factory.model('App/Models/Series').createMany(5)
  }
}
module.exports = SeriesSeeder
