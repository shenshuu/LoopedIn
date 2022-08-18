import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CreateIcon from '@mui/icons-material/Create';
import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            post: this.props.post,
            action_modal_hidden: true,
            update_modal_hidden: true,
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.actionModal = this.actionModal.bind(this);
        this.openActionModal = this.openActionModal.bind(this);
        this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
        this.updateModal = this.updateModal.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    updateBody(e) {
        this.setState({post: {
            user_id: this.state.post.user_id,
            id: this.state.post.id,
            body: e.target.value
        }
        });
    }

    updateModal() {
        return (
            <div className="create-post-modal">
                <div className="create-post-modal-header">
                    <h2>Edit post</h2>
                    <div className="close-create-post-modal" onClick={this.toggleUpdateModal}><CloseRoundedIcon /></div>
                </div>
                <div className="create-post-modal-header-divider"></div>
                <form className="create-post-form" onSubmit={this.handleUpdate}>
                    <div className="create-post-user-info">
                        <AccountCircle />
                        <div className="create-post-user-header">
                            <h3>{`${this.state.user.first_name} ${this.state.user.last_name}`}</h3>
                            <p>Professional Tester</p>
                        </div>
                    </div>
                    <input type="text" required placeholder="What do you want to talk about?" 
                    onChange={this.updateBody} value={this.state.post.body}/>
                    <div className="create-post-modal-footer">
                        <InsertPhotoIcon />
                        <button type="submit" className="create-post-btn">Save</button>
                    </div>
                </form>
            </div>
        )
    }

    handleUpdate() {
        this.setState({update_modal_hidden: true});
        this.props.updatePost(this.state.post);
    }

    handleDelete() {
        this.setState({action_modal_hidden: true});
        this.props.deletePost(this.state.post);
    }

    openActionModal() {
        this.setState({action_modal_hidden: !this.state.action_modal_hidden});
    }

    toggleUpdateModal() {
        this.setState({
            update_modal_hidden: !this.state.update_modal_hidden,
            action_modal_hidden: true,
        });
    }

    actionModal() {
        return (
            <div className="post-actions-modal">
                <div className="edit-post-action" onClick={this.toggleUpdateModal}>
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
                {this.state.update_modal_hidden ? "" : this.updateModal()}
                <div className="post-top">
                    <div className="post-header">
                        <AccountCircle />
                        <div className="post-header-info">
                            <h3>{`${this.state.user.first_name} ${this.state.user.last_name}`}</h3>
                            <p>Professional Tester</p>
                        </div>
                    </div>
                    <div className="post-actions">
                        <MoreHorizRoundedIcon onClick={this.openActionModal}/>
                    </div>
                </div>
                <div className="post-body">
                    {this.state.post.body} 
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
                {this.state.action_modal_hidden ? "" : this.actionModal()}
            </div>
        )
    }
}

export default PostIndexItem;