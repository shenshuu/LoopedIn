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
        this.state = {
            user: this.props.user,
            post: this.props.post,
            modal_hidden: true,
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.actionModal = this.actionModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    handleUpdate() {
        this.props.updatePost(this.state.post);
    }

    handleDelete() {
        this.props.deletePost(this.state.post);
    }

    openModal() {
        this.setState({modal_hidden: !this.state.modal_hidden});
    }

    actionModal() {
        return (
            <div className="post-actions-modal">
                <div className="edit-post-action" onClick={this.handleUpdate}>
                    <CreateIcon />
                    <p>Edit Post</p>
                </div>
                <div className="delete-post-action" onClick={this.handleDelete}>
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
                            <h3>{`${this.state.user.first_name} ${this.state.user.last_name}`}</h3>
                            <p>Professional Tester</p>
                        </div>
                    </div>
                    <div className="post-actions">
                        <MoreHorizRoundedIcon onClick={this.openModal}/>
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
                {this.state.modal_hidden ? "" : this.actionModal()}
            </div>
        )
    }
}

export default PostIndexItem;