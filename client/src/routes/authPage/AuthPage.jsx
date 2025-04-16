import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../components/image/Images";
import "./authPage.css";
import apiRequest from "../../utils/apiRequest";
import useAuthStore  from "../../utils/authStore";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {setCurrentUser} = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    //console.log(data);

    try {
      const response = await apiRequest.post(
        `/users/auth/${isRegister ? "register" : "login"}`,
        data
      );

      setCurrentUser(response.data)
      //console.log(response.data);
      navigate("/");

      //console.log(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt="" w={36} h={36} />
        <h1>{isRegister ? "Create an account" : "Login to your account"}</h1>
        {isRegister ? (
          <form action="" key="RegisterForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="userName">Username</label>
              <input
                type="userName"
                placeholder="UserName"
                required
                name="username"
                id="username"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input
                type="displayName"
                placeholder="Name"
                required
                name="displayName"
                id="displayName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
              />
            </div>
            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form action="" key="LoginForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
              />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don&apos;t have an account? <b>Register</b>
            </p>

            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
