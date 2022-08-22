import CreateIcon from '@mui/icons-material/Create';

import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-profile">
                <div className="user-container">
                    <div className="user-intro" id="user-intro">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.scienceabc.com%2Fwp-content%2Fuploads%2F2020%2F02%2FPythagoras-mathematical-numbers-seriessymbolMark-RademakerS.jpg%3Fssl%3D1&f=1&nofb=1" alt=""/>
                        <div className="user-intro-header">
                            <div className="user-profile-photo">
                                <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-profile-photo" />
                            </div>
                            <CreateIcon />
                        </div>
                        <div className="user-intro-info">
                            <div className="user-intro-name">
                                <p>{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                                <p className="user-intro-pronouns">{`(${this.props.user.pronouns})`}</p>
                            </div>
                            <div className="user-intro-contents-container">
                                <div className="user-intro-contents">
                                    <div className="user-intro-headline">{this.props.user.headline}</div>
                                    <div className="user-intro-location">{`${this.props.user.location_city}, ${this.props.user.location_country}`}</div>
                                    <div className="user-connection-count">11 connections</div>
                                    <div className="user-intro-actions">
                                        <button id="add-profile-section">Add Profile Section</button>
                                        <button id="user-more-section">More</button>
                                    </div>
                                </div>
                                <div className="user-intro-education">
                                    <img className="user-education-photo" src="https://i.postimg.cc/pdtrHFTQ/image.png" alt="user-education"/>
                                    <p className="school-name">Hunter College</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="other-users">
                    Users you may know
                    </div>
                </div>
            </div>
        )
    }
}

export default User;