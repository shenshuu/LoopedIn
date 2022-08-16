import { connect } from "react-redux"
import SessionForm from './session_form';
import { login } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
    user: {
        email: '',
        password: '',
    },
    formType: 'Sign in',
    errors: state.errors,
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));