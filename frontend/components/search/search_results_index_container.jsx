import SearchResultsIndex from "./search_results_index";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    current_user: state.entities.users[state.session.id],
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsIndex);