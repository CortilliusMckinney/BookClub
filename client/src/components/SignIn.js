import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import books from './Users/cortilliusmckinney/Desktop/CodingDojo2/BookStore/client/src/components/books.jpg'
// import bookImage from "./images/books.jpg";

const Registration = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
  
    navigate("/addBook");
  };

  return (
    <div>

<div>
          <Link to={"/signup"} className="signUp btn btn-primary">
            
              <span>Sign Up</span>
            
          </Link>
        </div>
      <form className="signInForm">
        

        <div className="middleDiv col">
          {/* <div>
            <img
              src={bookImage}
              alt=""
              className="img-fluid rounded-top rounded-bottom"
            />
          </div>
          <div><img src= {bookImage} alt="" className="img-fluid rounded-top rounded-bottom"/></div> */}
          <input
            type="text"
            name="email"
            className="input6 form-control"
            placeholder="Email"
          />
          <input
            type="password"
            className="input7 form-control"
            placeholder="Password"
          />
          <i className="ni ni-air-baloon"></i>

          <button onClick={handleSignIn} className="button2 btn btn-primary">
            Sign-In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
