import React from 'react';
import SidebarContainer from './sidebar_container';
import PostIndexContainer from '../posts/post_index_container';
import HeaderContainer from '../splash/header_container';
import Widgets from '../widgets/widgets';
import equal from 'fast-deep-equal';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            users: this.props.users,
            likes: this.props.likes,
            posts: this.props.posts,
            comments: this.props.comments, 
        };
        this.renderFeed = this.renderFeed.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        // this.props.fetchComments();
        this.props.fetchPosts();
        // this.props.fetchLikes();
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.user, prevProps.user)) {
            this.setState({user: this.props.user});
        }
        // } else if (!equal(this.props.likes, prevProps.likes)) {
        //     this.setState({likes: this.props.likes});
        // } else if (!equal(this.props.posts, prevProps.posts)) {
        //     this.setState({posts: this.props.posts});
        // } else if (!equal(this.props.comments, prevProps.comments)) {
        //     this.setState({comments: this.props.comments});
        // } else if (!equal(this.props.users, prevProps.users)) {
        //     this.setState({users: this.props.users});
        // }
    }


    renderFeed() {
        return (
            <div className="feed-container">
                <div className="feed">
                <SidebarContainer />
                <PostIndexContainer rerender={this.rerender} />
                <Widgets />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                {this.state.user && this.renderFeed()}
            </div>
        )
    }
}

export default Feed;