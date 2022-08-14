import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.props.history.push('/');
        this.setState({
            email: '',
            password: '',
        });
    } 

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    signupFields() {
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>{this.props.formType}</h3>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;