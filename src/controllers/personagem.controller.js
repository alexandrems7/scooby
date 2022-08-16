const personagensService = require('../services/personagem.service');
const mongoose = require('mongoose');

const findAllPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.findAllPersonagensService();

  res.send(allPersonagens);
};

const findByIdPersonagemController = async (req, res) => {
  const idPersonagem = req.params.id;


  const chosenPersonagens = await personagensService.findByIdPersonagemService(
    idPersonagem,
  );
  res.send(chosenPersonagens);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;

  const newPersonagem = await personagensService.createPersonagemService(
    personagem,
  );
  res.send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idPersonagem = req.params.id;

  const editPersonagem = req.body;

  const updatedPersonagem = await personagensService.updatePersonagemService(
    idPersonagem,
    editPersonagem,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = async (req, res) => {
 
  const idPersonagem = req.params.id;

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
