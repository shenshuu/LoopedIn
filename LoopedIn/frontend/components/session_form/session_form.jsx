import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signupFields = this.signupFields.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.props.history.push('/');
        this.setState({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            location_country: '',
            location_city: '',
        });
    } 

    update(field) {
        console.log(this.state)
        return e => this.setState({[field]: e.target.value});
    }

    signupFields() {
        return (
            <div>
                <label>First Name:
                    <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
                </label>
                <br />
                <label>Last Name:
                    <input type="text" value={this.state.lastName} onChange={this.update('lastName')}/>
                </label>
                <br />
                <label>Country:
                    <input type="text" value={this.state.locationCountry} onChange={this.update('locationCountry')}/>
                </label>
                <br />
                <label>City:
                    <input type="text" value={this.state.locationCity} onChange={this.update('locationCity')}/>
                </label>
            </div>
        )
    }

    render() {

        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h3>{this.props.formType}</h3>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    {this.props.formType === 'Sign Up' ? this.signupFields() : <span></span>}
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;