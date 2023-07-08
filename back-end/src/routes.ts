import express, { request, response } from "express";

const routes = express.Router();

routes.get('/cards', (request, response) =>{
    return response.json({ message: 'olá olá'})
})  

export default routes