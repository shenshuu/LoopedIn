import NetworkInvitationItem from "./network_invitation_item";
import { deleteConnect, updateConnect } from "../../actions/connect_actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    // current_user: state.entities.users[state.session.id],
    // connects: state.entities.connects,
});

const mapDispatchToProps = dispatch => ({
    updateConnect: connect => dispatch(updateConnect(connect)),
    deleteConnect: connect => dispatch(deleteConnect(connect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NetworkInvitationItem);