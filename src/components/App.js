import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {

    // constructor() {
    //     super();
    // }
    //5BSTbChbrHOFZfn5PGaNZSqheiFSYMRChsIdT9rNnSo

    handleSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 5BSTbChbrHOFZfn5PGaNZSqheiFSYMRChsIdT9rNnSo'
            }
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.handleSearchSubmit} />
            </div>
        );
    }
}
export default App;