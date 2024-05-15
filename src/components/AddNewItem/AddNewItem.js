import React, { Component } from "react";
import "./style.css";

export default class AddNewItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddItem(this.state.label)
        this.setState({
            label: ''
        })
    }

     render() {
          return (
              <form className="d-flex" onSubmit={ this.onSubmit }>
                   <input type="text"
                          className="form-control search-input"
                          placeholder="type to add new todo"
                          value={ this.state.label }
                          onChange={ this.onLabelChange }/>
                   <button type="button"
                           className="btn btn-outline-success">Add</button>
              </form>
          )
     }
}