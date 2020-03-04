import React from 'react';
import '/home/enas/Documents/to-do-app/src/App.css';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
          return (
            <div className="collection-item" key={todo.id}>
              <span>{todo.content}</span>
              <button onClick={() => {deleteTodo(todo.id)}}>Delete
              </button>

            </div>
          )
        })
      ) : (
        <p className="center">You have no todo yet</p>
      );
    
      return (
        <div className="todos collection">
          {todoList}
        </div>
      )
    }
    export default Todos;