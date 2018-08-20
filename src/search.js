import React, {Component } from 'react';


class Search extends Component {
    render() {
        return(
            <form id="Search" className="Search">
                <input type="search" placeholder="Buscar por titulo"></input>
            </form>
        )
    }
}

export default Search;