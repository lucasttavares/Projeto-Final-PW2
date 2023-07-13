import db from "../database/connection";
import { Request, Response } from 'express';
import { createToken } from "../utils/token";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

export default class LoginController {
    async login(request: Request, response: Response) {
        const { username, password } = request.body;
        const result = 
        db('admin')
        .where({ username: username })
        .andWhere({ password: password })
        .first().select().then(value=> {
          if(value === undefined){
            return response.status(500).json({"Mensagem": 'Credenciais inváldas'})
          } else {
            return response.status(200).json({'Token' : `Bearer ${createToken(value.username)}`})
          }
        });
    }
}
