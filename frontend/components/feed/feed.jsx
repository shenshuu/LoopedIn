import React from 'react';
import SidebarContainer from './sidebar_container';
import PostIndex from '../posts/post_index';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="feed">
                <SidebarContainer />
                <PostIndex />
            </div>
        )
    }
}

export default Feed;