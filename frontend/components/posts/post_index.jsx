import PostFormContainer from './post_form_container';
import PostIndexItemContainer from './post_index_item_container';
import { IoMdArrowDropdown } from 'react-icons/io';
import equal from 'fast-deep-equal';
import React from 'react';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_sort_by: false,
            sort_by: "Recent"
        };
        this.sortByModal = this.sortByModal.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.posts, prevProps.posts)) {
            this.setState({posts: this.props.posts});
        }
    }

    componentDidMount() {
        this.props.fetchComments();
        this.props.fetchLikes();
    }

    sortByModal() {
        return (
            <div id="sort-modal">
                <div id="recent">Recent</div>
                <div id="sort">Sort</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <PostFormContainer />
                <div id="post-form-separator-container">
                    <div id="post-form-separator"></div>
                    <span id="sort-by">Sort by: <span id="selected-sort">{this.state.sort_by} <IoMdArrowDropdown /></span></span>
                    {this.state.display_sort_by ? this.sortByModal() : ""}
                </div>
                <ul>
                    {Object.values(this.props.posts).reverse().map((post, i) => {
                        return <PostIndexItemContainer post={post} key={post+i} /> 
                    })}
                </ul>
            </div>
        )
    }
}

export default PostIndex;