const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/personagens_db', {
      //Esses campos evitam que a conexão tenha algum problema
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro ${error}`),
    );
};

module.exports = connectToDatabase;
