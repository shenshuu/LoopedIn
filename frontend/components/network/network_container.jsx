import { deletePosts } from '../../actions/post_actions';
import { deleteLikes } from '../../actions/like_actions';
import { deleteComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/session_actions';
import { connect } from "react-redux";
import Network from './network';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    deletePosts: () => dispatch(deletePosts()),
    deleteLikes: () => dispatch(deleteLikes()),
    deleteComments: () => dispatch(deleteComments()),
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);