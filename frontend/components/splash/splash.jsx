import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginForm = this.loginForm.bind(this);
        this.homepage = this.homepage.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({email: '', password: ''})
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    } 

    loginForm() {
        return (
            <div className="homepage-login-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email" required 
                    onChange={this.update('email')} value={this.state.email}/>

                    <input type="password" placeholder="Password" required
                    onChange={this.update('password')} value={this.state.value} />

                    <button className="submit">Sign in</button>
                </form>
            </div>
        )
    }

    homepage() {
        return (
            <div className="homepage-body">
                <div className="homepage-left-container">
                    <h1 className="homepage-slogan">Welcome to your professional community</h1>
                    {/* {this.props.loggedIn ? "" : this.loginForm()} */}
                    <LoginFormContainer className="homepage-login-form"/>
                </div>
                <img className="homepage-img" src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="homepage-img" />
            </div>
        )
    }

    

    render() {
        return (
            <div className="homepage">
                {this.homepage()}
            </div>
        )
    }
}

export default Splash;