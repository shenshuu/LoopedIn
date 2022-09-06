import SearchResultsIndexItemContainer from './search_results_index_item_container';
import React from 'react';

class SearchResultsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger;
        let that = this;
        return (
            <div id="search-results-index-container">
                <p id="search-results">Search results</p>
                <p id="search-item-separator"></p>
                {Object.values(this.props.users).map((user, i) => {
                    const name = `${user.first_name} ${user.last_name}`.toLowerCase();
                    if (that.props.searchInput.length !== 0 && that.props.searchInput === name.slice(0, that.props.searchInput.length)) {
                        return <SearchResultsIndexItemContainer user={user} key={user+i+(Math.random()*100000)} toggleSearch={this.props.toggleSearch}/>
                    }
                })}
            </div>
        )
    }
}

export default SearchResultsIndex;