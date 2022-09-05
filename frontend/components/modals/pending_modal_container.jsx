import { deleteConnect } from "../../actions/connect_actions";
import PendingModal from './pending_modal';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    connects: state.entities.connects,
});

const mapDispatchToProps = dispatch => ({
    deleteConnect: connect => dispatch(deleteConnect(connect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingModal);