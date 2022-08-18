import CommentIndexItemContainer from './comment_index_item_container';
import React from 'react';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-index">
                {this.props.comments.map((comment, i) => {
                    return <CommentIndexItemContainer comment={comment} key={comment+i}/>
                })}
            </div>
        )
    }
}

export default CommentIndex;