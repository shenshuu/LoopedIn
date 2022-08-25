// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.current_user.first_name,
            last_name: this.props.current_user.last_name,
            pronouns: this.props.current_user.pronouns || '',
            headline: this.props.current_user.headline || '',
            location_country: this.props.current_user.location_country || '',
            location_city: this.props.current_user.location_city || '',
            about: this.props.current_user.about || '',
            id: this.props.current_user.id,
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
        this.setState(
            {
                first_name: '',
                last_name: '',
                pronouns: '',
                headline: '',
                location_country: '',
                location_city: '',
                about: '',
                id: '',
            }
        );
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
                        <p className="create-experience-title">Edit user into</p>
                        <div className="close">
                            <FontAwesomeIcon onClick={this.props.toggleEditing} icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div id="create-exp-divider"></div>
                    <form onSubmit={this.handleSubmit}>
                        {/* <div className="user-edit-name"> */}
                        <div className="input-field" id="first-child">
                            <label className="input-field-name">First Name</label>
                            <input type="text" placeholder="Ex: John" value={this.state.first_name} onChange={this.update('first_name')} />
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Last Name</label>
                            <input type="text" placeholder="Ex: Doe" value={this.state.last_name} onChange={this.update('last_name')} />
                        </div>
                        {/* </div> */}
                        <div className="input-field">
                            <label className="input-field-name">Pronouns</label>
                            <select value="Please select" onChange={this.update('pronouns')}>
                                <option value="Full-Time">He/Him</option>
                                <option value="Part-Time">She/Her</option>
                                <option value="Self-employed">Non-binary</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Headline</label>
                            <input type="text" placeholder="Ex: Software Engineer" value={this.state.headline} onChange={this.update('headline')}/>
                        </div>
                        <div className="input-field">
                            <label className="input-field-name">Country</label>
                            <input type="text" placeholder="Ex: United States" value={this.state.location_country} onChange={this.update('location_country')}/>
                        </div>
                        <div className="input-field input-field-date">
                            <label className="input-field-name">City</label>
                            <input type="text" value={this.state.location_city} onChange={this.update('location_city')} />
                        </div>
                        <textarea value={this.state.about} onChange={this.update('about')}>

                        </textarea>
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

export default UpdateUserForm;