import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import SplashHeader from "./splash_header";

const mapStateToProps = (state, ownProps) => ({
    loggedIn: Boolean(state.session.id)
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashHeader));