import React from 'react';
import HeaderContainer from '../splash/header_container';
import { Link } from 'react-router-dom';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signupFields = this.signupFields.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
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
            location_country: 'United States',
            location_city: 'New York',
        });
    } 

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    handleDemo() {
        const demoUser = {
            email: 'cappy@gmail.com',
            password: 'fooood',
            location_country: 'United States',
            location_city: 'New York',
            first_name: 'Cappy',
            last_name: 'Bara',
            pronouns: 'He/Him',
            headline: 'Professional Tester',
        }
        this.props.history.push('/feed');
        this.props.processForm(demoUser);
    }

    demoLogin() {
        return (
            <div>
                {/* <div><span id="or-separator">or</span></div> */}
                <button className="demo-btn" onClick={this.handleDemo}>Demo User</button>
                <div className="login-footer">
                    Don't have an account? 
                    <Link id="join-now-link" to='/signup'>Join now</Link>
                </div>
            </div>
        )
    }

    render() {

        return (
            <div className="form-body-container">
                <div className="form-body">
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

                            <button type="submit" className="submit">{this.props.formType}</button>
                            <button className="demo-btn" onClick={this.handleDemo}>Demo User</button>
                            <div className="login-footer">
                                Don't have an account? 
                                <Link id="join-now-link" to='/signup'>Join now</Link>
                            </div>
                            {this.props.formType === 'Sign in' ? this.demoLogin() : ""}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;