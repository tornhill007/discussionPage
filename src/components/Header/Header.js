import React from "react";
import {Navbar} from "react-bootstrap";
import classes from './Header.module.css';

const Header = (props) => {

    let counterPositive = 0;
    let counterNegative = 0;

    props.comments.forEach(function (item) {
        if(item.state === true && item.parentId === null) {
            counterPositive++;
        }
        else if(item.state === false && item.parentId === null) counterNegative++;
    });

    return (
        <>
            <div className={classes.container}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <div className={classes.wrap}>
                    <div>
                    <img
                        alt="some people"
                        src="https://webstockreview.net/images/collaboration-clipart-discussion-3.png"
                        width="80"
                        height="55"
                        className="d-inline-block align-top"
                    />{' '}
                    </div>
                    <div className={classes.itemRight}>
                   <span>Discussion page</span>
                    </div>
                        <div className={classes.itemWrap}>
                            <div>
                                <span>Comment's statistic:</span>
                            </div>
                            <div className={classes.itemStat}>
                                <span>Negative comments: {counterNegative}</span>
                                <span>Positive comments: {counterPositive}</span>
                            </div>
                        </div>
                    </div>
                </Navbar.Brand>
            </Navbar>
            </div>
        </>
    )
};

export default Header;