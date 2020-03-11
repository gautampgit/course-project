import React from 'react';
import unsplash from '../apis/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {

    constructor() {
        super();
        this.state ={
            images:[]
        }
    }
    //5BSTbChbrHOFZfn5PGaNZSqheiFSYMRChsIdT9rNnSo

     handleSearchSubmit = async (term) => {
         const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.handleSearchSubmit} />
                <ImageList images ={this.state.images}/>
            </div>
        );
    }
}
export default App;