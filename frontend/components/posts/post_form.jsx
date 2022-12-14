import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPen, faImage, faVideo, faCalendarDays, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            post: this.props.post,
            modal_hidden: true,
        }
        this.handleUserShow = this.handleUserShow.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.createModal = this.createModal.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    handleUserShow() {
        this.props.history.push(`/users/${this.props.user.id}`);
    }

    handleCreate(e) {
        e.preventDefault();
        const formData = new FormData();
        if (e.target[1].files[0]) {
            formData.append('post[image]', e.target[1].files[0]);
        }
        formData.append('post[body]', this.state.post.body);
        formData.append('post[user_id]', this.state.post.user_id);
        $.ajax({
            url: `/api/posts`,
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
        }).then(() => {
            this.setState({
                post: {
                    user_id: "",
                    body: "",
                }
            });
            this.props.fetchPosts().then(posts => {
                this.setState({posts: posts});
            });
        })
        this.setState({modal_hidden: true});
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
                        <div className="close-create-post-modal" onClick={this.toggleModal}>
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="create-post-modal-header-divider"></div>
                    <form className="create-post-form" onSubmit={this.handleCreate}>
                        <div className="create-post-user-info">
                            <div id="post-user-image" onClick={() => this.handleUserShow()}>
                                {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-profile-photo" /> 
                                : <img src={this.props.user.image} alt="user-profile-photo" /> }
                            </div>
                            <div className="create-post-user-header">
                                <h3 id="poster-name" onClick={() => this.handleUserShow()}>{`${this.state.user.first_name} ${this.state.user.last_name}`}</h3>
                                <p>Professional Tester</p>
                            </div>
                        </div>
                        <input type="text" required placeholder="What do you want to talk about?" onChange={this.updateBody}/>
                        <div className="create-post-modal-footer">
                            <div>
                                <input type="file" accept="image/png, image/jpeg" />
                            </div>
                            <button type="submit" className="create-post-btn">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="post-form-content">
                {this.state.modal_hidden ? "" : this.createModal()}
                <div className="post-form-input">
                    <div id="post-user-image" onClick={() => this.handleUserShow()}>
                        {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-profile-photo" /> 
                        : <img src={this.props.user.image} alt="user-profile-photo" /> }
                    </div>
                    <div className="post-form-container" onClick={this.toggleModal}>
                        <div id="create-post-pen"><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></div>
                        <form className="post-form">
                            <p className="post-form-placeholder">Have a topic that excites you? Post about it</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostForm;