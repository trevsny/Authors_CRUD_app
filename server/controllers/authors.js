const mongoose = require('mongoose');
const Author = mongoose.model('Author')

module.exports = {
    index: (req, res) => {
        Author.find({}).sort({name: 'asc'}).exec((err, authors) => {
            if (err) {
                console.log(err);
            } else {
                
                res.json(authors);
            }
        });
    },
    create: (req, res) => {
        var author = new Author({name: req.body.name})
        console.log(req.body.name);
        author.save(err => {
            if (err) {
                //send error messages
                errors = [];
                for (e in err.errors){
                    errors.push(err.errors[e].message)
                }
                console.log(err);
                return res.json({'errors': errors})
            } else {
                console.log("Controllers", author)
                res.json(author);
            }
        })

    },
    show: (req, res) => {
        Author.findOne({_id:req.params.id}, (err, author) => {
            if (err) {
                console.log("Error", author)
            } else {
                console.log("Worked", author)
                res.json(author);
            }
        })
    },
    update: (req,res) => {
        Author.findOne({_id:req.params.id}, (err, author) => {
            author.name = req.body.name;
            author.save( err=> {
                if (err) {
                    console.log(err)
                } else {
                    console.log("COntr", author);
                    res.json(author);
                }
            })
        })
    },
    destroy: (req,res) => {
        Author.remove({_id:req.params.id}, (err, author) => {
            console.log("in callback in controllers");
            if (err) {
                console.log(err);
            } else {
                res.json(author);
            }
        })
    }
}