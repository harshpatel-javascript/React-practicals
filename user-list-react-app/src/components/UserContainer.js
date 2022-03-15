import React from "react";

import "../css/UserList.css";
import { userData } from "./userData";
import Card from "./Card";
import UserList from "./UserList";
import Header from "./Header";

function UserContainer() {
  return (
    <>
      <div className="user-container">
        <Header />
        {userData.map((data) => (
          <UserList data={data} key={data.id} />
        ))}
      </div>
      <Card />
    </>
  );
}

export default UserContainer;
