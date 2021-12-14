import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setTodos([...todos, { text: value, isCompleted: false }]);
    setValue('');
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
        {todo.text}{' '}
        <button id={i} onClick={handleDelete} className="ui button">
          <div className="content">
            <i className="trash alternate icon"></i>
          </div>
        </button>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div>
        <h1>ToDos</h1>
      </div>
      <div>{renderTodos}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          className="input"
          value={value}
          placeholder="Add Todo ..."
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
