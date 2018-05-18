const mongoose = require('mongoose');
const authors = require('../controllers/authors.js');

module.exports = (app) => {
    app.get('/authors', authors.index)
    app.post('/authors', authors.create)
    app.get('/authors/:id', authors.show)
    app.post('/authors/:id', authors.update)
    app.delete('/authors/:id', authors.destroy)

  
}