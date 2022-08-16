const personagensService = require('../services/personagem.service');
const mongoose = require('mongoose');

const findAllPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.findAllPersonagensService();

  if(allPersonagens.length == 0){
    return res.status(404).send({message: 'Não existe nenhuma paleta cadastrada!'})
  }


  res.send(allPersonagens);
};

const findByIdPersonagemController = async (req, res) => {
  const personagensId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(personagensId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const chosenPersonagens = await personagensService.findByIdPersonagemService(
    personagensId,
  );
  res.send(chosenPersonagens);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;

  if (!personagem || !personagem.nome || !personagem.sobrenome) {
    return res
      .status(400)
      .send({
        message: 'Preencha todos os campos todos os campos: nome e sobrenome.',
      });
  }

  const newPersonagem = await personagensService.createPersonagemService(
    personagem,
  );
  res.send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idPersonagem = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idPersonagem)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const editPersonagem = req.body;

  if (
    !editPersonagem ||
    !editPersonagem.nome ||
    !editPersonagem.sobrenome
  ) {
    return res
      .status(400)
      .send({
        message: 'Preencha todos os campos todos os campos: nome e sobrenome.',
      });
  }

  const updatedPersonagem = await personagensService.updatePersonagemService(
    idPersonagem,
    editPersonagem,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = async (req, res) => {
 
  const idPersonagem = req.params.id;




  if (!mongoose.Types.ObjectId.isValid(idPersonagem)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  // const nome = await personagensService.findByIdPersonagemService(idPersonagem).nome;

  await personagensService.deletePersonagemService(idPersonagem);

  res.send({
    message: `"O personagem foi deletado com sucesso!"`,
  });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
