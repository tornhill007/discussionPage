import React from "react";
import './style.css'

class Modal extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {
        const { isOpen, content } = this.props.commentsPage;

        if(!isOpen) return null;

        console.log(this.props);


        return (
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit comment</h5>
                            <button type="button" className="close">
                                <span>&times;</span>
                            </button>
                        </div>
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;