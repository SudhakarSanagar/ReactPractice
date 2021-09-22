function Modal(props) {
    function cancelHandler() {
        props.onCancel();
    }

    return (
        <div className="modal">
            <p>Are you sure you want to delete {props.title}</p>
            <div>
                <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
                <button className="btn" onClick={props.onConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default Modal;