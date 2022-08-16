import { connect } from "react-redux";
import { login, logout } from "../../actions/session_actions";
import Splash from './splash';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id),
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);