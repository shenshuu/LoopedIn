import React from 'react';

class SearchResultsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let that = this;
        return (
            <div id="search-results-index-container">
                results
                {Object.values(this.props.users).map((user, i) => {
                    debugger;
                    const name = `${user.first_name} ${user.last_name}`.toLowerCase();
                    if (that.props.searchInput.length !== 0 && that.props.searchInput === name.slice(0, that.props.searchInput.length)) {
                        return <div>${name}</div>
                    }
                })}
            </div>
        )
    }
}

export default SearchResultsIndex;