import {faHouse, faUserGroup, faCircleUser, faMagnifyingGlass, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import SearchResultsIndexContainer from '../search/search_results_index_container';
import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';

class SplashHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_input : '',
            searching: false,
        };
        this.searchContainer = this.searchContainer.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.handleSignout = this.handleSignout.bind(this);
        this.signoutLinks = this.signoutLinks.bind(this);
        this.signinLinks = this.signinLinks.bind(this);
        this.update = this.update.bind(this);
    }

    toggleSearch() {
        this.setState({searching: !this.state.searching});
        const searchContainer = document.querySelector('.search-container')
        if (this.state.searching) {
            searchContainer.classList.remove('searching');
        } else {
            searchContainer.classList.add('searching');
        }
    }

    update(e) {
        console.log(this.state.search_input);
        this.setState({search_input: e.target.value});
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
                <Link to="/network">
                    <div id="home-link">
                        <FontAwesomeIcon icon={faUserGroup} className="fa-header-link"></FontAwesomeIcon>
                        <p>My Network</p>
                    </div>
                </Link>
                <Link to={`/users/${this.props.user.id}`}>
                    <div id="profile-link">
                        <FontAwesomeIcon icon={faCircleUser} className="fa-header-link"></FontAwesomeIcon>
                        <p>My Profile</p>
                    </div>
                </Link>
                <Link to="#">
                    <div id="profile-link" onClick={this.handleSignout}>
                        <FontAwesomeIcon icon={faRightFromBracket} className="fa-header-link"></FontAwesomeIcon>
                        <p>Sign out</p>
                    </div>
                </Link>
            </div>
        )
    }

    searchContainer() {
        return (
            <div>
                {this.state.searching ? <div id="search-overlay" onClick={() => this.toggleSearch()}></div> : ""}
                <div className="search-container" onClick={() => this.toggleSearch()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-header-link"></FontAwesomeIcon>
                    <input type="text" placeholder="Search" onChange={this.update}/>
                </div>
                {this.state.searching ? <SearchResultsIndexContainer searchInput={this.state.search_input} toggleSearch={() => this.toggleSearch()} /> : ""}
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
                            <FontAwesomeIcon icon={faLinkedin} className="fa-header-link" id="fa-linkedin"></FontAwesomeIcon>
                        </Link>
                        {this.props.loggedIn ? this.searchContainer() : ""}
                    </div>

                    <div id="splash-header-right-links">
                        {this.props.loggedIn ? this.signinLinks() : this.signoutLinks()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashHeader;