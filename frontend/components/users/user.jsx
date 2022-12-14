import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import ExperienceIndexContainer from '../experiences/experience_index_container';
import EducationIndexContainer from '../educations/education_index_container';
import CreateExperienceForm from '../experiences/create_experience_form';
import CreateEducationForm from '../educations/create_education_form';
import UpdateUserImageForm from './update_user_image_form';
import UpdateUserForm from './update_user_form';
import UserIndexItemContainer from './user_index_item_container';
import HeaderContainer from '../splash/header_container';
import PendingModalContainer from '../modals/pending_modal_container';
import About from './about';
import equal from 'fast-deep-equal';
import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pending_modal_hidden: true,
            action_modal_hidden: true,
            adding_experience: false,
            adding_education: false,
            editing_user_image: false,
            editing_about: false, 
            editing_user: false,
        };
        this.togglePendingModal = this.togglePendingModal.bind(this);
        this.toggleActionModal = this.toggleActionModal.bind(this);
        this.actionModal = this.actionModal.bind(this);
        this.toggleAddingExperience = this.toggleAddingExperience.bind(this);
        this.toggleAddingEducation = this.toggleAddingEducation.bind(this);
        this.toggleEditingUserImage = this.toggleEditingUserImage.bind(this);
        this.toggleEditingUser = this.toggleEditingUser.bind(this);
        this.toggleEditingAbout = this.toggleEditingAbout.bind(this);
        this.renderUser = this.renderUser.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
        this.numberOfConnections = this.numberOfConnections.bind(this);
        this.showConnections = this.showConnections.bind(this);
        this.sendConnect = this.sendConnect.bind(this);
        this.acceptConnect = this.acceptConnect.bind(this);
        this.deleteConnect = this.deleteConnect.bind(this);
    }

    componentDidMount() {
        this.props.fetchConnects();
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (!equal(prevProps.users, this.props.users)) {
            this.setState({action_modal_hidden: this.state.action_modal_hidden});
        }
    }

    numberOfConnections() {
        return Object.values(this.props.connects).filter(connect => connect.accepted && (connect.sender_id === this.props.user.id || connect.receiver_id === this.props.user.id)).length
    }

    showConnections() {
        if (this.props.user.id === this.props.current_user.id) {
            this.props.history.push('/network');
        }
    }

    toggleEditingUser() {
        this.setState({
            editing_user: !this.state.editing_user,
            action_modal_hidden: true,
        });
    }

    toggleAddingExperience() {
        this.setState({
            adding_experience: !this.state.adding_experience,
            action_modal_hidden: true,
        });
    }

    toggleAddingEducation() {
        this.setState({
            adding_education: !this.state.adding_education,
            action_modal_hidden: true,
        })
    }

    toggleEditingUserImage() {
        this.setState({
            editing_user_image: !this.state.editing_user_image,
            action_modal_hidden: true,
        });
    }

    toggleEditingAbout() {
        this.setState({
            editing_about: !this.state.editing_about,
            action_modal_hidden: true,
        });
    }

    toggleActionModal() {
        this.setState({action_modal_hidden: !this.state.action_modal_hidden});
    }

    togglePendingModal() {
        this.setState({pending_modal_hidden: !this.state.pending_modal_hidden});
    }

    actionModal() {
        return (
            <div className="profile-action-modal">
                <div className="profile-action" onClick={this.toggleAddingExperience}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <p>Add experience</p>
                </div>
                <div className="profile-action" onClick={this.toggleAddingEducation}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <p>Add education</p>
                </div>
            </div>
        )
    }

    sendConnect() {
        this.props.createConnect({
            sender_id: this.props.current_user.id,
            receiver_id: this.props.user.id,
            pending: true,
            accepted: false,
        });
    }

    acceptConnect() {
        const pendingConnects = Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id);
        if (pendingConnects.length > 0) {
            let updatedConnect = Object.assign({}, pendingConnects[0], {pending: false, accepted: true});
            this.props.updateConnect(updatedConnect);
        }
    }

    deleteConnect() {
        const filteredConnects = Object.values(this.props.connects).filter(connect => connect.accepted && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id);
        if (filteredConnects.length > 0) {
            this.props.deleteConnect(filteredConnects[0])
        }
    }

    shuffleArray(arr) {
        let currentIndex = arr.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    }

    renderUser() {
        return (
            <div>
                <HeaderContainer />
                <div className="user-profile">
                    {this.state.editing_user_image ? <UpdateUserImageForm toggleModal={() => this.toggleEditingUserImage()} user={this.props.user} /> : ""}
                    {this.state.adding_experience ? <CreateExperienceForm toggleAdding={() => this.toggleAddingExperience()} adding={this.state.adding_experience} createExperience={this.props.createExperience}/> : ""}
                    {this.state.adding_education ? <CreateEducationForm toggleAdding={() => this.toggleAddingEducation()} adding={this.state.adding_education} createEducation={this.props.createEducation}/> : ""}
                    {this.state.editing_user ? <UpdateUserForm toggleEditing={() => this.toggleEditingUser()} current_user={this.props.current_user} editing={this.state.editing_user} updateUser={this.props.updateUser} /> : ""}
                    <div className="user-container">
                        <div className="user-intro" id="user-intro">
                            <img src="https://media-exp1.licdn.com/dms/image/C5616AQFm9VPk7Nd1cQ/profile-displaybackgroundimage-shrink_350_1400/0/1635706270087?e=1667433600&v=beta&t=-GG8YaHFDO0dW6kTxGKSS9yEXHnX56jGMCffQn1cslk" alt=""/>
                            <div className="user-intro-header">
                                <div className="user-profile-photo" onClick={this.toggleEditingUserImage}>
                                    {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-profile-photo" /> 
                                    : <img src={this.props.user.image} alt="user-profile-photo" /> }
                                </div>
                                {this.props.user.id === this.props.current_user.id ? 
                                <div id="edit-user" onClick={this.toggleEditingUser}>
                                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                </div> : ""}
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
                                        <div className="user-connection-count" onClick={() => this.showConnections()}>{this.numberOfConnections()} connections</div>
                                        <div className="user-intro-actions">
                                            {this.props.current_user.id === this.props.user.id ? 
                                            <button id="add-profile-section" onClick={this.toggleActionModal}>Add Profile Section</button>
                                            : Object.values(this.props.connects).filter(connect => connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length === 0 ?
                                            <button id="add-profile-section" onClick={() => this.sendConnect()}>Connect</button>
                                            : Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length > 0 && Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id)[0].sender_id === this.props.current_user.id ? 
                                            <button id="pending-user" onClick={() => this.togglePendingModal()}>Pending</button> 
                                            : Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id)).length > 0 && Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id))[0].receiver_id === this.props.current_user.id ?
                                            <button id="add-profile-section" onClick={() => this.acceptConnect()}>Accept</button>
                                            : Object.values(this.props.connects).filter(connect => connect.accepted && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length === 1 ? 
                                            <button id="add-profile-section" onClick={() => this.deleteConnect()}>Disconnect</button>
                                            : <button id="add-profile-section" onClick={() => this.deleteConnect()}>Disconnect</button>}
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
                            <About user={this.props.user} current_user={this.props.current_user} 
                            editing={this.state.editing_about} toggleEditing={() => this.toggleEditingAbout()}
                            updateUser={this.props.updateUser} />
                            <ExperienceIndexContainer user={this.props.user} current_user={this.props.current_user} />
                            <EducationIndexContainer user={this.props.user} current_user={this.props.current_user} />
                        </div>
                        <div className="other-users">
                            <div id="other-users-logo-container">
                                <p id="other-users-logo">People you may know</p>
                            </div>
                            {Object.values(this.props.users).map((user, i) => {
                                if (i < 5 && user.id !== this.props.current_user.id) {
                                    return <UserIndexItemContainer user={user} key={user+i} />
                                }
                            })}
                        </div>
                    </div>
                </div>
                {this.state.pending_modal_hidden ? "" : <PendingModalContainer current_user={this.props.current_user} user={this.props.user} togglePendingModal={() => this.togglePendingModal()}/>}
            </div>
        )
    }

    render() {
        return this.props.user && this.renderUser();
    }
}

export default User;