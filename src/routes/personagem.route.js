const route = require('express').Router();
const controllerPersonagens = require('../controllers/personagem.controller');
const { validId, validObjectBody } = require('../middlewares/personagem.middlewares');

route.get('/all', controllerPersonagens.findAllPersonagensController);
route.get('/:id', validId, controllerPersonagens.findByIdPersonagemController);

route.post('/create', validObjectBody, controllerPersonagens.createPersonagemController);
route.put(
  '/update/:id',
  validId, validObjectBody,
  controllerPersonagens.updatePersonagemController,
);
route.delete(
  '/delete/:id',
  validId,
  controllerPersonagens.deletePersonagemController,
);

module.exports = route;
