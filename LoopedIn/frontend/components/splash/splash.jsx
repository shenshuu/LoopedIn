import React from 'react';
import SplashHeader from './splash_header';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.userProfile = this.userProfile.bind(this);
    }

    userProfile() {
        return (
            <div>
                {`${this.props.user.email}'s Profile`}
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <SplashHeader />
            </div>
        )
    }
}

export default Splash;