import React,{useState} from "react";
import UserList from "../Users/UserList";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import AddUser from "../Users/AddUser";
import User from '../Users/User';
import Navigation  from '../Navigation/Navigation';
import Login from '../Auth/Login/Login'
import CompanyList from "../Company/CompanyList";
const Home = () => {
  //const [title, updateTitle] = useState(null);
 // const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <div>
    <BrowserRouter>
     
    <Navigation/>      
        <div className="container mt-3">
          <Switch>
          
          <Route path={["/","login"]} exact={true}>
  {/*<Login showError={updateErrorMessage} updateTitle={updateTitle}/>*/}
            </Route>
            <Route exact path={"/korisnici"} component={UserList} />
            <Route exact path="/add" component={AddUser} />
            <Route path="/korisnici/:id" component={User} />
            <Route exact path={"/firma"} component={CompanyList} />
          </Switch>
        </div>
  
    </BrowserRouter>
    </div>
  );
};

export default Home;
