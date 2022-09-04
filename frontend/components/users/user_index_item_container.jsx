import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserIndexItem from "./user_index_item";
import { createConnect, deleteConnect } from "../../actions/connect_actions";

const mapStateToProps = state => ({
    current_user: state.entities.users[state.session.id],
    connects: state.entities.connects,
})

const mapDispatchToProps = dispatch => ({
    createConnect: connect => dispatch(createConnect(connect)),
    deleteConnect: connect => dispatch(deleteConnect(connect)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserIndexItem));