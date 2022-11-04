import React, { useState } from "react";
// import React, { useState } from 'react';
import "./App.css";
import Title from "./components/Title.jsx";
import Todo from "./components/Todo.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
  }

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => null}>Add Todo</button>
      </div>
      <div className="todo_wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finished Frontend Simplified"/>
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land $100k Job" />
      </div>
      {showModal && (
        <Modal
          confirmation="Confirm Delete?"
          cancelModal={cancelModal}
          confirmModal={confirmModal}
        />
      )}
    </div>
  );
}

export default App;
