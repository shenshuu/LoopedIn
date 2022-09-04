import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.hashtags.bind(this);
    }

    hashtags() {
        return (
            <div className="sidebar-hashtags">
                <h3 className="sidebar-hashtag-logo">Followed hashtags</h3>
                <ul className="tags">
                    <li>#reactjs</li>
                    <li>#rubyonrails</li>
                    <li>#clone</li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-top">
                    <img src="https://media-exp1.licdn.com/dms/image/C5616AQFm9VPk7Nd1cQ/profile-displaybackgroundimage-shrink_350_1400/0/1635706270087?e=1667433600&v=beta&t=-GG8YaHFDO0dW6kTxGKSS9yEXHnX56jGMCffQn1cslk" alt="profile-cover" />
                    <div id="sidebar-user-img">
                        <img src={this.props.user.image} alt="user-photo" />
                    </div>
                    <div className="user-details">
                        <p className="demo-name">Welcome, {`${this.props.user.first_name}`}!</p>
                        <p>{"Career"}</p>
                    </div>
                </div>

                <div className="sidebar-stats">
                    <div className="sidebar-stats-top">
                        <p>Connections</p>
                        <p className="sidebar-stat-number">11</p>
                    </div>
                    <div className="sidebar-stats-bottom">
                        <p>Who's viewed your profile</p>
                        <p className="sidebar-stat-number">24</p>
                    </div>
                </div>

                <div className="sidebar-bottom">
                    <p className="sidebar-hashtag-logo">Followed hashtags</p>
                    <ul className="tags">
                        <li>#reactjs</li>
                        <li>#rubyonrails</li>
                        <li>#clone</li>
                    </ul>
                </div>
                <div className="sidebar-divider-container">
                    <div className="sidebar-divider"></div>
                </div>
                <div className="project-description">
                        <p className="widgets-para">
                            <strong className="aa">Project Description:</strong> LoopedIn is a fullstack clone of the world's largest
                            professional networking site LinkedIn.
                        </p>
                    </div>

            </div>
        )
    }
}

export default Sidebar;