import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
    state = { term: '' };

    onSearchChange = (e) => {
        const searchTerm = e.target.value;
        this.setState({term: searchTerm});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        //send a submmited term to app.js
        this.props.onFormSubmit(
            this.state.term
        );
    }


    render() {
        return (
            <form onSubmit={this.onFormSubmit} autoComplete="off" >
                <TextField 
                id="standard-basic" 
                label="Search" 
                value={this.state.term}
                onChange={this.onSearchChange}
                fullWidth
                />
            </form>
        )
    }
}

export default SearchBar;
