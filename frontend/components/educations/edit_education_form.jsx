// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class EditEducationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.education.id,
            school: this.props.education.school,
            field: this.props.education.field,
            start_date: this.props.education.start_date,
            end_date: this.props.education.end_date,
            activities: this.props.education.activities,
            description: this.props.education.description,
            grade: this.props.education.grade,
            degree: this.props.education.degree,
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateEducation(this.state);
        this.props.toggleEditing();
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value});
    }

    renderForm() {
        return (
            <div className="create-experience-form">
                <div id="overlay" onClick={this.props.toggleEditing}></div>
                <div className="create-experience-container">
                    <div className="create-experience-header">
                        <p className="create-experience-title">Edit Education</p>
                        <div className="close">
                            {/* <CloseRoundedIcon onClick={this.props.toggleEditing} /> */}
                            <FontAwesomeIcon onClick={this.props.toggleEditing} icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div id="create-exp-divider"></div>
                    <form onSubmit={this.handleSubmit}>
                        <label className="input-field-name" id="input-field-required">* Indicates required field</label>
                        <div className="input-field" id="first-child">
                            <label className="input-field-name">School*</label>
                            <input type="text" placeholder="Ex: Hamilton College" value={this.state.school} onChange={this.update('school')} required />
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Degree</label>
                            <input type="text" placeholder="Ex: Bachelor's" value={this.state.degree} onChange={this.update('degree')} required/>
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Field of study</label>
                            <input type="text" placeholder="Ex: Computer Science" value={this.state.field} onChange={this.update('field')}/>
                        </div>
                        <div className="input-field input-field-date">
                            <label className="input-field-name">Start date*</label>
                            <input type="date" value={this.state.start_date} onChange={this.update('start_date')} required/>
                        </div>
                        <div className="input-field input-field-date">
                            <label className="input-field-name">End date*</label>
                            <input type="date" value={this.state.end_date} onChange={this.update('end_date')}/>
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Grade</label>
                            <input type="text" placeholder="e.g. 3.7" value={this.state.grade} onChange={this.update('grade')} required/>
                        </div>
                        <div className="submit-experience"><button className="submit-experience-btn" type="submit">Save</button></div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.props.editing && this.renderForm();
    }
}

export default EditEducationForm;