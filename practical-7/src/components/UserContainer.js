import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import "../css/UserContainer.css";
import Card from "./Card";
import UserList from "./UserList";
import { fetchUsers } from "../redux/action";

function UserContainer() {
  const { loading, cardData, fetchedData, error, totalPage } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if (loading) <h2>Loading</h2>;
  if (error) <h2>{error}</h2>;

  //getting the detail for card as hovering
  return (
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
          previousLabel={<>&laquo;</>}
          nextLabel={<>&raquo;</>}
          pageCount={totalPage}
          onPageChange={(e) => dispatch(fetchUsers(e.selected + 1))}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
      {/* card data */}
      {cardData && <Card data={cardData} />}
    </>
  );
}

export default UserContainer;
