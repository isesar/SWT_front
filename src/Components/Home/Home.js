import React from "react";
import UserList from "../Users/UserList";
import { Route, Switch,BrowserRouter,Link } from "react-router-dom";
import AddUser from "../Users/AddUser";
import User from '../Users/User';

const Home = () => {
  return (
    <BrowserRouter>
      <div>

      <nav className="navbar navbar-expand navbar-dark bg-dark">
     
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/korisnici"} className="nav-link">
            Korisnici
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Dodaj
          </Link>
        </li>
      </div>
    </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/korisnici"]} component={UserList} />
            <Route exact path="/add" component={AddUser} />
            <Route path="/korisnici/:id" component={User} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;
