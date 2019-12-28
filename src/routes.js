import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Main from "./pages/Main";
import Singin from "./pages/SignIn";
import Singup from "./pages/Signup";
import RegisterStation from "./pages/RegisterStation";
import UserListStations from "./pages/User/ListStations";

import AdminTools from "./pages/AdminTools";
import ListStations from "./pages/AdminTools/Stations";

import PageNotFound from "./pages/PageNotFound";

import { isAuthenticated } from "./services/auth";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={Singin} />
        <Route exact path="/signup" component={Singup} />
        <PrivateRoute
          exact
          path="/create-new-station"
          component={RegisterStation}
        />
        <PrivateRoute
          exact
          path="/contributions"
          component={UserListStations}
        />
        <PrivateRoute
          exact
          path="/profile"
          component={() => <h1>Profile</h1>}
        />
        <PrivateRoute exact path="/admin-tools" component={AdminTools} />
        <PrivateRoute
          exact
          path="/stations/list-stations"
          component={ListStations}
        />
        <Route path="*" component={PageNotFound} />>
      </Switch>
    </BrowserRouter>
  );
}
