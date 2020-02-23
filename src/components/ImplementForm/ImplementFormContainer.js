import { connect } from "react-redux";
import ImplementForm from "./ImplementForm";
import {addComment, getCommentsList} from "../../actions/commentActions";
import {setCommentsAC} from "../../reducers/commentsReducer";

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
        addComment: addComment,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImplementForm);