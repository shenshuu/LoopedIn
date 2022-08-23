import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react';

class CreateEducationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: '',
            field: '',
            start_date: '',
            end_date: '',
            activities: '',
            description: '',
            degree: '',
            grade: 0,
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createEducation(this.state);
        this.setState(
            {
                school: '',
                field: '',
                start_date: '',
                end_date: '',
                activities: '',
                description: '',
                grade: 0,
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
                        <p className="create-experience-title">Add Education</p>
                        <div className="close"><CloseRoundedIcon onClick={this.props.toggleAdding} /></div>
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
                            <input type="text" placeholder="Ex: 3.7" value={this.state.grade} onChange={this.update('grade')}/>
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

export default CreateEducationForm;