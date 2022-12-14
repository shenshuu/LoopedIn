import CommentIndexItemContainer from './comment_index_item_container';
import React from 'react';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-index">
                {Object.values(this.props.comments).map((comment, i) => {
                    return (comment.post_id) === this.props.post.id ? <CommentIndexItemContainer comment={comment} post={this.props.post} key={comment+i}/> : ""
                })}
            </div>
        )
    }
}

export default CommentIndex;