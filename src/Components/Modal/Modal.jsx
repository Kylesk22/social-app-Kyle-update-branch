import React from "react";
import "./Modal.css";


const MyModal = (props) => {

    return (
        <div classNameName="modal" id="myModal" >
        <div className="modal-dialog" role="document" >
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Workout</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
                </button>
            </div>
            <div className="modal-body">
                <p>{props.workout}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default MyModal;