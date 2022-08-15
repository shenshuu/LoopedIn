import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
    user: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        location_country: '',
        location_city: '',
    },
    formType: 'Sign Up',
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)