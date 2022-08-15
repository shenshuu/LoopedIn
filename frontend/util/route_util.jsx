import { Redirect, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from 'react';

const AuthRoute = ({path, component: Component, exact, loggedIn}) => (
    <Route 
        path={path}
        exact={exact}
        render={props => !loggedIn ? <Component {...props}/> : <Redirect to="/" />}
    ></Route>
);

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id),
});

export default withRouter(connect(mapStateToProps, null)(AuthRoute));