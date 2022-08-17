import React from 'react';
import Sidebar from './sidebar';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="feed">
                <Sidebar />
            </div>
        )
    }
}

export default Feed;