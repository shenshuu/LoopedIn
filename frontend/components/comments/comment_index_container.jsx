import { fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    comments: Object.values(state.entities.comments),
});

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);