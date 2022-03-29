import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/Card.css";

function Card({ data }) {
  const monthlyClicks = Math.floor(Math.random() * 5000);
  const clicksReviewed = Math.floor(Math.random() * 2000);
  const progressValue = (monthlyClicks + clicksReviewed) / 10;
  const { avatar, first_name, last_name, status, email } = data;
  return (
    <div className="card-container">
      <div>
        <img src={avatar} alt="user-avatar" className="img" />
      </div>
      <div className="name-flex">
        <div className="name">{first_name + " " + last_name}</div>
        <div className="online"></div>
      </div>
      <div className="email">{email}</div>
      <div className="plan">Your Plan: Standard</div>
      <div>
        <button className="btn">{status ? status : "Inactive"} user</button>
      </div>
      <div className="progress-container">
        <p>Plan Uses</p>
        <ProgressBar max={1000} now={progressValue} />
      </div>
      <div className="analysis">
        <div className="click-reviews">
          {clicksReviewed}
          <div className="text">clicks reviewed</div>
        </div>
        <div className="monthly-clicked">
          {monthlyClicks}
          <div className="text">Monthly Clicked</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
