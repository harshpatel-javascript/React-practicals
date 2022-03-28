import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/UserContainer.css";
import Card from "./Card";
import UserList from "./UserList";
import Pagination from "react-bootstrap/Pagination";
import { fetchUsers, handlePage } from "../redux/action";

function UserContainer() {
  const { loading, cardData, fetchedData, error, activePage } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(activePage));
  }, [dispatch, activePage]);
  //getting the detail for card as hovering
  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <>
      <div className="user-container">
        <div className="header">
          <div className="name">Name</div>
          <div className="status">Status</div>
          <div className="access">Access</div>
        </div>
        {fetchedData.map((data) => (
          <UserList data={data} key={data.id} />
        ))}
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item onClick={() => dispatch(handlePage(1))}>
            1
          </Pagination.Item>
          <Pagination.Item onClick={() => dispatch(handlePage(2))}>
            2
          </Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </div>
      {/* card data */}
      {cardData && <Card data={cardData} />}
    </>
  );
}

export default UserContainer;
