const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Your First Name is Required"],
      minLength: [2, "Your First Name must be at-least Two Characters"],
    },

    lastName: {
      type: String,
      required: [true, "Your Last Name is Required"],
      minLength: [2, "Your Last Name must be at-least Two Characters"],
    },


    title: {
      type: String,
      required: [true, "Title is Required"],
    },

    description: {
      type: String,
      required: [true, "Description is Required"],
      minLength: [5, "The Description must be at-least 5 Character long"],
    },

    img: {
      type: String,
      required: [true, "Image is Required"],
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref:"users"

    },
  },
  { timestamps: true }
);

const Book = mongoose.model("books", BookSchema);
module.exports = Book;
