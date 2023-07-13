import jwt, { decode } from "jsonwebtoken";
import 'dotenv/config'

const createToken = (user: number) => {
    return jwt.sign({ user }, `${process.env.TOKEN_KEY}`, { expiresIn: 1800});
  };
  
  const validateToken = (token: string) => {
    let valid = true;
    jwt.verify(token, `${process.env.TOKEN_KEY}`, (err, decode)=>{
        if(err) valid = false
    });
    return valid;
  };

export {createToken, validateToken}