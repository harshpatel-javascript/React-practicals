import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import "../css/UserContainer.css";
import Card from "./Card";
import UserList from "./UserList";
import { fetchUsers, handlePage } from "../redux/action";

function UserContainer() {
  const { loading, cardData, fetchedData, error, activePage, totalPage } =
    useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("active page " + activePage);
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
        <ReactPaginate
          previousLabel={"pre"}
          nextLabel={"next"}
          pageCount={totalPage}
          onPageChange={(e) => dispatch(handlePage(e.selected + 1))}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
      {/* card data */}
      {cardData && <Card data={cardData} />}
    </>
  );
}

export default UserContainer;
