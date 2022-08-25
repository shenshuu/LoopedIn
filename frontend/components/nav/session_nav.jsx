import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';

class SessionNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="splash-nav">
                
                <div className="splash-header-contents">
                    <div id="splash-header-left">
                        <Link to="/" className="header-logo">
                            <FontAwesomeIcon icon={faLinkedin} className="fa-header-link" id="fa-linkedin"></FontAwesomeIcon>
                        </Link>
                    </div>

                    <div id="splash-header-right">
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionNav;