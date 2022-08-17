import React from 'react';
import Sidebar from './sidebar';
import PostIndex from '../posts/post_index';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="feed">
                <Sidebar />
                <PostIndex />
            </div>
        )
    }
}

export default Feed;