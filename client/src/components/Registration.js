import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setErrors({ confirmPassword: { message: "Password must Match" } });
      return;
    }

    axios
      .post("http://localhost:8000/api/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate("/addBook");
      })
      .catch((err) => {
        // console.log(err.response.data.errors);
        console.log(err);
        setErrors(err.response.data.errors || {});
      }, []);
  };

  return (
    <div className="body1">
      <div>
        <Link to={"/"} className="btn btn-primary">
          <span>Home</span>
        </Link>
      </div>

      <form onSubmit={onRegister} className="form1">
        <div className="row">
          <div className="input col ">
            {errors.firstName && (
              <span className=" text-center text-danger">
                {errors.firstName.message}
              </span>
            )}
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              className="input1  form-control"
              placeholder="First name"
            />

            {errors.lastName && (
              <span className=" text-center text-danger">
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

            {errors.email && (
              <span className=" text-center text-danger">
                {errors.email.message}
              </span>
            )}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              className="input6 form-control"
              placeholder="Email"
            />

            {errors.password && (
              <span className=" text-center text-danger">
                {errors.password.message}
              </span>
            )}
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="input7 form-control"
              placeholder="Password"
              autoComplete="off"
            />

            {errors.confirmPassword && (
              <span className=" text-center text-danger">
                {errors.confirmPassword.message}
              </span>
            )}
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              className="input7  form-control"
              placeholder="Confrim Password"
              autoComplete="off"
            />

            <button className="register btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
