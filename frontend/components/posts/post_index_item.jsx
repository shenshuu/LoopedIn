import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CreateIcon from '@mui/icons-material/Create';
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
            comments: [],
            likes: [],
            display_comments: false,
            action_modal_hidden: true,
            update_modal_hidden: true,
        }
        this.handleCreateLike = this.handleCreateLike.bind(this);
        this.handleDeleteLike = this.handleDeleteLike.bind(this);
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

    // handleLike() {
    //     let likes = Object.values(this.props.likes).filter(
    //         (like) => like.likeable_id === this.props.post.id && like.user_id === this.props.current_user.id && like.likeable_type === 'Post'
    //     );
    //     if (likes.length > 0) {
    //         this.props.deleteLike(likes[0]);
    //     } else {
    //         this.props.createLike({
    //             user_id: this.props.user.id,
    //             likeable_id: this.props.post.id,
    //             likeable_type: 'Post',
    //             }
    //         );
    //     }
    // }

    handleCreateLike() {
        this.setState({is_liked: true});
        this.props.createLike({
            user_id: this.props.current_user.id,
            likeable_id: this.props.post.id,
            likeable_type: 'Post',
            }
        );
    }

    handleDeleteLike() {
        this.setState({is_liked: false});
        let userLike = Object.values(this.props.likes).filter(
            (like) => like.likeable_id === this.props.post.id && like.user_id === this.props.current_user.id && like.likeable_type === 'Post'
        )[0]
        this.props.deleteLike(userLike);
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
        // debugger;
        this.setState({display_comments: !this.state.display_comments});
        this.props.deleteLikes();
    }

    componentDidMount() {
        this.props.fetchComments();
        this.props.fetchLikes();
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (!equal(this.props.comments, prevProps.comments)) {
            this.setState({comments: Object.values(this.props.comments).filter(
                (comment) => comment.post_id === this.props.post.id) });
        } else if (!equal(this.props.likes, prevProps.likes)) {
            this.setState({
                likes: Object.values(this.props.likes).filter(
                (like) => like.likeable_id === this.props.post.id), 
                is_liked: Object.values(this.props.likes).filter( like => this.props.current_user.id === like.user_id && this.props.post.id === like.likeable_id && like.likeable_type === 'Post').length > 0
            });
        } else if (!equal(this.state.comments, prevState.comments)) {
            this.setState({comments: this.state.comments});
        } else if (!equal(this.state.likes, prevState.likes)) {
            this.setState({likes: this.state.likes});
        } else if (!equal(this.props.current_user, prevProps.current_user)) {
            this.setState({comments: [], likes: []});
        }
    }

    actionModal() {
        return (
            <div className="post-actions-modal">
                <div className="edit-post-action" onClick={this.toggleUpdateModal}>
                    <CreateIcon />
                    <p>Edit Post</p>
                </div>
                <div className="delete-post-action" onClick={this.handleDelete}>
                    <DeleteRoundedIcon/>
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
                        <AccountCircle />
                        <div className="post-header-info">
                            <div id="poster-info">
                                <p id="poster-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                                <p id="poster-pronouns">{`(${this.props.user.pronouns})`}</p>
                            </div>
                            <p id="poster-profession">{`${this.props.user.headline}`}</p>
                        </div>
                    </div>
                    {this.props.post.user_id === this.props.current_user.id ? <div className="post-actions">
                        <MoreHorizRoundedIcon onClick={this.openActionModal}/>
                    </div>: ""}
                </div>
                <div className="post-body">
                    {this.props.post.body} 
                </div>
                <div className="likes-comments-info">
                    <p className={this.state.is_liked ? "likes-count likes-count-liked" : "likes-count"}>{this.state.likes.length} likes</p>
                    <p className="comments-count" onClick={this.toggleComments}>{this.state.comments.length} comments</p>
                </div>
                <div className="post-btn-divider"></div>
                <div className="post-btn-container">
                    <div className={this.state.is_liked ? "post-btn post-btn-liked" : "post-btn"} onClick={this.state.is_liked ? this.handleDeleteLike : this.handleCreateLike}>
                        <ThumbUpOffAltIcon />
                        <p>Like</p>
                    </div>
                    <div className="post-btn" onClick={this.toggleComments}>
                        <MessageRoundedIcon />
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