import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/UserContainer.css";
import Card from "./Card";
import UserList from "./UserList";
import Header from "./Header";
import Pagination from "react-bootstrap/Pagination";
import { fetchUsers } from "../redux/action";

function UserContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  //getting the detail for card as hovering
  const { loading, cardData, definedData, error } = useSelector(
    (state) => state
  );
  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <>
      <div className="user-container">
        <Header />
        {definedData.map((data) => (
          <UserList data={data} key={data.id} />
        ))}
      </div>
      {/* card data */}
      {cardData && <Card data={cardData} />}
      <Pagination className="pagination">
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
    </>
  );
}

export default UserContainer;
