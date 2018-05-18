const mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength:[3,"Must be at least three characters"]}
})

mongoose.model('Author', AuthorSchema);

