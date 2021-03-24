'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatosSchema extends Schema {
  up () {
    this.create('contatos', (table) => {
      table.increments()
      table.string('nome',100).notNullable()
      table.string('sobrenome', 50)
      table.string('empresa', 100)
      table.string('cargo', 100)
      table.string('email', 100)
      table.string('telefone', 20).notNullable()
      table.string('obs', 300)
      table.timestamps()
    })
  }

  down () {
    this.drop('contatos')
  }
}

module.exports = ContatosSchema
