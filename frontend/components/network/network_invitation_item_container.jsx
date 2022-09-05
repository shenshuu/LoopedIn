import NetworkInvitationItem from "./network_invitation_item";
import { updateConnect } from "../../actions/connect_actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    current_user: state.entities.users[state.session.id],
    connects: state.entities.connects,
});

const mapDispatchToProps = dispatch => ({
    updateConnect: connect => dispatch(updateConnect(connect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NetworkInvitationItem);