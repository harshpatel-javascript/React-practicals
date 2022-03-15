import React from "react";
import { userData } from "./userData";
import "../css/Card.css";
function Card() {
  return (
    <div className="card-container">
      <div>
        <img src={userData[0].avatar} alt="" className="img" />
      </div>
      <div className="name">{userData[0].name}</div>
      <div className="email">{userData[0].email}</div>
      <div className="plan">Your Plan : {userData[0].plan}</div>
      <div>
        <button className="btn">{userData[0].status} user</button>
      </div>
      <div className="progress-bar">
        <p>Plan uses</p>
        <progress value="32" max="100" />
      </div>
      <div className="reviews">
        <div className="click-reviews">
          2450
          <div className="text">clicks reviewed</div>
        </div>
        <div className="monthly-clicked">
          5000
          <div className="text">Monthly Clicked</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
