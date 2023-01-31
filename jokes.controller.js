const Joke = require('../models/jokes.model');

module.exports.all = (req, res) => {
  Joke.find()
    .then((jokes) => res.json({ jokes: jokes }))
    .catch((error) => res.json({ message: "Something went wrong when fetch all jokes", error: error }));
};

module.exports.find = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((joke) => res.json({ joke: joke }))
    .catch((error) => res.json({ message: "Something went wrong then find a joke", error: error }));
};

module.exports.create = (req, res) => {
  Joke.create(req.body)
    .then((joke) => res.json({ joke: joke }))
    .catch((error) => res.json({ message: "Something went wrong when create joke", error: error }));
};

module.exports.update = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((joke) => res.json({ joke: joke }))
    .catch((error) => res.json({ message: "Something went wrong when update joke", error: error }));
};

module.exports.delete = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((error) => res.json({ message: "Something went wrong when delete joke", error: error }));
};

module.exports.random = (req, res) => {

  Joke.count().exec((err, count) => {
    const random = Math.floor(Math.random() * count);
    Joke.findOne().skip(random)
      .then((joke) => res.json({ joke: joke }))
      .catch((error) => res.json({ message: "Something went wrong when fetch random joke", error: error }));
  })
};