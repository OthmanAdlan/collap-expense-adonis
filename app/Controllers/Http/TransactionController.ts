import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from 'App/Models/Transaction';

export default class TransactionsController {
  public async index({ }: HttpContextContract) {
    // define accepted query keys
    // apply some global scope

    // todo:
    // - validate request
    // - try...catch

    const query = Transaction.find({});

    return await query.lean();
  }

  public async store({ request }: HttpContextContract) {
    console.log(request.all());

    return await Transaction.create(request.all());
  }

  public async show({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
