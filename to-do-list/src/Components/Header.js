import React from "react";
import "./Header.css";
function HeaderDate() {
  const date = new Date();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const weekday = date.toLocaleString("en-us", { weekday: "long" });
  //adding the date into localstorage
  // useEffect(() => {
  //   const date = new Date();
  //   localStorage.setItem("date", JSON.stringify(date.getTime()));
  // }, []);
  localStorage.setItem("date", JSON.stringify(date.getTime()));
  return (
    <div className="header">
      <div className="date">
        <div className="day">{day}</div>
        <div>
          <div className="month">{month}</div>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="weekday">{weekday.toUpperCase()}</div>
    </div>
  );
}

export default HeaderDate;
