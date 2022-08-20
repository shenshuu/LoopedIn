import React from 'react';
import SidebarContainer from './sidebar_container';
import PostIndexContainer from '../posts/post_index_container';
import Widgets from '../widgets/widgets';
import equal from 'fast-deep-equal';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: this.props.user};
        this.renderFeed = this.renderFeed.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchComments();
        this.props.fetchPosts();
        this.props.fetchLikes();
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
                <PostIndexContainer />
                <Widgets />
                </div>
            </div>
        )
    }

    render() {
        return this.state.user && this.renderFeed();
    }
}

export default Feed;