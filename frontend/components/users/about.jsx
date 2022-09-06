// import CreateIcon from '@mui/icons-material/Create';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            location_country: this.props.user.location_country,
            location_city: this.props.user.location_city,
            about: '',
            pronouns: this.props.user.pronouns,
            headline: this.props.user.headline,
            id: this.props.user.id,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.editModal = this.editModal.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
        this.props.toggleEditing();
    }

    handleUpdate(e) {
        this.setState({about: e.target.value});
    }

    editModal() {
        return (
            <div>
                <div id="overlay" onClick={this.props.toggleEditing}></div>
                <div className="create-post-modal" id="edit-about-modal">
                    <div className="create-post-modal-header">
                        <h2>Edit about</h2>
                        <div className="close-create-post-modal" onClick={this.props.toggleEditing}>
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="create-post-modal-header-divider"></div>
                    <form className="create-post-form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Tell us about yourself" onChange={this.handleUpdate} value={this.state.about}/>
                        <div className="create-post-modal-footer" id="about-modal-footer">
                            <button type="submit" className="create-post-btn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {/* <CreateExperienceForm createExperience={this.props.createExperience} adding={this.state.adding_experience} toggleAdding={() => this.toggleAdding()}/> */}
                {this.props.editing ? this.editModal() : ""}
                <div id="experiences-container">
                    <div id="experiences-header">
                        <p className="experiences-title">About</p>
                        {this.props.user.id === this.props.current_user.id ? <div className="experience-actions">
                            {/* <CreateIcon className="experience-action" onClick={this.props.toggleEditing}/> */}
                            <div className="experience-action" onClick={this.props.toggleEditing}>
                                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                            </div>
                        </div>: ""}
                    </div>
                    <p id="user-about">{this.props.user.about}</p>
                </div>
            </div>
        )
    }
}

export default About;