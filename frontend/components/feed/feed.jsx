import React from 'react';
import SidebarContainer from './sidebar_container';
import PostIndexContainer from '../posts/post_index_container';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchComments();
    }

    render() {
        return (
            <div className="feed">
                <SidebarContainer />
                <PostIndexContainer />
            </div>
        )
    }
}

export default Feed;