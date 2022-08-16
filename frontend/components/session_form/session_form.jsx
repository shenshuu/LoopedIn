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
        console.log(this.state);
        this.props.processForm(this.state);
        this.props.history.push('/feed');
        this.setState({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            location_country: 'United States',
            location_city: 'New York',
        });
    } 

    update(field) {
        console.log(this.state)
        return e => this.setState({[field]: e.target.value});
    }

    signupFields() {
        return (
            <div>
                <input type="text" required 
                value={this.state.firstName} 
                onChange={this.update('first_name')}
                placeholder="First Name"
                />
                <br />
                <input type="text" required 
                value={this.state.lastName} 
                onChange={this.update('last_name')}
                placeholder="Last Name"
                />
                <br />
            </div>
        )
    }

    render() {

        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit}>
                   
                    <input type="text" required 
                    value={this.state.email} 
                    onChange={this.update('email')}
                    placeholder="Email"
                    />

                    <input type="password" required 
                    value={this.state.password} 
                    onChange={this.update('password')}
                    placeholder="Password"
                    />

                    {this.props.formType === 'Sign Up' ? this.signupFields() : <span></span>}
                    <input type="submit" value={this.props.formType} className="submit"/>
                </form>
            </div>
        )
    }
}

export default SessionForm;