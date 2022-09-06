import React from 'react';

class SearchResultsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserShow = this.handleUserShow.bind(this);
    }

    handleUserShow() {
        this.props.history.push(`/users/${this.props.user.id}`);
        this.props.toggleSearch();
    }

    render() {
        return (
            <div>
                <div className="search-item" onClick={() => this.handleUserShow()}>
                    <div className="search-item-left">
                        <div className="search-item-user-image">
                            {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-photo" /> 
                            : <img src={this.props.user.image} alt="user-photo" /> }
                        </div>
                        <div className="search-item-user-info">
                            <p className="search-item-user-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                            <p className="search-item-user-headline">{this.props.user.headline}</p>
                        </div>
                    </div>
                    <div className="search-item-right">
                    
                    </div>
                </div>
                <div id="search-item-separator"></div>
            </div>
        )
    }
}

export default SearchResultsIndexItem;