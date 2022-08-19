import React from 'react';
import PostFormContainer from './post_form_container';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rerender: '',
            posts: this.props.posts,
        };
        this.rerender = this.rerender.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.posts !== this.props.posts) {
            this.setState({posts: this.props.posts});
        }
    }

    // componentDidMount() {
    //     this.props.fetchPosts();
    //     this.setState({state: this.props.state})
    //     console.log(this.state.posts);
    // }


    rerender() {
        console.log(this.props.posts);
        console.log(this.state.posts);
        this.setState({state: this.props.state});
        console.log(this.props.posts);
        console.log(this.state.posts);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <PostFormContainer />
                <ul>
                    {this.state.posts.map((post, i) => {
                        return <PostIndexItemContainer post={post} key={i} 
                        rerender={this.rerender} />
                    })}
                </ul>
            </div>
        )
    }
}

export default PostIndex;