
const User = require("../models/user.model");


(module.exports.register = (req, res) => {
    User.create(req.body)
      .then((newUser) => {
        // console.log(allBooks);
        // res.json( allBooks );
        res.sendStatus(201)
      })
      .catch((err) => {

        console.log(res);
        res.status(400).json(err);
      });
  })