import { connect } from "react-redux"
import SessionForm from './session_form';
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import React from 'react';

const mapStateToProps = state => ({
    user: {
        email: '',
        password: '',
    },
    formType: 'Log In',
    navLink: <Link to='/login'>Log In</Link>
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);