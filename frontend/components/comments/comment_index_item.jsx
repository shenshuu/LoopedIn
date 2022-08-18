import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            comment: props.comment,
        }
    }

    render() {
        return (
            <div className="comments">
                <div className="comment-contents">
                    <div className="profile-pic"><AccountCircle /></div>
                    <div className="comment-message-contents">
                        <div className="comment-message-header">
                            <div className="comment-message-header-top">
                                <h4>{`${this.state.user.first_name} ${this.state.user.last_name}`}</h4>
                                <p>{`(${this.state.user.pronouns})`}</p>
                            </div>
                            <div className="comment-message-header-bottom">
                                <p>{`${this.state.user.headline}`}</p>
                            </div>
                        </div>
                        <div className="comment-message">
                            {this.state.comment.body}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;