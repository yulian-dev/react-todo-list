import React, {Component} from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import AddNewItem from "../AddNewItem";
import "./style.css";

export default class App extends Component {

    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make awesome app'),
            this.createTodoItem('Have a lunch')
        ],
        filter: 'all'
    }

    initialState = [...this.state.todoData]

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            important: false,
            done: false
        }
    }

    onDeleteItem = (id) => {
        this.setState(({todoData}) => {
            const newTodoData = todoData.filter(item => item.id !== id)
            return {
                todoData: newTodoData
            }
        })
    }

    onAddNewItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem]

            return {
                todoData: newArray
            }
        })
    }

    toggleStatus(id, key) {
        const items = [...this.state.todoData]
        items.forEach(item => {
            if (item.id === id) {
                item[key] = !item[key]
            }
        })
        return items
    }

    onToggleImportant = (id) => {
        this.setState({
            todoData: this.toggleStatus(id, 'important')
        })
    }

    onToggleDone = (id) => {
        this.setState({
            todoData: this.toggleStatus(id, 'done')
        })
    }

    onSearchData = (label) => {
        if (label) {
            const filteredData = this.initialState.filter(item => item.label.toLowerCase().includes(label))
            this.setState({
                todoData: filteredData
            })
        } else {
            this.setState({
                todoData: this.initialState
            })
        }
    }

    onFilterData = (e) => {
        const status = e.target.textContent
        switch (status) {
            case 'Active':
                this.addDataToState(this.initialState.filter(item => !item.done), 'active')
                break;
            case 'Done':
                this.addDataToState(this.initialState.filter(item => item.done), 'done')
                break;
            default:
                this.addDataToState(this.initialState, 'all')
        }
    }

    addDataToState = (data, filter) => {
        this.setState({
            todoData: data,
            filter: filter
        })
    }

    render() {
        const {todoData, filter} = this.state
        const doneCount = this.state.todoData.filter(item => item.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>

                <div className="top-panel d-flex">
                    <SearchPanel search={this.onSearchData}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilter={this.onFilterData}/>
                </div>

                <TodoList
                    todos={todoData}
                    onDelete={this.onDeleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <div className="bottom-panel">
                    <AddNewItem onAddItem={this.onAddNewItem}/>
                </div>
            </div>
        )
    }
}