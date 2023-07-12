import db from "../database/connection";
import { Request, Response } from 'express'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

export default class LoginController {
    async login(request: Request, response: Response) {
        const { username, password } = request.body;
        db('admin')
        .where({ username: 'admin' })
        .first()
        .then((admin) => {
        if (!admin) {
            return db('admin').insert({ username: 'admin', password: 'admin' });
        
        } else if (admin.username !== username || admin.password !== password) {
            return Promise.reject();
      }

      response.json({ message: 'Login successful' });
    }).catch(() => {
      response.status(401).json({ error: 'Authentication failed' });
    });
    }
}
