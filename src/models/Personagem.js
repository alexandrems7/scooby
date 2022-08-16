const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true,
  },
});

//Referencio o Schema Personagem à colection personagens, que já existe lá no mongoose
//Com isso, ela sai daqui e entra  lá

const Personagem = mongoose.model('personagens', PersonagemSchema);

module.exports = Personagem;
