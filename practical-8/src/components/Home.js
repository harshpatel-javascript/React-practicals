import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../css/Home.css";
import { logOut } from "../redux/action";

const Home = () => {
  const { fileUrl, name, email, phone } = useSelector(
    (state) => state.userData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutClickHandler = () => {
    dispatch(logOut());
    navigate("/signup");
  };

  return (
    <div className="container">
      <nav className="navbar">
        <li>
          <h2>Home Component</h2>
        </li>
        <li>
          <button className="logout-btn" onClick={logOutClickHandler}>
            Logout
          </button>
        </li>
      </nav>
      <div className="home-container">
        <div className="img-container">
          <img src={fileUrl} alt="Uploaded file" />
        </div>
        <div className="data-container">
          Hello <span>{name}</span>,<br /> you are registered with the email-
          <span>{email}</span> and <br />
          phone number -<span>{phone}</span> ” and you can logout from top right
          button.
        </div>
      </div>
    </div>
  );
};

export default Home;
