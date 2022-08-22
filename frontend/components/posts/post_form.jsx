import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            post: this.props.post,
            modal_hidden: true,
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.createModal = this.createModal.bind(this);
        this.postOption = this.postOption.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    handleCreate(e) {
        e.preventDefault();
        this.setState({modal_hidden: true});
        this.props.createPost(this.state.post);
    }

    updateBody(e) {
        this.setState({post: {body: e.target.value}});
    }

    toggleModal() {
        this.setState({modal_hidden: !this.state.modal_hidden});
    }

    createModal() {
        return (
            <div>
                <div id="overlay" onClick={this.toggleModal}></div>
                <div className="create-post-modal">
                    <div className="create-post-modal-header">
                        <h2>Create a post</h2>
                        <div className="close-create-post-modal" onClick={this.toggleModal}><CloseRoundedIcon /></div>
                    </div>
                    <div className="create-post-modal-header-divider"></div>
                    <form className="create-post-form" onSubmit={this.handleCreate}>
                        <div className="create-post-user-info">
                            <AccountCircle />
                            <div className="create-post-user-header">
                                <h3>{`${this.state.user.first_name} ${this.state.user.last_name}`}</h3>
                                <p>Professional Tester</p>
                            </div>
                        </div>
                        <input type="text" required placeholder="What do you want to talk about?" onChange={this.updateBody}/>
                        <div className="create-post-modal-footer">
                            <div>
                                <input type="file" accept="image/png, image/jpeg" />
                                {/* <InsertPhotoIcon /> */}
                            </div>
                            <button type="submit" className="create-post-btn">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    postOption() {
        return (
            <div className="post-option">
                <div className="option">
                    <InsertPhotoIcon className="photo-icon"/>
                    <p>Photo</p>
                </div>
                <div className="option">
                    <SubscriptionsIcon className="video-icon"/>
                    <p>Video</p>
                </div>
                <div className="option">
                    <EventNoteIcon className="event-icon"/>
                    <p>Event</p>
                </div>
                <div className="option">
                    <CalendarViewDayIcon className="article-icon"/>
                    <p>Write article</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="post-form-content">
                {this.state.modal_hidden ? "" : this.createModal()}
                <div className="post-form-container" onClick={this.toggleModal}>
                    <CreateIcon />
                    <form className="post-form">
                        <p className="post-form-placeholder">Have a topic that excites you? Post about it</p>
                        {/* <input type="text"
                        placeholder="Have a topic that excites you? Post about it" readOnly={true}/> */}
                    </form>
                </div>
                {this.postOption()}
            </div>
        )
    }
}

export default PostForm;