import React from 'react';
import { Link } from 'react-router-dom';
import SessionNav from '../nav/session_nav';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.props.history.push('/feed');
        this.setState({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            pronouns: 'Other',
            headline: 'Software Engineer',
            location_country: 'United States',
            location_city: 'New York',
            about: 'Who goes there'
        });
    } 

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }


    render() {

        return (
            <div>
                <SessionNav />
                <div id="user-signup-container">
                    <p id="signup-header">Make the most of your professional life</p>
                    <div /*id="signup-body-container"*/>
                        <div className="form-body">
                            <div className="session-form-container" id="signup-form-container">
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

                                    <input type="text" required 
                                    value={this.state.firstName} 
                                    onChange={this.update('first_name')}
                                    placeholder="First Name"
                                    />
                                    
                                    <input type="text" required 
                                    value={this.state.lastName} 
                                    onChange={this.update('last_name')}
                                    placeholder="Last Name"
                                    />
                                    
                                    <div className="login-footer">
                                        Already have an account? 
                                        <Link id="join-now-link" to='/login'>Sign in</Link>
                                    </div>

                                    <button type="submit" className="submit">{this.props.formType}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;