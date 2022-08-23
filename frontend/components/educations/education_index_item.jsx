import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditEducationForm from './edit_education_form';
import CreateIcon from '@mui/icons-material/Create';
import React from 'react';

class EducationIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.calculateDate = this.calculateDate.bind(this);
        this.state = {
            editing_education: false,
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
                    <CreateIcon />
                    <p>Edit Education</p>
                </div>
                <div className="delete-post-action" onClick={this.handleDelete}>
                    <DeleteRoundedIcon/>
                    <p>Delete Education</p>
                </div>
            </div>
        )
    }

    toggleEditing() {
        this.setState({editing_education: !this.state.editing_education});
    }

    handleEdit() {
        this.setState({action_modal_hidden: true});
        this.toggleEditing();
    }

    handleDelete() {
        this.setState({action_modal_hidden: true});
        this.props.deleteEducation({id: this.props.education.id});
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
                <EditEducationForm editing={this.state.editing_education} 
                education={this.props.education} toggleEditing={() => this.toggleEditing()}
                updateEducation={this.props.updateEducation}/>
                <div className="experience-item-container-a">
                    <div className="experience-item" id="education-item">
                        <div className="company-photo" id="education-photo">
                            <img src="https://i.postimg.cc/pdtrHFTQ/image.png" alt="company-photo" />
                        </div>
                        <div className="experience-item-contents">
                            <div className="experience-item-header">
                                <p id="company-title">{`${this.props.education.school}`}</p>
                                <div className="experience-actions-modal-container">
                                    {this.props.editing ? 
                                    <div className="create-icon-div" onClick={this.toggleActionModal}>
                                        <MoreHorizRoundedIcon />
                                    </div> : ""}
                                    {this.state.action_modal_hidden ? "" : this.actionModal()}
                                </div>
                            </div>
                            <div id="job">
                                <p id="job-title">{`${this.props.education.field}`}</p>
                                <p id="job-separator">.</p>
                                {/* <p id="employment-type">{`${this.props.experience.employment_type}`}</p> */}
                            </div>
                            <div id="employment-duration">
                                {this.calculateDate(this.props.education.start_date)}
                                <div id="employment-duration-separator"> - </div>
                                {/* {Boolean(this.props.education.end_date) ? this.calculateDate(this.props.experience.end_date) : "Present"} */}
                            </div>
                            {/* <div id="employment-location">
                                {`${this.props.education.location}`}
                            </div> */}
                        </div>
                        {/* {this.props.editing ? <div className="create-icon-div" onClick={this.toggleEditing}><CreateIcon/></div> : ""} */}
                    </div>
                </div>
                <div id="experiences-separator"></div>
            </div>
        )
    }
}

export default EducationIndexItem;