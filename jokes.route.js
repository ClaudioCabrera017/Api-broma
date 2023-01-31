const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
  app.get('/api/jokes', JokeController.all);
  app.get('/api/jokes/random', JokeController.random);
  app.post('/api/jokes/new', JokeController.create);
  app.get('/api/jokes/:id', JokeController.find);
  app.put('/api/jokes/update/:id', JokeController.update);
  app.delete('/api/jokes/delete/:id', JokeController.delete);
};