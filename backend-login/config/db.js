const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('Erro: MONGO_URI não definida no arquivo .env');
      process.exit(1);
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

// Eventos adicionais para reconexão
mongoose.connection.on('disconnected', () => {
  console.error('Conexão com MongoDB perdida. Tentando reconectar...');
  connectDB();
});

module.exports = connectDB;
