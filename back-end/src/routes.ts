import express, { request, response } from "express";
import CardsController from "./controllers/CardsController";
import ConnectionsController from "./controllers/ConnectionsController";
import LoginController from "./controllers/LoginController";

const routes = express.Router();

const cardsController = new CardsController();
const connectionsController = new ConnectionsController();
const loginController = new LoginController();

routes.get('/cards', cardsController.index) 
routes.post('/cards', cardsController.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

routes.post('/login', loginController.login)

export default routes