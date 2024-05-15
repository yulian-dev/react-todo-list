import React, {Component} from "react";
import "./style.css";

export default class SearchPanel extends Component {

    state = {
        label: ''
    }

    onSearchData = (e) => {
        this.props.search(e.target.value.toLowerCase())
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   onChange={ this.onSearchData }
            />
        )
    }
}