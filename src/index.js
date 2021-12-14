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
    console.log(index);
    let temp = [...todos];
    console.log(temp);
    temp.splice(index, 1);
    setTodos(temp);
  };

  const renderTodos = todos.map((todo, i) => {
    return (
      <div className="todo" key={i} id={i}>
        <div class="ui left floated compact segment">
          <div class="fitted checkbox">
            <input type="checkbox" />
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
