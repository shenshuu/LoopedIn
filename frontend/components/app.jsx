import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import FeedContainer from './feed/feed_container';
import UserContainer from './users/user_container';
import NetworkContainer from './network/network_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

    return (
        <div>
            <Switch>
                <AuthRoute exact path='/' component={SplashContainer} />
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                <ProtectedRoute exact path='/feed' component={FeedContainer} />
                <ProtectedRoute exact path='/network' component={NetworkContainer} />
                <ProtectedRoute exact path='/users/:userId' component={UserContainer} />
            </Switch>
        </div>
    )
}
    

export default App;