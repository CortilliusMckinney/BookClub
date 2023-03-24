const UserController = require("../controllers/user.controller"); //Imports controller

const routes = (app) => {

  app.post("/api/register", UserController.register);

};

module.exports = routes;
