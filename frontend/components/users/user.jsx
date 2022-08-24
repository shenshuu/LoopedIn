// import CreateIcon from '@mui/icons-material/Create';
// import AddIcon from '@mui/icons-material/Add';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import ExperienceIndexContainer from '../experiences/experience_index_container';
import EducationIndexContainer from '../educations/education_index_container';
import CreateExperienceForm from '../experiences/create_experience_form';
import CreateEducationForm from '../educations/create_education_form';
import UpdateUserImageForm from './update_user_image_form';
import About from './about';
import equal from 'fast-deep-equal';
import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            action_modal_hidden: true,
            adding_experience: false,
            adding_education: false,
            editing_user_image: false,
            editing_about: false, 
        };
        this.toggleActionModal = this.toggleActionModal.bind(this);
        this.actionModal = this.actionModal.bind(this);
        this.toggleAddingExperience = this.toggleAddingExperience.bind(this);
        this.toggleAddingEducation = this.toggleAddingEducation.bind(this);
        this.toggleEditingUserImage = this.toggleEditingUserImage.bind(this);
        this.toggleEditingAbout = this.toggleEditingAbout.bind(this);
    }

    componentDidMount() {
        this.props.deletePosts();
        this.props.deleteLikes();
        this.props.deleteComments();
        this.props.fetchUsers();
    }

    // componentDidUpdate(prevProps) {
    //     if (!equal(prevProps.users, this.props.users)) {
    //         this.setState({action_modal_hidden: this.state.action_modal_hidden});
    //     }
    // }

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
        this.setState({editing_user_image: !this.state.editing_user_image});
    }

    toggleEditingAbout() {
        this.setState({editing_about: !this.state.editing_about});
    }

    toggleActionModal() {
        this.setState({action_modal_hidden: !this.state.action_modal_hidden});
    }

    actionModal() {
        return (
            <div className="profile-action-modal">
                <div className="profile-action" onClick={this.toggleAddingExperience}>
                    {/* <AddIcon /> */}
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <p>Add experience</p>
                </div>
                <div className="profile-action" onClick={this.toggleAddingEducation}>
                    {/* <AddIcon /> */}
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <p>Add education</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="user-profile">
                {this.state.editing_user_image ? <UpdateUserImageForm toggleModal={() => this.toggleEditingUserImage()} user={this.props.user} /> : ""}
                {this.state.adding_experience ? <CreateExperienceForm toggleAdding={() => this.toggleAddingExperience()} adding={this.state.adding_experience} createExperience={this.props.createExperience}/> : ""}
                {this.state.adding_education ? <CreateEducationForm toggleAdding={() => this.toggleAddingEducation()} adding={this.state.adding_education} createEducation={this.props.createEducation}/> : ""}
                <div className="user-container">
                    <div className="user-intro" id="user-intro">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.scienceabc.com%2Fwp-content%2Fuploads%2F2020%2F02%2FPythagoras-mathematical-numbers-seriessymbolMark-RademakerS.jpg%3Fssl%3D1&f=1&nofb=1" alt=""/>
                        <div className="user-intro-header">
                            <div className="user-profile-photo" onClick={this.toggleEditingUserImage}>
                                {Boolean(this.props.user.image) ? <img src={this.props.user.image} alt="user-profile-photo" /> : 
                                <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-profile-photo" />}
                            </div>
                            {/* <CreateIcon /> */}
                            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
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
                                        {this.props.current_user.id === this.props.user.id ? 
                                        <button id="add-profile-section" onClick={this.toggleActionModal}>Add Profile Section</button>
                                        : <button id="add-profile-section">Connect</button>
                                        }
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
                    Users you may know
                    </div>
                </div>
            </div>
        )
    }
}

export default User;