import { Link } from 'react-router-dom';
import React from 'react';

class SplashHeader extends React.Component {
    constructor(props) {
        super(props);
        this.signOutLinks = this.signOutLinks.bind(this);
        this.signInLinks = this.signInLinks.bind(this);
    }

    signOutLinks() {
        return (
            <div className="header-links">
                <Link to='/signup' className="signup-btn">Join now</Link>
                <Link to='/login' className="login-btn">Sign in</Link>
            </div>
        )
    }

    signInLinks() {
        return (
            <div className="header-links">
                <button onClick={this.props.logout}>Sign out</button>
            </div>
        )
    }

    render() {
        return (
            <div className="splash-header">
                <div className="header-logo"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FLinkedin-Free-PNG-Image.png&f=1&nofb=1" alt="" width="140px" height="100px"/></div>

                {this.props.loggedIn? this.signOutLinks() : this.signInLinks()}
            </div>
        )
    }
}

export default SplashHeader;