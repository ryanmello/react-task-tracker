import './Modal.css'

function Modal({ confirmation }) {
    return (
        <>
            <div className="modal">
                <p className="modal__title">{confirmation}</p>
                <div className="modal__buttons">
                    <button className="btn btn__cancel">Cancel</button>
                    <button className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}

export default Modal