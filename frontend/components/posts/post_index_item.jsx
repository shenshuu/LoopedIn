import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPen, faEllipsis, faTrashCan, faImage, } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faComment } from '@fortawesome/free-regular-svg-icons';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
import equal from 'fast-deep-equal';
import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            post: this.props.post,
            is_liked: false,
            display_comments: false,
            action_modal_hidden: true,
            update_modal_hidden: true,
        }
        this.handleUserShow = this.handleUserShow.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.actionModal = this.actionModal.bind(this);
        this.openActionModal = this.openActionModal.bind(this);
        this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
        this.toggleComments = this.toggleComments.bind(this);
        this.updateModal = this.updateModal.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.renderPost = this.renderPost.bind(this);
    }

    handleUserShow(userId) {
        this.props.history.push(`/users/${userId}`);
    }

    updateBody(e) {
        this.setState({post: {
            user_id: this.props.post.user_id,
            id: this.props.post.id,
            body: e.target.value
        }
        });
    }

    updateModal() {
        return (
            <div>
                <div id="overlay" onClick={this.toggleUpdateModal}></div>
                <div className="create-post-modal">
                    <div className="create-post-modal-header">
                        <h2>Edit post</h2>
                        <div className="close-create-post-modal" onClick={this.toggleUpdateModal}>
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="create-post-modal-header-divider"></div>
                    <form className="create-post-form" onSubmit={this.handleUpdate}>
                        <div className="create-post-user-info">
                            <div id="post-user-image" onClick={() => this.handleUserShow(this.props.user.id)}>
                                {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-photo" /> 
                                : <img src={this.props.user.image} alt="user-photo" /> }
                            </div>
                            <div className="create-post-user-header">
                                <h3 id="poster-name" onClick={() => this.handleUserShow(this.props.user.id)}>{`${this.state.user.first_name} ${this.state.user.last_name}`}</h3>
                                <p>Professional Tester</p>
                            </div>
                        </div>
                        <input type="text" required placeholder="What do you want to talk about?" 
                        onChange={this.updateBody} value={this.state.post.body}/>
                        <div className="create-post-modal-footer">
                            <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                            <button type="submit" className="create-post-btn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    handleLike() {
        let likes = Object.values(this.props.likes).filter(
            (like) => like.likeable_id === this.props.post.id && like.user_id === this.props.current_user.id && like.likeable_type === 'Post'
        );
        if (likes.length > 0) {
            this.props.deleteLike(likes[0]);
        } else {
            this.props.createLike({
                user_id: this.props.user.id,
                likeable_id: this.props.post.id,
                likeable_type: 'Post',
                }
            );
        }
    }

    handleUpdate() {
        this.setState({update_modal_hidden: true});
        this.props.updatePost(this.state.post);
    }

    handleDelete() {
        this.setState({action_modal_hidden: true});
        this.props.deletePost(this.props.post);
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

    toggleComments() {
        this.setState({display_comments: !this.state.display_comments});
    }

    componentDidUpdate(prevProps) {
        
        if (!equal(this.props.comments, prevProps.comments)) {
            this.setState({comments: Object.values(this.props.comments).filter(
                (comment) => comment.post_id === this.props.post.id) });
        }
        if (!equal(this.props.likes, prevProps.likes)) {
            this.setState({
                likes: Object.values(this.props.likes).filter(
                (like) => like.likeable_id === this.props.post.id), 
                is_liked: Object.values(this.props.likes).filter( like => this.props.current_user.id === like.user_id && this.props.post.id === like.likeable_id && like.likeable_type === 'Post').length > 0
            });
        }
    }

    actionModal() {
        return (
            <div className="post-actions-modal">
                <div className="edit-post-action" onClick={this.toggleUpdateModal}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    <p>Edit Post</p>
                </div>
                <div className="delete-post-action" onClick={this.handleDelete}>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    <p>Delete Post</p>
                </div>
            </div>
        )
    }

    renderPost() {
        return (
            <div className="post">
                {this.state.update_modal_hidden ? "" : this.updateModal()}
                <div className="post-top">
                    <div className="post-header">
                            <div id="post-user-image" onClick={() => this.handleUserShow(this.props.user.id)}>
                            {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-photo" /> 
                            : <img src={this.props.user.image} alt="user-photo" /> }
                            </div>
                        <div className="post-header-info">
                            <div id="poster-info">
                                <p id="poster-name" onClick={() => this.handleUserShow(this.props.user.id)}>{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                                <p id="poster-pronouns">{`(${this.props.user.pronouns})`}</p>
                            </div>
                            <p id="poster-profession">{`${this.props.user.headline}`}</p>
                        </div>
                    </div>
                    {this.props.post.user_id === this.props.current_user.id ? <div className="post-actions">
                        <div id="post-actions-toggler" onClick={this.openActionModal}>
                            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                        </div>
                    </div>: ""}
                </div>
                <div className="post-body">
                    {this.props.post.body} 
                </div>
                <div id="post-img">{Boolean(this.props.post.image) ? <img src={this.props.post.image} alt="post-image" /> : ""}</div>
                <div className="likes-comments-info">
                    <p className={Object.values(this.props.likes).filter(like => like.user_id === this.props.current_user.id && like.likeable_id === this.props.post.id && like.likeable_type === 'Post').length > 0 ? "likes-count likes-count-liked" : "likes-count"}>{Object.values(this.props.likes).filter(like => like.likeable_id === this.props.post.id && like.likeable_type === 'Post').length} likes</p>
                    <p className="comments-count" onClick={this.toggleComments}>{Object.values(this.props.comments).filter(comment => comment.post_id === this.props.post.id).length} comments</p>
                </div>
                <div className="post-btn-divider"></div>
                <div className="post-btn-container">
                    <div className={Object.values(this.props.likes).filter(like => like.user_id === this.props.current_user.id && like.likeable_id === this.props.post.id && like.likeable_type === 'Post').length > 0 ? "post-btn post-btn-liked" : "post-btn"} onClick={() => this.handleLike()}>
                        <div id="fa-thumbs-up">
                            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                        </div>
                            
                        <p>Like</p>
                    </div>
                    <div className="post-btn" onClick={this.toggleComments}>
                        <div id="fa-comment">
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                        </div>
                        <p>Comment</p>
                    </div>
                </div>
                {this.state.display_comments ? <div className="comment-container">
                    <CommentFormContainer post={this.props.post}/>
                    <CommentIndexContainer post={this.props.post}/>
                </div>: ""}
                {this.state.action_modal_hidden ? "" : this.actionModal()}
            </div>
        )
    }

    render() {
        return this.state.user && this.renderPost();
    }
}

export default PostIndexItem;