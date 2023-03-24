import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SimpleDateTime from "react-simple-timestamp-to-date";
// import { format } from 'date-fns'

const BookDetailPage = () => {
  const [items, setItems] = useState([]);
  const [editText, setEditText] = useState("");
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOneBook/${id}`) //Make request
      .then((res) => {
        setItems(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (book) => {
    axios
      .put(`http://localhost:8000/api/update/${id}/books`, items)
      .then((res) => {
        console.log(res.data);
        navigate("/addBook/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/deleteOneBook/${id}`) //Make request
      .then((res) => {
        // console.log(res.data);
        navigate("/addBook");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="nav">
        <div className="bookCollection btn btn-primary btn-sm">
          <Link to={"/addBook"}>
            <span>Book Collection</span>
          </Link>
        </div>

        <div className="bookCollection btn btn-primary btn-sm">
          <Link to={"/displayBook/:id"}>
            <span>Not-User View Page</span>
          </Link>
        </div>
      </div>

      <div className="mainContainer card-group">
        <div className="card">
          <div className="card-body">
            {/* <h2 className="card-title">{items.title}</h2> */}

            <textarea
              className="editPageTitle card-title"
              value={items.title}
              onChange={(e) => setItems({ ...items, title: e.target.value })}
            ></textarea>

            <div className="bookIcon">
              <div className="mt-4">
                <img src={items.img} />
              </div>

              <p className=" card-text">
                Added By: {items.firstName} {items.lastName}
              </p>
              <p>
                Added on:
                <SimpleDateTime
                  dateFormat="MDY"
                  dateSeparator="/"
                  timeSeparator=":"
                  meridians="1"
                >
                  {items.createdAt}
                </SimpleDateTime>
                <br></br>
              </p>
              <p>
                Last Updated on:{" "}
                <SimpleDateTime
                  dateFormat="MDY"
                  dateSeparator="/"
                  timeSeparator=":"
                  meridians="1"
                >
                  {items.updatedAt}
                </SimpleDateTime>
              </p>
            </div>
            <div className="mainTextBox">
              <label>Edit Description:</label>
              <textarea
                className="editBox"
                value={items.description}
                onChange={(e) =>
                  setItems({ ...items, description: e.target.value })
                }
              >
                {items.description}
              </textarea>
            </div>

            <div className="update">
              <div
                onClick={handleUpdate}
                className="updateText btn btn-primary"
              >
                <Link to={"/addBook"}>
                  <span>Update</span>
                </Link>
              </div>

              <div
                onClick={handleDelete}
                className="updateText2 btn btn btn-danger"
              >
                <Link to={"/displayBook/:id"}>
                  <span className="deleteButton">Delete</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="leftCard card">
          <div className="card-body">
            <h2 className="likes card-title">Users Who Like This Book</h2>
            <div className="card-text">
              <h5 className="user mt-4">
                {items.firstName} {items.lastName}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

