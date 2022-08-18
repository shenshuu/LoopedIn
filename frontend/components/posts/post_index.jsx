import React from 'react';
import PostFormContainer from './post_form_container';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PostFormContainer />
                <ul>
                    {this.props.posts.map((post, i) => {
                        return <PostIndexItemContainer post={post} key={post+i}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default PostIndex;