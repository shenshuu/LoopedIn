import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = state => ({
    user: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        location_country: 'United States',
        location_city: 'New York',
    },
    formType: 'Sign up',
    errors: state.errors,
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)