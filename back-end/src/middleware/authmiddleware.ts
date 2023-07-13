import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express'
import { validateToken } from '../utils/token';

export default function authMiddleware(request: Request, response: Response, next: NextFunction) {
  const { authorization }: any = request.headers;

  const token = authorization.split(' ')[1];

  if (validateToken(token)) { 
    next() 
} else {

  return response.status(403).json({ error: 'Unauthorized' });

};



}