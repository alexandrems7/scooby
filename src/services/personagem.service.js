
const Personagem = require('../models/Personagem');
const Personagens = require('../models/Personagem');

const findAllPersonagensService = async() => {
  const allPersonagens = await Personagens.find();
  return allPersonagens;
};

const findByIdPersonagemService = async (idPersonagem) => {

  const onePersonagem = await Personagens.findById(idPersonagem);
  return onePersonagem;
};

const createPersonagemService = async (newPersonagem) => {

const createdPersonagem = await Personagens.create(newPersonagem)
  return createdPersonagem;
};

const updatePersonagemService = async (idPersonagem, editedPersonagem) => {


  const upatePersonagem = await Personagens.findByIdAndUpdate(idPersonagem, editedPersonagem)
  return upatePersonagem;
};

const deletePersonagemService = async (idPersonagem) => {
  return await Personagens.findByIdAndDelete(idPersonagem);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
