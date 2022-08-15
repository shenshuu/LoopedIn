import React from 'react';
import SplashHeader from './splash_header';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.userProfile = this.userProfile.bind(this);
        this.homepage = this.homepage.bind(this);
    }

    userProfile() {
        return (
            <div>
                {`${this.props.user.email}'s Profile`}
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }

    homepage() {
        return (
            <div className="homepage-body">
                <h1 className="homepage-slogan">Welcome to your professional community</h1>
                <img className="homepage-img" src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="homepage-img" />
            </div>
        )
    }

    render() {
        return (
            <div>
                <SplashHeader />
                {this.homepage()}
            </div>
        )
    }
}

export default Splash;