import { Request, Response } from 'express'

import db from '../database/connection';
export default class CardsController {
  async index(request: Request, response: Response) {
    const filters = request.query;
    const subject = filters.subject as string;

    if (!filters.subject) {
      return response.status(400).json({
        error: 'Missing filters to search cards'
      });
    }

    const cards = await db('cards')
      .where('cards.subject', '=', subject)
      .join('users', 'cards.user_id', '=', 'users.id')
      .select(['cards.*', 'users.*']);

    return response.json(cards);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      numero,
      bio,
      subject,
    } = request.body;

    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        numero,
        bio,
      });
    
      const user_id = insertedUsersIds[0];
    
      await trx('cards').insert({
        subject,
        user_id
      });
    
      await trx.commit();
    
      return response.status(201).send();
    } catch (err) {
      console.log(err);

      await trx.rollback();
  
      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }
}