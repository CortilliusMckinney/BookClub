const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bookDB", {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Book Store DB");
  })
  .catch((err) => {
    console.log(err);
  });
