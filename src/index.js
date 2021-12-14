import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'get programming job',
      isCompleted: false,
    },
    {
      text: 'live the dream',
      isCompleted: false,
    },
  ]);

  const renderTodos = todos.map((todo, i) => {
    return (
      <div className="todo" key={i}>
        {todo.text}
      </div>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setTodos([...todos, { text: value, isCompleted: false }]);
    setValue('');
  };

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
