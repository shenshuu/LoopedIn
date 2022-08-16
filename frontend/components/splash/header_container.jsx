import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import SplashHeader from "./splash_header";

const mapStateToProps = state => ({
    user: state.users[state.session.id],
    loggedIn: Boolean(state.session.id)
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashHeader);