import React, { Component } from "react";
import "./style.css";

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    render() {
        const {filter} = this.props
        const buttons = this.buttons.map(({name,label}) => {
            const onActive = filter === name ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button type="button"
                        className={`btn ${onActive}`}
                        onClick={ this.props.onFilter }
                        key={name}>{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}