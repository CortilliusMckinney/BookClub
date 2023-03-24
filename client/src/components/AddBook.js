import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import FileBase64 from "react-file-base64";
import AddFavorite from "./AddFavorite";

import bookImage from "./images/PngItem278187.png";

const AddBook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  // const [favorite, setFavorite] = useState("");

  const [errors, setErrors] = useState({});

  const [items, setItems] = useState([]);
  const { id } = useParams();

  const addItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/createBook", {
        firstName,
        lastName,
        title,
        description,
        img,
        // favorite,
      })
      .then((res) => {
        console.log(res);
        addItem(res.data);
        setFirstName("");
        setLastName("");
        setDescription("");
        setImg("");
        setTitle("");
        // setFavorite("")
        // setFavorite(res.data.poll)
        // navigate("/");
      })
      .catch((err) => {
        // console.log(err.response.data.errors);
        console.log(err);
        setErrors(err.response.data.errors || {});
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllBooks") //Make request
      .then((res) => {
        setItems(res.data);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <header>
        <div className="home btn btn-primary btn-sm">
          <Link to={"/"}>
            <span>Log Out</span>
          </Link>
        </div>
      </header>

      {/* <div className="topDiv navbar navbar-dark">
        <div className="card-body">
          
        </div>
      </div> */}

      <div className="bookTitle ">
        <div>
          <h4 className="welcome card-title">Welcome</h4>
          <br></br>
          <h4 className="welcome2 card-title">To</h4>
          <div className=" addBookImg img-fluid" alt="Responsive image">
            <img
              src={bookImage}
              alt=""
              className="img-fluid rounded-top rounded-bottom"
            />
          </div>

          <span className="bookLetter">Book Club</span>

          <form onSubmit={handleAdd} className="form">
            <div className="row">
              <div className="inputs col ">
                <h3 className="favBook">Add Your Favorite Book</h3>

                {errors.firstName && (
                  <span className="text-center text-danger">
                    {errors.firstName.message}
                  </span>
                )}
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  type="text"
                  className="input1 form-control"
                  placeholder="First name"
                />

                {errors.lastName && (
                  <span className="error text-center text-danger">
                    {errors.lastName.message}
                  </span>
                )}
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  type="text"
                  className="input2 form-control"
                  placeholder="Last name"
                />

                {errors.title && (
                  <span className=" text-center text-danger">
                    {errors.title.message}
                  </span>
                )}

                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  className="input1 form-control"
                  placeholder="Book Title"
                />

                {errors.description && (
                  <span className=" text-center text-danger">
                    {errors.description.message}
                  </span>
                )}
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="text"
                  className="input2 form-control"
                  placeholder="Book Description"
                />

                {errors.img && (
                  <span className=" text-center text-danger">
                    {errors.img.message}
                  </span>
                )}
                <input
                  onChange={(e) => setImg(e.target.value)}
                  value={img}
                  type="text"
                  className="input2 form-control"
                  placeholder="Book Image Address"
                />
                <FileBase64
                  className
                  base
                  multiple={false}
                  onDone={({ base64 }) => setImg(base64)}
                />

                <button className="addBook btn btn-primary">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="designSpacer"></div>

      <div className="bottomDiv  deck">
        {items.map((item, index) => {
          return (
            <div className="card" key={item._id}>
              <div className="header card-header">
                <Link to={`/editPage/${item._id}`}>
                  <h6 className="title">{item.title}</h6>
                </Link>
              </div>
              <div className="card-deck image1" key={item._id}>
                <div className="card-body">
                  <img className=" card-img" src={item.img} />

                  <p className="addedBy">
                    Added By: <br></br>
                    {item.firstName} {item.lastName}
                  </p>
                  {/* <AddFavorite/> */}
                </div>
              </div>

              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddBook;
