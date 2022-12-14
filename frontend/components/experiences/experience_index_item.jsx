import EditExperienceForm from './edit_experience_form';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class ExperienceIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.calculateDate = this.calculateDate.bind(this);
        this.state = {
            editing_experience: false,
            action_modal_hidden: true,
        }
        this.toggleEditing = this.toggleEditing.bind(this);
        this.toggleActionModal = this.toggleActionModal.bind(this);
        this.actionModal = this.actionModal.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleActionModal() {
        this.setState({action_modal_hidden: !this.state.action_modal_hidden});
    }

    actionModal() {
        return (
            <div className="post-actions-modal" id="experience-actions-modal">
                <div className="edit-post-action" onClick={this.handleEdit}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    <p>Edit Experience</p>
                </div>
                <div className="delete-post-action" onClick={this.handleDelete}>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    <p>Delete Experience</p>
                </div>
            </div>
        )
    }

    toggleEditing() {
        this.setState({editing_experience: !this.state.editing_experience});
    }

    handleEdit() {
        this.setState({action_modal_hidden: true});
        this.toggleEditing();
    }

    handleDelete() {
        this.setState({action_modal_hidden: true});
        this.props.deleteExperience({id: this.props.experience.id});
    }

    calculateDate(date) {
        let newDate = date.split("-");
        let months = [
            null, 'Jan','Feb','Mar','Apr','May','Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return (
            <div id="employment-date">{`${months[parseInt(newDate[1])]} ${parseInt(newDate[0])}`}</div>
        )
    }

    calculateDuration(startDate, endDate) {
        startDate = startDate.split("-").map(num => parseInt(num));
        endDate = endDate.split("-").map(num => parseInt(num));
        let years = endDate[0] - startDate[0];
        let months = endDate[1] - startDate[1];
        // if (months < 0) 
    }

    render() {
        return (
            <div className="experience-item-container">
                <EditExperienceForm editing={this.state.editing_experience} 
                experience={this.props.experience} toggleEditing={() => this.toggleEditing()}
                updateExperience={this.props.updateExperience}/>
                <div className="experience-item-container-a">
                    <div className="experience-item">
                        <div className="company-photo">
                            <img src="https://i.postimg.cc/yNSmf9GF/image.png" alt="company-photo" />
                        </div>
                        <div className="experience-item-contents">
                            <div className="experience-item-header">
                                <p id="company-title">{`${this.props.experience.company}`}</p>
                                <div className="experience-actions-modal-container">
                                    {this.props.editing ? 
                                    <div className="create-icon-div" onClick={this.toggleActionModal}>
                                        <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                                    </div> : ""}
                                    {this.state.action_modal_hidden ? "" : this.actionModal()}
                                </div>
                            </div>
                            <div id="job">
                                <p id="job-title">{`${this.props.experience.title}`}</p>
                                <p id="job-separator">.</p>
                                <p id="employment-type">{`${this.props.experience.employment_type}`}</p>
                            </div>
                            <div id="employment-duration">
                                {this.calculateDate(this.props.experience.start_date)}
                                <div id="employment-duration-separator"> - </div>
                                {Boolean(this.props.experience.end_date) ? this.calculateDate(this.props.experience.end_date) : "Present"}
                            </div>
                            <div id="employment-location">
                                {`${this.props.experience.location}`}
                            </div>
                            <div id="employment-description"></div>
                        </div>
                    </div>
                </div>
                <div id="experiences-separator"></div>
            </div>
        )
    }
}

export default ExperienceIndexItem;