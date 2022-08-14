import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import React from 'react';
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
    user: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        locationCountry: '',
        locationCity: '',
    },
    formType: 'Sign Up',
    navLink: <Link to='/signup'>Sign Up</Link>
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)