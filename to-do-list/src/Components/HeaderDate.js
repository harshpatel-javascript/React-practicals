import React from "react";
import "./headerDate.css";
function HeaderDate() {
  const date = new Date();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const weekday = date.toLocaleString("en-us", { weekday: "long" });
  return (
    <div className="header">
      <div className="header__date">
        <div className="header__date-day">{day}</div>
        <div>
          <div className="header__date-month">{month.toUpperCase()}</div>
          <div className="header__date-year">{year}</div>
        </div>
      </div>
      <div className="header__weekday">{weekday.toUpperCase()}</div>
    </div>
  );
}

export default HeaderDate;
