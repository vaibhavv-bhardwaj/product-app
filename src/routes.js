import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { history } from "./managers/history";
import Login from './modules/login'
import Dashboard from "./modules/dashboard";
import { Component } from "react";

class Routes extends Component {
    componentDidMount() {
    }

    render() {
        return (
            // <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Router history={history}>
                <Switch>
                    <Route exact path={"/"} component={Login} />
                    <Route exact path={"/dashboard"} component={Dashboard} />
                    <Redirect exact from="*" to="/" />
                </Switch>
            </Router>
            // </MuiThemeProvider>
        );
    }
}

// const mapStateToProps = (state) => {
//     return { user: state.user };
// };

export default Routes
