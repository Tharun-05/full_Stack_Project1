import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function IsLogin(e) {
    e.preventDefault();
    fetch("https://full-stack-project1-1.onrender.com/api/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.message === "Invalid user" || data.password === "Invalid password") {
          props.IsLoggedInMethod(false);
          alert("Invalid credentials");
        } else {
          navigate("/");
          props.IsLoggedInMethod(true);
        }
        accessToken = data.accessToken;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  return (
    <>
      <div className="login-form">
        <form>
          <h1>Please Login</h1>
          <label htmlFor="userEmail">Email:</label>
          <br />
          <input type="email"
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}id="userEmail"></input>
          <br />
          <label htmlFor="userPassword">Password:</label>
          <br />
          <input type="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}id="userPassword"></input>
          <br />
          <br />
          <button type="submit" onClick={(e) => IsLogin(e)}>
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
