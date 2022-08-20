import {faHouse, faUserGroup, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

class SplashHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignout = this.handleSignout.bind(this);
        this.signoutLinks = this.signoutLinks.bind(this);
        this.signinLinks = this.signinLinks.bind(this);
    }

    signoutLinks() {
        return (
            <div className="header-links">
                <Link to='/signup' className="signup-btn">Join now</Link>
                <Link to='/login' className="login-btn">Sign in</Link>
            </div>
        )
    }

    handleSignout() {
        this.props.history.push('/');
        this.props.logout();
    }

    signinLinks() {
        return (
            <div className="header-links">
                <div id="home-link">
                    <Link to="#"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>
                    <p>Home</p>
                </div>
                <div id="network-link">
                    <Link to="#"><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon></Link>
                    <p>My Network</p>
                </div>
                <div id="profile-link">
                    <FontAwesomeIcon className="signout-btn" onClick={this.handleSignout} icon={faCircleUser}></FontAwesomeIcon>
                    <p>Sign Out</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="splash-header">
                
                <Link to={this.props.loggedIn ? "/feed" : "/"} 
                className="header-logo">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FLinkedin-Free-PNG-Image.png&f=1&nofb=1" alt="" width="140px" height="100px"/>
                </Link>

                {this.props.loggedIn ? this.signinLinks() : this.signoutLinks()}
            </div>
        )
    }
}

export default SplashHeader;