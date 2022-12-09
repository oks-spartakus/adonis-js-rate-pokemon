// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pokemon from 'App/Models/Pokemon'
import CreatePokemonValidator from 'App/Validators/CreatePokemonValidator'

export default class PokemonsController {
  public async index() {
    return (await Pokemon.all()).sort(({ points: p1 }, { points: p2 }) => p2 - p1).slice(0, 10)
  }

  public async store({ request, response }) {
    const payload = await request.validate(CreatePokemonValidator)

    const pokemon = await Pokemon.findBy('name', payload.name)
    if (pokemon) {
      return response.conflict({ error: 'this pokemon is already in db' })
    }

    const data = await Pokemon.create(payload)
    return response.created({ data })
  }

  public async show({ params, response }) {
    const pokemon = await Pokemon.find(params.id)
    if (!pokemon) {
      return response.notFound({ error: `there is no pokemon with id=${params.id}` })
    }

    return pokemon
  }

  public async update({ request, response }) {
    const { id } = request.params()
    const pokemon = await Pokemon.find(id)

    if (!pokemon) {
      return response.notFound({ error: `there is no pokemon with id=${id}` })
    }
    pokemon.points++
    return pokemon.save()
  }
}
