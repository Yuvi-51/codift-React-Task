import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveData } from "../../redux-store/action";
import "./Main.css";

function Main() {
  // const [user, setUser] = useState([]);

  const mystore = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => response.json())
      .then((data) => dispatch(SaveData(data)));
  };

  useEffect(() => {
    fetchData();
    console.log(mystore);
  }, []);

  return (
    <>
      <div>
        <h1>User List</h1>

        <div className="row">
          {mystore &&
            mystore.length > 0 &&
            mystore[0].map((userObj, index) => (
              <div className="card col-md-4 d-flex p-2 m-card">
                <div className="card-body ">
                  <li key={userObj.id}>
                    <span className="item"> ID:</span>
                     {userObj.id}
                  </li>
                  <li key={userObj.id}>
                    <span className="item">Username:</span>
                     {userObj.name}
                  </li>
                  <li key={userObj.id}>
                    <span className="item">Email:</span>
                     {userObj.email}
                  </li>
                  <li key={userObj.id}>
                    <span className="item">Body:</span>
                     {userObj.body}
                  </li>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Main;
