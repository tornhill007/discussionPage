import React from "react";
import {CommentsReduxForm, CrudReduxForm} from "./formCrud";
import classes from './CommentsList.module.css';
import ModalContainer from "./Modal/ModalContainer";
import EditModalContainer from "./Modal/EditModal/EditModalContainer";
import ImplementFormContainer from "./ImplementForm/ImplementFormContainer";

class CommentsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isForm: null,
            isClose: true
        };

    }

    componentDidMount() {
        if (this.props.comments.length === 0) {
            this.props.getCommentsList().then((response) => {
                this.props.setComments(response.data);
            });
        }
    }


    delData = (id) => {
        this.props.deleteComment(id).then((response) => {
            if (response.data.deletedCount > 0) {
                // remove this comment from reducer
                this.props.setComments(this.props.comments.filter(x => (x._id != id)));
            } else {
                // print error (cannot remove)
            }
        });
    };

    onSubmit = (formData) => {

        if (formData.state === undefined) {
            formData.state = false;
        }
        console.log(formData);
        this.props.addComment(formData).then((response) => {
            if (response.errors === undefined) {
                this.props.getCommentsList().then((response) => {
                    this.props.setComments(response.data);
                });
            } else {

            }
        });
    };

    openForm = (id) => {
        if (this.state.isClose) {
            this.setState({
                isForm: id,
                isClose: false
            });
        }
        if (this.state.isClose === false) {
            this.setState({
                isForm: null,
                isClose: true
            });
        }
    };


    edit = (id, text) => {
        this.props.openModal(<EditModalContainer id={id} text={text}/>);
    };

    render() {


        return (
            <div>
                <div>
                    <h1>Create new record</h1>
                    <ModalContainer/>
                    <CrudReduxForm onSubmit={this.onSubmit}/>
                </div>
                <div className={classes.wrapBlock}>
                    {this.props.comments.map(comment => comment.parentId === null ?
                        <div className={classes.container} key={comment._id}>
                            <div
                                className={`${classes.wrapper} ${comment.state == true ? classes.statePositive : classes.stateNegative}`}>
                                <div className={classes.header}>
                                    <div>
                                <span className={classes.itemName}>
                                    {comment.authorName}
                                </span>
                                    </div>
                                    <div>
                                    <span className={classes.itemTime}>
                                        posted: {comment.creationTime}
                                    </span>
                                    </div>
                                </div>
                                <div className={classes.body}>
                                    <div>
                                    <span>
                                        {comment.text}
                                    </span>
                                    </div>
                                </div>
                                <div className={classes.btnWrap}>
                                    <div>
                                        <button className={classes.btnEdit} onClick={() => {
                                            this.edit(comment._id, comment.text)
                                        }}>EDIT
                                        </button>
                                    </div>
                                    <div>
                                        <button className={classes.btnDelete}
                                                onClick={() => this.delData(comment._id)}>DELETE
                                        </button>
                                    </div>
                                    <div>
                                        <button className={classes.btnEdit}
                                                onClick={() => this.openForm(comment._id)}>add comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {this.state.isForm === comment._id ?
                                <div>
                                    <ImplementFormContainer parentId={comment._id}/>
                                </div> : null}
                            <div className={classes.clear}></div>
                            <div className={classes.containerNew}>
                                {this.props.comments.map(commentNew => (commentNew.parentId === comment._id) ?
                                    <div key={commentNew._id}>
                                        <div
                                            className={`${classes.wrapperNew} ${commentNew.state == true ? classes.statePositive : classes.stateNegative}`}>
                                            <div className={classes.header}>
                                                <div>
                                <span className={classes.itemName}>
                                    {commentNew.authorName}
                                </span>
                                                </div>
                                                <div>
                                    <span className={classes.itemTime}>
                                        posted: {commentNew.creationTime}
                                    </span>
                                                </div>
                                            </div>
                                            <div className={classes.body}>
                                                <div>
                                    <span>
                                        {commentNew.text}
                                    </span>
                                                </div>
                                            </div>
                                            <div className={classes.btnWrap}>
                                                <div>
                                                    <button className={classes.btnEdit} onClick={() => {
                                                        this.edit(commentNew._id, commentNew.text)
                                                    }}>EDIT
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className={classes.btnDelete}
                                                            onClick={() => this.delData(commentNew._id)}>DELETE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                                )}
                            </div>
                        </div> : null
                    )}
                </div>
            </div>
        )
    }
};

export default CommentsList;