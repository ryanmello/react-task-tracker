import React from 'react'
import "./App.css"
import Title from './components/Title.jsx'
import Todo from './components/Todo.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button>Add Todo</button>
      </div>
      <div className='todo_wrapper'>
        <Todo 
          title="Finished Frontend Simplified"
        />
        <Todo 
          title="Finish Interview Section"
        />
        <Todo 
          title="Land $100k Job"
        />
      </div>
      <Modal confirmation="Are you sure?" />
    </div>
  );
}

export default App;
