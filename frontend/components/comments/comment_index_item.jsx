import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEllipsis, faTrashCan, faPen} from '@fortawesome/free-solid-svg-icons';
// import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
// import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import CreateIcon from '@mui/icons-material/Create';
import equal from 'fast-deep-equal';
import React from 'react';


class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: [],
            is_liked: false,
            action_modal_hidden: true,
            update_modal_hidden: true,
            comment: this.props.comment,
        };
        this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
        this.toggleActionModal = this.toggleActionModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateModal = this.updateModal.bind(this);
        this.actionModal = this.actionModal.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!equal(prevProps.likes, this.props.likes)) {
            this.setState({likes: Object.values(this.props.likes).filter(
                like => like.likeable_id === this.props.comment.id)});
        } else if (!equal(prevState.likes, this.state.likes)) {
            this.setState({
                likes: this.state.likes,
                is_liked: Object.values(this.props.likes).filter( like => this.props.current_user.id === like.user_id && this.props.comment.id === like.likeable_id && like.likeable_type === 'Comment').length > 0
            });
        }
    } 

    componentDidMount() {
        this.props.fetchLikes();
    }

    updateBody(e) {
        this.setState({
            comment: {
                id: this.props.comment.id,
                parent_comment_id: this.props.parent_comment_id,
                user_id: this.props.comment.user_id,
                post_id: this.props.post.id,
                body: e.target.value,
            }
        });
    }

    handleLike() {
        let likes = Object.values(this.props.likes).filter(
            like => like.likeable_id === this.props.comment.id && like.likeable_type === 'Comment' && like.user_id === this.props.current_user.id
        )
        if (likes.length > 0) {
            this.setState({is_liked: false});
            this.props.deleteLike(likes[0]);
        } else {
            this.setState({is_liked: true});
            this.props.createLike({
                user_id: this.props.current_user.id,
                likeable_id: this.props.comment.id,
                likeable_type: 'Comment',
            })
        }
    }

    handleDelete() {
        this.setState({action_modal_hidden: true});
        this.props.deleteComment(this.props.comment);
    }

    handleUpdate(e) {
        e.preventDefault();
        this.setState({update_modal_hidden: true});
        this.props.updateComment(this.state.comment);
    }

    toggleUpdateModal() {
        this.setState({
            update_modal_hidden: !this.state.update_modal_hidden,
            action_modal_hidden: true,
        });
    }

    toggleActionModal() {
        this.setState({action_modal_hidden: !this.state.action_modal_hidden});
    }

    updateModal() {
        return (
            <div className="comment-form">
                <form className="create-post-form" onSubmit={this.handleUpdate}>
                    <input type="text" onChange={this.updateBody} value={this.state.comment.body}/>
                    <div className="update-comment-btns">
                        <button className="create-post-btn" type="submit">Save Changes</button>
                        <button className="cancel-update-post" onClick={this.toggleUpdateModal}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }

    actionModal() {
        return (
            <div className="post-actions-modal">
                <div className="edit-post-action" onClick={this.toggleUpdateModal}>
                    {/* <CreateIcon /> */}
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    <p>Edit Comment</p>
                </div>
                
                <div className="delete-post-action" onClick={this.handleDelete}>
                    {/* <DeleteRoundedIcon/> */}
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    <p>Delete Comment</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="comments">
                {this.state.action_modal_hidden ? "" : this.actionModal()}
                <div className="comment-contents">
                    <div className="profile-pic">
                        <div id="comment-user-image"> 
                            <img src={this.props.user.image} alt="user-photo" />
                        </div>
                    </div>
                    <div className="comment-container-a">
                        <div className="comment-message-contents">
                            <div className="comment-message-header">
                                <div className="comment-header-info">
                                    <div id="comment-message-header-top-container">
                                        <div className="comment-message-header-top">
                                            <p id="comment-user-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                                            <p id="comment-user-pronouns">{`(${this.props.user.pronouns})`}</p>
                                            {this.props.user.id === this.props.post.user_id ? <div id="comment-author">Author</div> : ""}
                                        </div>
                                    </div>
                                    {this.props.current_user.id === this.props.comment.user_id ? 
                                    <div className="post-actions" onClick={this.toggleActionModal}>
                                        {/* <MoreHorizRoundedIcon /> */}
                                        <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                                    </div> : ""
                                    }
                                </div>
                                <div className="comment-message-header-bottom">
                                    <p id="comment-user-headline">{`${this.props.user.headline}`}</p>
                                </div>
                            </div>
                            <div className="comment-message">
                                {this.state.update_modal_hidden ? this.props.comment.body : this.updateModal()}
                            </div>
                        </div>
                        <div className="comment-responses">
                            <div className={this.state.is_liked ? "comment-like comment-liked" : "comment-like"}>
                                <p id="comment-like" onClick={this.handleLike}>Like</p>
                                
                                {this.state.likes.length > 0 ? 
                                <div className="comment-like-contents">
                                <FontAwesomeIcon className="fa-comment-like" icon={faThumbsUp}></FontAwesomeIcon>
                                <p>{this.state.likes.length}</p>
                                </div> : ""}
                            </div>
                            <div className="comment-response-separator">|</div>
                            <div className="comment-reply">Reply</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;