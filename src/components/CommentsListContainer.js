import { connect } from "react-redux";
import CommentsList from "./CommentsList";
import {editCommentAC, openModalAC, setCommentsAC} from "../reducers/commentsReducer";
import { getCommentsList, deleteComment, getCommentById, addComment } from "../actions/commentActions";

let mapStateToProps = (state) => {
    return {
        comments: state.commentsPage.comments,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setComments: (comments) => {
            dispatch(setCommentsAC(comments));
        },
        getCommentsList: getCommentsList,
        deleteComment: deleteComment,
        getCommentById: getCommentById,
        addComment: addComment,
        openModal: (content) => {
            dispatch(openModalAC(content));
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);