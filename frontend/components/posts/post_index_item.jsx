import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }

    actionModal() {
        return (
            <div className="post-actions-modal">
                <div className="edit-post-action">
                    <CreateIcon />
                    <p>Edit Post</p>
                </div>
                <div className="delete-post-action">
                    <DeleteRoundedIcon />
                    <p>Delete Post</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="post">
                <div className="post-top">
                    <div className="post-header">
                        <AccountCircle />
                        <div className="post-header-info">
                            <h3>{`${this.state.first_name} ${this.state.last_name}`}</h3>
                            <p>Professional Tester</p>
                        </div>
                    </div>
                    <div className="post-actions">
                        <MoreHorizRoundedIcon />
                    </div>
                </div>
                <div className="post-body">
                    Post body goes here 
                </div>
                <div className="post-btn-divider"></div>
                <div className="post-btn-container">
                    <div className="post-btn">
                        <ThumbUpOffAltIcon />
                        <p>Like</p>
                    </div>
                    <div className="post-btn">
                        <MessageRoundedIcon />
                        <p>Comment</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostIndexItem;