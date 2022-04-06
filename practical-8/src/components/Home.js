import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../css/Home.css";
import { logOut } from "../redux/action";
function Home() {
  const { userData } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutClickHandler = () => {
    dispatch(logOut());
    navigate("/signup");
  };

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <li>
            <h2>Home Component</h2>
          </li>
          <li>
            <button className="btn" onClick={logOutClickHandler}>
              Logout
            </button>
          </li>
        </nav>
        <div className="home-container">
          <div className="img-container">
            <img src={userData.fileUrl} alt="Uploaded file" />
          </div>
          <div className="data-container">
            Hello <span>{userData.name}</span>,<br /> you are registered with
            the email-
            <span>{userData.email}</span> and <br />
            phone number -<span>{userData.phone}</span> ” Along with a logout
            button on the top right.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
