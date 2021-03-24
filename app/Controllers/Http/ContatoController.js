'use strict'

const Contato = use('App/Models/Contato')

class ContatoController {

    async store({ request }) {
        
        const dataToCreate = request.only(['nome', 'sobrenome', 'empresa', 'cargo', 'email', 'telefone', 'obs'])
        return await Contato.create(dataToCreate);

    }

}

module.exports = ContatoController
