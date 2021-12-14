import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text: text, isCompleted: false }]);
  };

  const handleDelete = (e) => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  const handleComplete = (e) => {
    const index = Number(e.target.id);
    let temp = [...todos];
    let currentTodo = { ...temp[index] };
    currentTodo.isCompleted = e.target.checked;
    temp.splice(index, 1, currentTodo);
    setTodos(temp);
  };

  const renderTodos = todos.map((todo, i) => {
    return (
      <div className="todo" key={i} id={i}>
        <div className="ui left floated compact segment">
          <div className="fitted checkbox">
            <input
              id={i}
              type="checkbox"
              className="checkbox"
              onChange={handleComplete}
              checked={todo.isCompleted}
            />
            <label></label>
          </div>
        </div>
        <div>{todo.text}</div>

        <button id={i} onClick={handleDelete} className="ui button">
          <div className="content">
            <i className="trash alternate icon"></i>
          </div>
        </button>
      </div>
    );
  });

  return (
    <div className="app">
      <div>
        <h1>ToDos</h1>
      </div>
      <div className="todo-list">
        {renderTodos}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
