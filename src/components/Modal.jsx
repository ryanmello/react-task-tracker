import "./Modal.css";

function Modal({ confirmation }) {
  function printCancel() {
    console.log("cancel");
  }

  function printConfirm() {
    console.log("confirm");
  }

  return (
    <>
      <div className="modal">
        <p className="modal__title">{confirmation}</p>
        <div className="modal__buttons">
          <button onClick={() => printCancel()} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={printConfirm} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
