import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SimpleDateTime from "react-simple-timestamp-to-date";
// import { format } from 'date-fns'

const BookDetailPage = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOneBook/${id}`) //Make request
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{items.title}</h2>
            <div className="mt-4">
              {" "}
              <img src={items.img} />
            </div>

            <div>
              <p className="card-text">
                Added By: {items.firstName} {items.lastName}
              </p>
              <p>
                Added on:{" "}
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
              
              <p>{items.description}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
