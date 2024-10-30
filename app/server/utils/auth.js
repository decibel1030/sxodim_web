import jwt from "jsonwebtoken"

const JWT_SECRET = 'your_jsw_secret_key';

export const generateToken = (user) =>{ 
    return jwt.sign({id: user._id, name: user.name}, JWT_SECRET, {
        expiresIn: "12h"
    });
}

export const verifyToken = (req, res, next) =>{
    const token = req.headers["authorixation"]?.split(" "[1]);

    if(!token){
        return res.status(401).json({message: "Access denied. No token provided"})
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) =>{
        if(err){
            return res.status(401).json({message: "invalid token"})
        }
        req.user = decoded;
        next()
    })
}