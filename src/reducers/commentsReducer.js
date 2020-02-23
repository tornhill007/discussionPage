import {CLOSE_MODAL, EDIT_COMMENTS, OPEN_MODAL, SET_COMMENTS} from "../common/constants";

const initState = {
    comments: [],
    isOpen: false,
    content: null
};

export default (state = initState, action) => {
    switch(action.type) {
        case SET_COMMENTS: {
            return {...state, comments: action.comments}
        }
        case OPEN_MODAL:
            return Object.assign({}, state, {
                isOpen: true,
                content: action.content
            });
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                isOpen: false
            });
        case EDIT_COMMENTS:
            const index = state.comments.findIndex(item => {
                console.log('INDEX', item._id, action);
                return (item._id === action.id);
            });
            console.log('index', index);
            state.comments[index].text = action.text;
            return Object.assign({}, state, {
                comments: state.comments
            });
        default:
            return state
    }
}

export const setCommentsAC = (comments) => ({type: SET_COMMENTS, comments});
export const openModalAC = (content) => ({type: OPEN_MODAL, content});
export const closeModalAC = () => ({type: CLOSE_MODAL});
export const editCommentAC = (id, text) => ({type: EDIT_COMMENTS, id, text});
