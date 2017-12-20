import React, { Component } from 'react';
import '../App.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    removeTodo(id) {
        this.props.removeTodo(id);
    }
    render() {
        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Borrar</button>{this.props.todo.text}
            </div>
        );
    }
}