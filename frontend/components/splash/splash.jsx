import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import SplashNav from '../nav/splash_nav';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        document.querySelector('body').style.backgroundColor = 'white';
    }

    render() {
        return (
            <div className="homepage">
                <div>
                    <SplashNav />
                    <div className="homepage-body">
                        <div className="homepage-left-container">
                            <h1 className="homepage-slogan">Welcome to your professional community</h1>
                            <SessionFormContainer className="homepage-login-form"/>
                        </div>
                        <img className="homepage-img" src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="homepage-img" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;