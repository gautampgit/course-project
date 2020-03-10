import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = {
            term: null,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleFormSubmit = this.handleInputChange.bind(this);
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    handleInputChange(event) {
        this.setState({ term: event.target.value });
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.handleInputChange} />
                    </div>

                </form>
            </div>
        );
    }
}
export default SearchBar;