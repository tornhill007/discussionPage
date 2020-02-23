import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import CommentsListContainer from "./components/CommentsListContainer";
import Header from "./components/Header/Header";
import FooterPage from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";

class App extends React.Component {

    // state = {comments: []};
    //
    // componentDidMount() {
    //     fetch('/comments')
    //         .then(res => res.json())
    //         .then(comments => this.setState({ comments }))
    // }

    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <div className="container">
                    <CommentsListContainer/>
                </div>
                <FooterPage/>

                {/*{*/}
                {/*    this.state.comments.map(comment => <li key={comment.id}>{comment.username}</li>)*/}
                {/*}*/}
            </div>
        );
    }

}

export default App;
