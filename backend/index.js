import 'dotenv/config';
import express from 'express';
import { connectDb } from './config/db.js';
import UserRoutes from './domains/users/routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use('/users', UserRoutes);

await connectDb();

app.listen(PORT, () => {
    console.log(`SERVIDOR TA RODANDO NA PORTA ${PORT}`);
});
