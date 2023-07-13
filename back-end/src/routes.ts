import express, { request, response } from "express";
import CardsController from "./controllers/CardsController";
import LoginController from "./controllers/LoginController";
import authMiddleware from "./middleware/authmiddleware";

const routes = express.Router();

const cardsController = new CardsController();
const loginController = new LoginController();

routes.get('/cards', authMiddleware, cardsController.index) 
routes.post('/cards', cardsController.create)

routes.post('/login', loginController.login)

export default routes