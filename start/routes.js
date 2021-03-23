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
  return { message: 'Welcome to HomePage' }
})

Route.get('/contatos/edit', () => {
  return { greeting: 'Exibicao das informacoes de um contato' }
})

Route.post('/contatos', () => {
  return { greeting: 'Cria um contato' }
})

Route.put('/contatos/id', () => {
  return { greeting: 'Editar um contato' }
})

Route.delete('/contatos/id', () => {
  return { greeting: 'Excluir um contato' }
})