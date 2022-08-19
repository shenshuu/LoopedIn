import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action_modal_hidden: true,
            update_modal_hidden: true,
        };
        this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
        this.toggleActionModal = this.toggleActionModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateModal = this.updateModal.bind(this);
        this.actionModal = this.actionModal.bind(this);
    }

    handleDelete() {
        
    }

    handleUpdate() {
        
    }

    toggleUpdateModal() {
        this.setState({update_modal_hidden: !this.state.update_modal_hidden});
    }

    toggleActionModal() {
        this.setState({action_modal_hidden: !this.state.action_modal_hidden});
    }

    updateModal() {

    }

    actionModal() {
        return (
            <div className="post-actions-modal">
                <div className="edit-post-action" onClick={this.toggleUpdateModal}>
                    <CreateIcon />
                    <p>Edit Comment</p>
                </div>
                <div className="delete-post-action" onClick={this.handleDelete}>
                    <DeleteRoundedIcon/>
                    <p>Delete Comment</p>
                </div>
            </div>
        )
    }

    render() {
        console.log('this.props: ', this.props);
        console.log('this.props.user: ', this.props.user);
        return (
            <div className="comments">
                {this.state.action_modal_hidden ? "" : this.actionModal()}
                <div className="comment-contents">
                    <div className="profile-pic"><AccountCircle /></div>
                    <div className="comment-message-contents">
                        <div className="comment-message-header">
                            <div className="comment-header-info">
                                <div className="comment-message-header-top">
                                    <h4>{`${this.props.user.first_name} ${this.props.user.last_name}`}</h4>
                                    <p>{`(${this.props.user.pronouns})`}</p>
                                </div>
                                {this.props.current_user.id === this.props.post.user_id ? 
                                <div className="post-actions" onClick={this.toggleActionModal}>
                                    <MoreHorizRoundedIcon />
                                </div> : ""
                                }
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