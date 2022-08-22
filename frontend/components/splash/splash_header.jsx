import {faHouse, faUserGroup, faCircleUser, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

class SplashHeader extends React.Component {
    constructor(props) {
        super(props);
        this.searchContainer = this.searchContainer.bind(this);
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
                <Link to="/feed">
                    <div id="home-link">
                        <FontAwesomeIcon icon={faHouse} className="fa-header-link"></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to={`/users/${this.props.user.id}`}>
                    <div id="network-link">
                        <FontAwesomeIcon icon={faUserGroup} className="fa-header-link"></FontAwesomeIcon>
                        <p>My Network</p>
                    </div>
                </Link>
                <Link to="#">
                    <div id="profile-link" onClick={this.handleSignout}>
                        <FontAwesomeIcon icon={faCircleUser} className="fa-header-link"></FontAwesomeIcon>
                        <p>Me</p>
                    </div>
                </Link>
            </div>
        )
    }

    searchContainer() {
        return (
            <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-header-link"></FontAwesomeIcon>
                <input type="text" placeholder="Search"/>
            </div>
        )
    }

    render() {
        return (
            <div className="splash-header">
                
                <div className="splash-header-contents">
                    <div id="splash-header-left">
                        <Link to={this.props.loggedIn ? "/feed" : "/"} 
                        className="header-logo">
                            <FontAwesomeIcon icon={faHouse} className="fa-header-link"></FontAwesomeIcon>
                        </Link>
                        {this.props.loggedIn ? this.searchContainer() : ""}
                    </div>

                    <div id="splash-header-right">
                        {this.props.loggedIn ? this.signinLinks() : this.signoutLinks()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashHeader;