import { deleteComment, updateComment } from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    deleteComment: comment => dispatch(deleteComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);