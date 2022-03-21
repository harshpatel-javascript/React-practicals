import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/Card.css";

function Card({ data }) {
  const monthlyClicks = Math.floor(Math.random() * 5000);
  const clicksReviewed = Math.floor(Math.random() * 2000);
  const progressValue = (monthlyClicks + clicksReviewed) / 10;

  return (
    <div className="card-container">
      <div>
        <img src={data.avatar} alt="user-avatar" className="img" />
      </div>
      <div className="name-flex">
        <div className="name">{data.name}</div>
        <div className="online"></div>
      </div>
      <div className="email">{data.email}</div>
      <div className="plan">Your Plan: Standard</div>
      <div>
        <button className="btn">{data.status} user</button>
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
