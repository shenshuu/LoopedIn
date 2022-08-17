import React from 'react';
import { AccountCircle } from '@mui/icons-material';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
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
                    <h2 className="demo-name">Cappy Bara</h2>
                    <p className="demo-profession">Professional tester</p>
                    <p className="demo-location">New York, NY, United States</p>
                </div>

                <div className="sidebar-stats">
                    <div className="sidebar-stats-top">
                        <p>Connections</p>
                        <p className="sidebar-stat-number">43</p>
                    </div>
                    <div className="sidebar-stats-bottom">
                        <p>Who viewed you</p>
                        <p className="sidebar-stat-number">53</p>
                    </div>
                </div>

                <div className="sidebar-bottom">
                    <h3 className="sidebar-hashtag-logo">Followed hashtags</h3>
                    <ul className="tags">
                        <li>#reactjs</li>
                        <li>#rubyonrails</li>
                        <li>#clone</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;