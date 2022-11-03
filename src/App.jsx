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
        <Todo 
          title="Finished Frontend Simplified"
          paragraph="Code along with Frontend Simplofied step by step"
        />
        <Todo 
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next six weeks"
        />
        <Todo 
          title="Land $100k Job"
          paragraph="Apply to 100 jobs"
        />
      </div>
      <Modal 
        confirmation="Are you sure?"
      />
    </div>
  );
}

export default App;
