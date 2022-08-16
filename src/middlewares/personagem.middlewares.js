const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idPersonagem = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idPersonagem)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  next();
};

const validObjectBody = (req, res, next) => {

    const personagem = req.body;

  if (!personagem || !personagem.nome || !personagem.sobrenome) {
    return res.status(400).send({
      message: 'Preencha todos os campos todos os campos: nome e sobrenome.',
    });
  }

  next();
};

module.exports = {
  validId,
  validObjectBody,
};
