import { Redirect, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from 'react';

const Auth = ({path, component: Component, exact, loggedIn}) => (
    <Route 
        path={path} exact={exact}
        render={props => loggedIn ? <Redirect to="/feed" /> : <Component {...props} />}>
    </Route>
);

const Protected = ({path, component: Component, exact, loggedIn}) => (
    <Route path={path} exact={exact} 
    render={props => loggedIn ? <Component {...props}/> : <Redirect to="/" />}>
    </Route>
)

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id),
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));