const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bookclubuser:BookClub2024@cluster0.9ww1cvt.mongodb.net/bookDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Book Store DB (MongoDB Atlas)");
  })
  .catch((err) => {
    console.log(err);
  });