const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/personagem.route');
const connectToDatabase = require('./src/database/database');

app.use(express.json());
app.use(cors());
app.use('/personagens', routes);
connectToDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
