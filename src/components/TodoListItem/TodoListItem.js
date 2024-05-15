import React from "react";
import "./style.css";

const TodoListItem = ({label, onDelete, onToggleImportant, onToggleDone, done, important}) => {

    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }
    if (important) {
        classNames += ' important';
    }

    return (
        <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>
            <div className="todo-list-button">
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-sm float-right"
                    onClick={onDelete}>
                    <i className="fa-solid fa-trash"/>
                </button>
            </div>
        </span>
    )
}

export default TodoListItem;