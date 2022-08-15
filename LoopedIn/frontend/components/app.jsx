import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        LoopedIn
        <SplashContainer />
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
        </Switch>
    </div>
)

export default App;