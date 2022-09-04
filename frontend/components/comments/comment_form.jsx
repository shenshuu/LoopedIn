import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: props.user.id,
            post_id: props.post.id,
            body: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({body: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({body: ''});
    }

    render() {
        return (
            <div className="comment-form-container">
                <div id="comment-form-user-image">
                    {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-photo" /> 
                    : <img src={this.props.user.image} alt="user-photo" /> }
                </div>
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body}
                    placeholder="Add a comment..."
                    onChange={this.update}
                    />
                    <button className="create-post-btn" type="submit">Post</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;