import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./components/users";
import NavBar from "./components/navBar";
import Main from "./components/main";

function App() {
  return (
      <div className="d-flex flex-column">
        <NavBar></NavBar>
        <Switch>
            <Route path="/users/:userId?/:edit?" component={Users} />
            <Route path="/main" component={Main} />
            <Redirect exact from="/" to="/main" />
        </Switch>
    </div>
  );
}

export default App;

            // <Route path="/logout" component={LogOut} /> */