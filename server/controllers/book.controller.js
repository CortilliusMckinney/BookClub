const Book = require("../models/book.model");

(module.exports.getAllBooks = (req, res) => {
  Book.find()
    .then((allBooks) => {
      // console.log(allBooks);
      res.json( allBooks );
    })
    .catch((err) => {
      console.log(res);
      // res.status(400).json(err);
    });
}),

  (module.exports.createBook = (req, res) => {
    console.log(req.body); //Debug console.log
    Book.create(req.body)
      .then((addOneBook) => {
        res.json( addOneBook );
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

module.exports.getOneBook = (req, res) => {
  //   console.log(req.body); //Debug console.log
  Book.findOne({ _id: req.params.id })
    .then((e) => res.json(e))
    .catch((err) => {
      console.log(err);
      // res.status(400).json(err);
    });
};

module.exports.deleteOneBook = (req, res) => {
  console.log(req.body); //Debug console.log
  // console.log("new paramsID", req.params.id);
  Book.deleteOne({ _id: req.params.id })
    .then((e) => res.json(e))
    .catch((err) => {
      console.log(err);
      // res.status(400).json(err);
    });
};

module.exports.updateBook = (req, res) => {
  console.log(req.body)
  Book.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })

    .then((updatedBook) => {
      res.json( updatedBook );
    })
    .catch((err) => {
      console.log(err);
      // res.status(400).json(err);
    });
};





// module.exports.updateBook = (req, res) => {
//   Book.findByIdAndUpdate(
//     req.description
//     ,
//     { $inc: { ["book" + req.params.book]: 1 } },
//     { runValidators: true }
//   )
//     .then((updatedBook) => {
//       res.json({ book: updatedBook });
//     })
//     .catch((err) => {
//       console.log(err);
//       // res.status(400).json(err);
//     });







// };
