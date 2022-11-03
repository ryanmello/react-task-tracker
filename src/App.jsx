import React from 'react'
import "./App.css"
import Title from './components/Title.jsx'
import Todo from './components/Todo.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div className='todo_wrapper'>
        <Todo />
        <Todo />
        <Todo />
      </div>
      <Modal />
    </div>
  );
}

export default App;
