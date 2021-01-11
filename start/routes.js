'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.get('showSeries/:id', 'SeriesController.mostrarSerie')
Route.get('/showAll/:edad', 'SeriesController.mostrarTodas').middleware(['edad'])
Route.post('/insertaSeries', 'SeriesController.insertar')
Route.put('/updateSeries/:id', 'SeriesController.update')
Route.delete('/eliminaSeries/:edad/:id', 'SeriesController.elimina').middleware(['edad'])
