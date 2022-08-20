import React from 'react';
import PostFormContainer from './post_form_container';
import PostIndexItemContainer from './post_index_item_container';
import equal from 'fast-deep-equal';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts,
        };
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.posts, prevProps.posts)) {
            this.setState({posts: this.props.posts});
        }
    }

    componentDidMount() {
        // console.log('inside componentDidMount: ', this.props.fetchPosts);
        // debugger;
        this.props.fetchPosts().then();
        this.setState({posts: this.props.posts});
    }

    render() {
        // console.log('inside render: ', this.props.fetchPosts);
        // debugger;
        return (
            <div>
                <PostFormContainer />
                <ul>
                    {Object.values(this.state.posts).map((post, i) => {
                        return <PostIndexItemContainer post={post} key={post+i} /> 
                    })}
                </ul>
            </div>
        )
    }
}

export default PostIndex;