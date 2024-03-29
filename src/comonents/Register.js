import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("https://full-stack-project1-1.onrender.com/api/register/", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        fullName: username,
        email: email,
        password: password,
        // mobile_no: mobileNo,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // Handle success response, for example, redirect to login page
        alert("Registration successful");
        <Login/>
        // navigate("/login");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  return (
    <>
      <div className="register-form">
        <form>
          <h1>Register</h1>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />
          <br />
          <label htmlFor="userEmail">Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="userEmail"
          />
          <br />
          <label htmlFor="userPassword">Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="userPassword"
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
          />
          <br />
          <label htmlFor="mobileNo">Mobile Number:</label>
          <br />
          <input
            type="text"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            id="mobileNo"
          />
          <br />
          <br />
          <button type="submit" onClick={(e) => handleRegister(e)}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
