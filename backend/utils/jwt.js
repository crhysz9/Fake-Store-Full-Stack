import 'dotenv/config';
import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

export const JWTVerify = (req) => {

    const { token } = req.cookies;

    if (token) {

        jwt.verify(token, JWT_SECRET_KEY, {}, (error, userInfo) => {

            return new Promise((resolve, reject) => {
                if (error) {

                    console.error("Deu algum erro ao verificar com o JWT:", error);
                    reject(error);

                }
                resolve(userInfo);
            });

        });

    } else {
        return null;
    }

};

export const JWTSign = () => {

    return jwt.sign(newUserObj, JWT_SECRET_KEY, {}, (error, token) => {
        if (error) {
            console.error(error);
            res.status(500).json(error);
            return;
        }
    });
    
}