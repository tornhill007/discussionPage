import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        comments: state.commentsPage.comments,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);