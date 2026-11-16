import 'dotenv/config';
import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

export const connectDb = async () => {
    if (!MONGO_URL) {
        throw new Error('A variável MONGO_URL não está definida.');
    }

    await mongoose.connect(MONGO_URL);
    console.log('Conexão com o banco de dados estabelecida.');
};
