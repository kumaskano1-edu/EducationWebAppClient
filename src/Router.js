import React from "react";
import Cookies from "js-cookie";

import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./my-pages/Dashboard";
import Authentication from "./my-pages/Authentication";
import ProfileSettings from "./my-pages/ProfileSettings";
import Register from "./snippets/authentication/Register";
import SubjectPage from "./my-pages/SubjectPage";
import Tasks from "./my-pages/Tasks";

import StatisticPage from "./my-pages/Statistics";

class Router extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route exact path="/auth" component={Authentication} />
        <PrivateRoute path="/tasks" component={Tasks} />
        <PrivateRoute path="/subject" component={SubjectPage} />
        <PrivateRoute path="/statistics" component={StatisticPage} />
        <PrivateRoute path="/profile" component={ProfileSettings} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !Cookies.get("token") ? <Redirect to="/auth" /> : <Component {...props} />
    }
  />
);

export default Router;
