import React from "react";
import TodoListItem from "../TodoListItem";
import "./style.css";

const TodoList = ({ todos, onDelete, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((todo) => {

        const { id, ...itemProps } = todo;

        return (
            <li key={id} className='list-group-item'>
                <TodoListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        )
    })
    return (
        <ul className='list-group todo-list'>
            { elements }
        </ul>
    )
}

export default TodoList;