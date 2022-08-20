import React from 'react';
import SidebarContainer from './sidebar_container';
import PostIndexContainer from '../posts/post_index_container';
import Widgets from '../widgets/widgets';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchComments();
        this.props.fetchPosts();
        this.props.fetchLikes();
    }

    render() {
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
}

export default Feed;