'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')


Factory.blueprint('App/Models/Series',/* async*/ (faker) => {
  return {
    nombre: faker.name(),
    categoria: faker.word(),
    plataforma: faker.company(),
    puntuacion: faker.postcode()
  }
})