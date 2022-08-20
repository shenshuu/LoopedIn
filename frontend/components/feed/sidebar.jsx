import React from 'react';
import { AccountCircle } from '@mui/icons-material';

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
                    <img src="https://wallpapercave.com/wp/wp4518438.jpg" alt="profile-img" />
                    <AccountCircle />
                    <div className="user-details">
                        <p className="demo-name">{`${this.state?.first_name} ${this.state?.last_name}`}</p>
                        <p className="demo-profession">{`${this.state?.headline}`}</p>
                        <p className="demo-location">{`${this.state?.location_city}, ${this.state?.location_country}`}</p>
                    </div>
                </div>

                <div className="sidebar-stats">
                    <div className="sidebar-stats-top">
                        <p>Connections</p>
                        <p className="sidebar-stat-number">43</p>
                    </div>
                    <div className="sidebar-stats-bottom">
                        <p>Who's viewed your profile</p>
                        <p className="sidebar-stat-number">53</p>
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