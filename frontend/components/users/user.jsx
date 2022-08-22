import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';

import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            action_modal_hidden: true,
        };
        this.toggleActionModal = this.toggleActionModal.bind(this);
        this.actionModal = this.actionModal.bind(this);
    }

    toggleActionModal() {
        this.setState({action_modal_hidden: !this.state.action_modal_hidden});
    }

    actionModal() {
        return (
            <div className="profile-action-modal">
                <div className="profile-action">
                    <AddIcon />
                    <p>Add experience</p>
                </div>
                <div className="profile-action">
                    <AddIcon />
                    <p>Add education</p>
                </div>
            </div>
        )
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
                                        <button id="add-profile-section" onClick={this.toggleActionModal}>Add Profile Section</button>
                                        <button id="user-more-section">More</button>
                                    </div>
                                    {this.state.action_modal_hidden ? "" : this.actionModal()}
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