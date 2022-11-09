import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveData   } from "../../redux-store/action";
import "./Main.css";

function Main() {
  const userData = useSelector((state) => state.data);
  const dispatch = useDispatch();



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => response.json())
      .then((data) => dispatch(SaveData(data)));
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>User List</h1>

        <div className="row">
          {userData &&
            userData.length > 0 &&
            userData[0].map((userObj, index) => (
              <div key={index} className="card col-md-4 d-flex p-2 m-card">
                <li>
                  <span className="item"> ID:</span>
                  {userObj.id}
                </li>
                <li>
                  <span className="item">Username:</span>
                  {userObj.name}
                </li>
                <li>
                  <span className="item">Email:</span>
                  {userObj.email}
                </li>
                <li>
                  <span className="item">Body:</span>
                  {userObj.body}
                </li>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Main;
