import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/Card.css";

function Card({ data }) {
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
      <div className="plan">Your Plan: {data.plan}</div>
      <div>
        <button className="btn">{data.status} user</button>
      </div>
      <div className="progress-container">
        <p>Plan Uses</p>
        <ProgressBar now={data.progressValue} />
      </div>
      {/* class name */}
      <div className="analysis">
        <div className="click-reviews">
          {data.reviewed}
          <div className="text">clicks reviewed</div>
        </div>
        <div className="monthly-clicked">
          {data.clicks}
          <div className="text">Monthly Clicked</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
