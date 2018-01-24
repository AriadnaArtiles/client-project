import React, { Component } from 'react';
import '../App.css';
import Encabezado from './Encabezado';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
            ],
            nextId: 1
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({ id: this.state.nextId, text: todoText });
        let nextId = this.state.nextId + 1;
        this.setState({
            todos: todos,
            nextId: nextId
        });
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        });
    }

    render() {
        return (
            <div className="App">
                <div className="todo-wrapper">
                    <Encabezado text="Vacunas" />
                    <TodoInput todoText="" addTodo={this.addTodo} />
                    <ul>
                        {
                            this.state.todos.map((todo) => {
                                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
