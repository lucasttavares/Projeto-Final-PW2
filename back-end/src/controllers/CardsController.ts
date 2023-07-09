import { response } from 'express';
import { request } from 'express';
import db from "../database/connection";
import {Request, Response} from 'express'

export default class CardsController {

    async index(request: Request, response: Response){
        const filters = request.query;

        if(!filters.subject){
            return response.status(400).json({
                error: 'É necessário informar seu cargo'
            })
        }

        const cards = await db('cards')
        .where('cards.subject', '=', filters.subject as string)
        .join('users', 'cards.user_id', '=', 'user_id')
        .select(['cards.*', 'users.*'])

        response.json(cards);
    }

    async create (request: Request, response: Response) {
        const {
            name,
            avatar,
            numero,
            bio,
            subject
        } = request.body;
    
        const trx = await db.transaction();
    
        try{
            const insertedUserId = await trx('users').insert({
                name,
                avatar,
                numero,
                bio
            });
        
            const user_id = insertedUserId[0];
        
            await trx('cards').insert({
                subject,
                user_id
            })
        
            await trx.commit();
        
            return response.status(201).send();
    
        } catch (err) {
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Não foi possível criar o card'
            })
        }
    }
}