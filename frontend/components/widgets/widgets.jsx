import { AccountCircle } from '@mui/icons-material';
import React from 'react';

class Widgets extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="widgets">
                <div className="widgets-top">
                    <h5>About the developer</h5>
                    <div className="profile-pic">
                        <AccountCircle />
                    </div>
                    <p>
                        Michael Shen is a full stack
                        software engineer who's proficient 
                        in JavaScript, Ruby, React, Redux, 
                        and Ruby on Rails. He's currently 
                        looking for opportunities to learn 
                        and sharper his skill set as an engineer
                    </p>
                    <h5>Connect with the developer</h5>
                    <div className="widget-links">
                        <AccountCircle />
                        <AccountCircle />
                        <AccountCircle />
                    </div>
                </div>

                <div className="widgets-bottom">
                    <div className="project-description">
                        <h5>Project Description</h5>
                        <p>
                            LoopedIn is a fullstack clone 
                            of the largest professional networking
                            platform LinkedIn. The purpose of this 
                            project is to improve one's knowledge of 
                            how different technologies interact with 
                            each other and how they can create something 
                            greater than the sum of its parts.
                        </p>
                    </div>
                    <div className="technologies-used">
                        <h5>Technologies Implemented</h5>
                        <div className="technology">
                            <p className="tech-role">Backend:</p>
                            <p>Ruby on Rails</p>
                        </div>
                        <div className="technology">
                            <p className="tech-role">Frontend:</p>
                            <p>React, Redux</p>
                        </div>
                        <div className="technology">
                            <p className="tech-role">Database:</p>
                            <p>PostgreSQL</p>
                        </div>
                        <div className="technology">
                            <p className="tech-role">Other:</p>
                            <p>jQuery, JBuilder, HTML, CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Widgets;