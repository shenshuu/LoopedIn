import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import FeedContainer from './feed/feed_container';
import UserContainer from './users/user_container';
import NetworkContainer from './network/network_container';

const App = () => {

    return (
        <div>
            <Switch>
                <AuthRoute exact path='/' component={SplashContainer} />
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                <Route exact path='/feed' component={FeedContainer} />
                <Route exact path='/network' component={NetworkContainer} />
                <Route exact path='/users/:userId' component={UserContainer} />
            </Switch>
        </div>
    )
}
    

export default App;