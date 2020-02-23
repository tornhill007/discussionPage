import React from "react";

class EditModal extends React.Component{
    constructor(props) {
        super(props);

        console.log(props);
        console.log(props.id)

        this.state = {
            id: this.props.id,
            text: this.props.text
        };

        this.changeText = this.changeText.bind(this);
    }

    close() {
        this.props.closeModal();
    }

    newRef = React.createRef();

    updateNewInputText = (newText) => {
        this.state.text = newText;
    };

    changeText() {
        this.setState({
            text: this.newRef.current.value
        });
    }


    updateData = (id, data) => {
        this.props.updateComment(id, data).then((response) => {
            console.log(response);
            if (response.errors === undefined) {
                this.props.getCommentsList().then((response) => {
                    this.props.setComments(response.data);
                });
            }
        });
    };

    save() {
        console.log('SAVE');
        console.log(this.props.id);
        const {id, text} = this.state;
        this.props.editComment(id, text);
        const text1 = this.newRef.current.value;
        console.log('RREEFF', text1);
        this.updateData(this.props.id, {text: text1});
        this.close();
    }

    render() {

        return (
            <div>
                <div className="modal-body">
                    {console.log(this.props)}
                    <textarea ref={this.newRef} onChange={this.changeText} value={this.state.text} cols="40"/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => this.save()}>Save changes</button>
                    <button type="button" className="btn btn-secondary" onClick={() => this.close()}>Close</button>
                </div>
            </div>
        )
    }
}

export default EditModal;