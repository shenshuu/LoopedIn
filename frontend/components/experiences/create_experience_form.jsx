// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class CreateExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            company: '',
            start_date: '',
            end_date: '',
            location: '',
            employment_type: '',
            current_job: true,
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createExperience(this.state);
        this.setState(
            {
                title: '',
                company: '',
                start_date: '',
                end_date: '',
                location: '',
                employment_type: '',
                current_job: true,
            }
        );
        this.props.toggleAdding();
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value});
    }

    renderForm() {
        return (
            <div className="create-experience-form">
                <div id="overlay" onClick={this.props.toggleAdding}></div>
                <div className="create-experience-container">
                    <div className="create-experience-header">
                        <p className="create-experience-title">Add Experience</p>
                        <div className="close">
                            {/* <CloseRoundedIcon onClick={this.props.toggleAdding} /> */}
                            <FontAwesomeIcon onClick={this.props.toggleAdding} icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div id="create-exp-divider"></div>
                    <form onSubmit={this.handleSubmit}>
                        <label className="input-field-name" id="input-field-required">* Indicates required field</label>
                        <div className="input-field" id="first-child">
                            <label className="input-field-name">Title*</label>
                            <input type="text" placeholder="Ex: Retail Sales Manager" value={this.state.title} onChange={this.update('title')} required />
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Employment type</label>
                            <select value="Please select" onChange={this.update('employment_type')}>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Self-employed">Self-employed</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Company name*</label>
                            <input type="text" placeholder="Ex: Microsoft" value={this.state.company} onChange={this.update('company')} required/>
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Location</label>
                            <input type="text" placeholder="Ex: New York, United States" value={this.state.location} onChange={this.update('location')}/>
                        </div>
                        <div className="input-field input-field-date">
                            <label className="input-field-name">Start date*</label>
                            <input type="date" value={this.state.start_date} onChange={this.update('start_date')} required/>
                        </div>
                        <div className="input-field input-field-date">
                            <label className="input-field-name">End date</label>
                            <input type="date" value={this.state.end_date} onChange={this.update('end_date')}/>
                        </div>
                        <div className="submit-experience"><button className="submit-experience-btn" type="submit">Save</button></div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.props.adding && this.renderForm();
    }
}

export default CreateExperienceForm;