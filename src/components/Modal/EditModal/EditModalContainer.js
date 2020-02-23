import React from 'react';
import {connect} from "react-redux";
import EditModal from "./EditModal";
import {closeModalAC, editCommentAC, setCommentsAC} from "../../../reducers/commentsReducer";
import {getCommentsList, updateComment} from "../../../actions/commentActions";

let mapStateToProps = (state) => {
    return {
        comments: state.commentsPage.comments,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch(closeModalAC());
        },
        editComment: (id, text) => {
            dispatch(editCommentAC(id, text));
        },
        updateComment: updateComment,
        setComments: (comments) => {
            dispatch(setCommentsAC(comments));
        },
        getCommentsList: getCommentsList
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);