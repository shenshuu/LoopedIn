// import { AccountCircle } from '@mui/icons-material';
import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import {faGem, faDatabase, faBriefcase, faCircleUser} from '@fortawesome/free-solid-svg-icons';
// import { faSquareUser } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

class Widgets extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="widgets">
                <div className="widgets-top">
                    <div className="widgets-top-a">
                        <div className="widgets-developer-header">
                            <div className="profile-pic">
                                {/* <AccountCircle /> */}
                                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
                            </div>
                            <p className="widgets-headline">About the developer</p>
                        </div>
                        <p className="widgets-para">
                            Michael Shen is a full stack
                            software engineer who's proficient 
                            in JavaScript, Ruby, React, Redux, 
                            and Ruby on Rails. He's currently 
                            looking for opportunities to learn 
                            and sharpen his skill set as a software engineer.
                        </p>
                    </div>
                    <div className="widgets-top-b">
                        <p className="widgets-headline">Connect with the developer</p>
                        <div className="widget-links">
                            <div className="fa-container">
                                <a href="https://github.com/shenshuu" className="fa">
                                    <FontAwesomeIcon icon={faSquareGithub} className="font-awesome-icon" id="fa-github"></FontAwesomeIcon>
                                </a>
                                <p>Github</p>
                            </div>
                            <div className="fa-container">
                                <a href="https://www.linkedin.com/in/michael-s-b7698b239/" className="fa">
                                    <FontAwesomeIcon icon={faLinkedin} className="font-awesome-icon" id="fa-linkedin"></FontAwesomeIcon>
                                </a>
                                <p>LinkedIn</p>
                            </div>
                            <div className="fa-container">
                                <a href="#" className="fa">
                                    <FontAwesomeIcon icon={faBriefcase} className="font-awesome-icon" id="fa-briefcase"></FontAwesomeIcon>
                                </a>
                                <p>Portfolio</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widgets-bottom">
                    <div className="project-description">
                        <p className="widgets-headline">Purpose</p>
                        <p className="widgets-para">
                            The purpose of this 
                            project is to improve one's knowledge of 
                            how different technologies interact with 
                            each other and how they can be wielded 
                            to create something greater than the sum of its parts.
                        </p>
                    </div>
                    <div className="technologies-used">
                        <p className="widgets-headline">Technologies Implemented</p>
                        <div className="technology">
                            <div className="technology-a">
                                <FontAwesomeIcon icon={faReact} className="font-awesome-icon-a" id="fa-react"></FontAwesomeIcon>
                                <p className="tech-role">Frontend:</p>
                            </div>
                            <p className="tech-stack">React, Redux</p>
                        </div>
                        <div className="technology">
                            <div className="technology-a">
                                <FontAwesomeIcon icon={faGem} className="font-awesome-icon-a" id="fa-ruby"></FontAwesomeIcon>
                                <p className="tech-role">Backend:</p>
                            </div>
                            <p className="tech-stack">Ruby on Rails</p>
                        </div>
                        <div className="technology">
                            <div className="technology-a">
                                <FontAwesomeIcon icon={faDatabase} className="font-awesome-icon-a" id="fa-postgresql"></FontAwesomeIcon>
                                <p className="tech-role">Database:</p>
                            </div>
                            <p className="tech-stack">PostgreSQL</p>
                        </div>
                        {/* <div className="technology">
                            <p className="tech-role">Other:</p>
                            <p>jQuery, JBuilder, HTML, CSS</p>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Widgets;