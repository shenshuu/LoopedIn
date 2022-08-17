import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HeaderContainer from './splash/header_container';
import Feed from './feed/feed';

const App = () => (
    <div>
        <HeaderContainer/>
        <Switch>
            <AuthRoute exact path='/' component={SplashContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <Route exact path='/feed' component={Feed} />
        </Switch>
    </div>
)

export default App;