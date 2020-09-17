import React, { useState, useEffect } from "react";
import UserService from "../../Services/UserService";
import {Link} from 'react-router-dom'
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");
  //const existingTokens = JSON.parse(localStorage.getItem("cookies"));
 // console.log(existingTokens);
  const retrieveUsers = () => {
    UserService.getAll()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveUsers();
  }, []);
  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  };
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchName}
            onChange={onChangeSearchName}
          />
          
        </div>
      </div>
      <div className="col-md-6">
        <h4>User List</h4>

        <ul className="list-group">
          {users &&
            users.map((user, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveUser(user, index)}
                key={index}
              >
                {user.ime}
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentUser ? (
          <div>
            <h4>Korisnik</h4>
            <div>
              <label>
                <strong>Ime:</strong>
              </label>
             
              {currentUser.ime}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentUser.korisnickoIme}
            </div>
           

            <Link
              to={"/korisnici/" + currentUser.korisnikId}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
