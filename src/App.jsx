import React, { useState } from 'react'
// import React, { useState } from 'react';
import "./App.css"
import Title from './components/Title.jsx'
import Todo from './components/Todo.jsx'
import Modal from './components/Modal.jsx'
import Counter from './components/Counter.jsx'


function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add Todo</button>
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
      {showModal && <Modal confirmation="Confirm Delete?" />}
      <Counter />
    </div>
  );
}

export default App;
