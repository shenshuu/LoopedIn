import { deleteComment, updateComment } from '../../actions/comment_actions';
import { deleteLike, createLike } from '../../actions/like_actions';
import CommentIndexItem from './comment_index_item';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    current_user: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.comment.user_id],
    likes: state.entities.likes,
});

const mapDispatchToProps = dispatch => ({
    deleteComment: comment => dispatch(deleteComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteLike: like => dispatch(deleteLike(like)),
    createLike: like => dispatch(createLike(like)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);