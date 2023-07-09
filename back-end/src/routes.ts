import express, { request, response } from "express";
import CardsController from "./controllers/CardsController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const cardsController = new CardsController();
const connectionsController = new ConnectionsController()

routes.get('/cards', cardsController.index) 
routes.post('/cards', cardsController.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes