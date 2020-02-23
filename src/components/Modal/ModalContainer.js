import React from 'react';
import {connect} from "react-redux";
import Modal from "./Modal";
import {closeModalAC, openModalAC} from "../../reducers/commentsReducer";

let mapStateToProps = (state) => {
    return {
        commentsPage: state.commentsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);