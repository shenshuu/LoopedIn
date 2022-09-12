import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.numberOfConnections = this.numberOfConnections.bind(this);
        this.handleUserShow = this.handleUserShow.bind(this);
    }

    handleUserShow() {
        this.props.history.push(`/network`);
    }

    numberOfConnections() {
        return Object.values(this.props.connects).filter(connect => connect.accepted && (connect.sender_id === this.props.user.id || connect.receiver_id === this.props.user.id)).length
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-top">
                    <img src="https://media-exp1.licdn.com/dms/image/C5616AQFm9VPk7Nd1cQ/profile-displaybackgroundimage-shrink_350_1400/0/1635706270087?e=1667433600&v=beta&t=-GG8YaHFDO0dW6kTxGKSS9yEXHnX56jGMCffQn1cslk" alt="profile-cover" />
                    <div id="sidebar-user-img" onClick={() => this.handleUserShow()}>
                        {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-profile-photo" /> 
                        : <img src={this.props.user.image} alt="user-profile-photo" /> }
                    </div>
                    <div className="user-details">
                        <p className="demo-name">Welcome, {`${this.props.user.first_name}`}!</p>
                        <p>{this.props.user.headline ? this.props.user.headline : ""}</p>
                    </div>
                </div>

                <div className="sidebar-stats">
                    <div className="sidebar-stats-top" onClick={() => this.handleUserShow()}>
                        <p>Connections</p>
                        <p className="sidebar-stat-number">{this.numberOfConnections()}</p>
                    </div>
                    <div className="sidebar-stats-bottom">
                        <p>Who's viewed your profile</p>
                        <p className="sidebar-stat-number">24</p>
                    </div>
                </div>

                <div className="sidebar-bottom">
                    <p className="sidebar-hashtag-logo">Followed hashtags</p>
                    <ul className="tags">
                        <a id="sidebar-hashtag" href="https://reactjs.org/"><li>#reactjs</li></a>
                        <a id="sidebar-hashtag" href="https://rubyonrails.org/"><li>#rubyonrails</li></a>
                        <a id="sidebar-hashtag" href="https://linkedin.com/"><li>#clone</li></a>
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