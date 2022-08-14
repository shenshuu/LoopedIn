import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.userProfile = this.userProfile.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    userProfile() {
        return (
            <div>
                {`${this.props.user.email}'s Profile`}
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }

    sessionLinks() {
        return (
            <div className="session-links">
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        )
    }

    render() {
        return this.props.user ? this.userProfile() : this.sessionLinks();
    }
}

export default Splash;