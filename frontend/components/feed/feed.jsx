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
        this.props.fetchPosts();
        this.props.fetchConnects();
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.user, prevProps.user)) {
            this.setState({user: this.props.user});
        }
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