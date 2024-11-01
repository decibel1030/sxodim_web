import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
const JWT_SECRET = 'your_jsw_secret_key';

export const generateToken = (user) =>{ 
    
    return jwt.sign({id: user._id, name: user.name}, JWT_SECRET, {
        expiresIn: "12h"
    });
}

export const verifyToken = (req, res, next) => {
    if (!req.cookies) {
        return res.status(401).json({ message: "Не получены куки" });
    }

    const token = req.cookies.authToken;

    if (!token) {
        return res.status(401).json({ message: "Отказано в доступе нет токена" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Неверный токен" });
        }
        req.user = decoded; 
        next();
    });
};