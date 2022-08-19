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
        console.log('this.props.comment: ', this.props.comment);
        return (
            <div className="comments">
                <div className="comment-contents">
                    <div className="profile-pic"><AccountCircle /></div>
                    <div className="comment-message-contents">
                        <div className="comment-message-header">
                            <div className="comment-message-header-top">
                                <h4>{`${this.props.user.first_name} ${this.props.user.last_name}`}</h4>
                                <p>{`(${this.props.user.pronouns})`}</p>
                            </div>
                            <div className="comment-message-header-bottom">
                                <p>{`${this.props.user.headline}`}</p>
                            </div>
                        </div>
                        <div className="comment-message">
                            {this.props.comment.body}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;