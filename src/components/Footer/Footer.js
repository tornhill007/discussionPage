import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import classes from './Footer.module.css';

const FooterPage = () => {
    return (

        <MDBFooter className="font-small pt-4 mt-4">
            <div className={classes.wrap}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Short information about this page</h5>
                        <p>
                            A small discussion page. The client part was developed with React Js and Redux to manage the state of the application. The server part was developed with Node Js(Express Js). MongoDB is used as the database management system.
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className={classes.title}>Links</h5>
                        <ul className={classes.wrapList}>
                            <li className="list-unstyled">
                                <a href="https://www.facebook.com/andrey.komar.54">Facebook</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://www.instagram.com/_andrey.komar/?hl=ru">Instagram</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://t.me/andrewkomar">Telegram</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">E-mail: tornhill1997@gmail.com</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Developed by: <a href="https://www.facebook.com/andrey.komar.54"> Andrew Komar </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;