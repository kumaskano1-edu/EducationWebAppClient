import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dashboard from "./my-pages/Dashboard/Dashboard";
import Authentication from "./my-pages/Authentication/Authentication";
import ProfileSettings from "./my-pages/ProfileSettings/ProfileSettings";
//import Register from "./my-pages/Authentication/snippets/Register";
import SubjectPage from "./my-pages/SubjectPage/SubjectPage";
import Tasks from "./my-pages/Tasks/Tasks";
import StatisticPage from "./my-pages/Statistics/Statistics";
import "./styles/navbar.css";
class Router extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={3000} classNames="fade">
              <Switch location={location}>
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
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/auth" />
      )
    }
  />
);

export default Router;
