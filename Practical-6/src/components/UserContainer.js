import React from "react";
import { useSelector } from "react-redux";

import "../css/UserContainer.css";
import Card from "./Card";
import UserList from "./UserList";
import Header from "./Header";

function UserContainer() {
  //getting the detail for card as hovering
  const { definedData, cardData } = useSelector((state) => state);
  return (
    <>
      <div className="user-container">
        <Header />
        {definedData.map((data) => (
          <UserList data={data} key={data.id} />
        ))}
      </div>
      {/* card data */}
      {cardData && <Card data={cardData} />}
    </>
  );
}

export default UserContainer;
