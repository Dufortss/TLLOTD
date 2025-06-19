const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Define o ambiente
const env = process.env.NODE_ENV || 'development';

// Configurações de CORS
const allowedOrigins =
    env === 'production'
        ? ['https://tsrpg-e7i2.vercel.app'] // Frontend em produção (Vercel)
        : ['http://localhost:3000']; // Frontend local (desenvolvimento)

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Não autorizado pelo CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

app.use(express.json());

// Conectando ao banco de dados
connectDB();

// Rotas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Servidor rodando no ambiente ${env} na porta ${PORT}`)
);
