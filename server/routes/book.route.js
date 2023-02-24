const BookController = require("../controllers/book.controller"); //Imports controller

const routes = (app) => {
  app.get("/api/getAllBooks", BookController.getAllBooks);
  app.get("/api/getOneBook/:id", BookController.getOneBook);
  app.post("/api/createBook", BookController.createBook);
  // app.put("/api/book/:id", BookController.updateBook);
  app.put("/api/update/:id/books", BookController.updateBook);
  app.delete("/api/deleteOneBook/:id", BookController.deleteOneBook);
};

module.exports = routes;
