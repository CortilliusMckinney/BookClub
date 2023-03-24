const mongoose = require("mongoose");




const UserSchema = new mongoose.Schema(
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

    email: {
      type: String,
      // set: toLower,
      // $toLower: "$email",
      required: [true, "Your Email is required"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },

    password: {
      type: String,
      required: [true, "Your password is required"],
      minLength: [8, "Your Password must be at least 8 Character"],
    },

    // confirmPassword: {
    //   type: String,
    //   required: [true, "Your password is required"],
    //   minLength: [8, "Your Password must be at least 8 Character"],
    // },

    // title: {
    //   type: String,
    //   required: [true, "A Title is Required"],
    // },

    // description: {
    //   type: String,
    //   required: [true, " A Description is required"],
    //   minLength: [5, "The Description must be at-least 5 Character long"],
    // },

    // img:
    // {
    //   type: String,
    
        
    // },

    // favorite:{
    // type: Boolean,
    // default: true,
     
    // }
    
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
module.exports = User;
