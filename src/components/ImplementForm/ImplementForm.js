import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const ImplementForm = (props) => {



    const newRef = React.createRef();
    const newRef1 = React.createRef();
    const newRef2 = React.createRef();

    const handleSubmit = event => {
        const form = event.currentTarget;
        console.log(event);
        console.log(form);
        const formData = {
            authorName: newRef.current.value,
            text: newRef1.current.value,
            state: newRef2.current.checked,
            parentId: props.parentId
        };
        console.log(formData);
        props.addComment(formData).then((response) => {
            console.log(response.data);
            if (response.errors === undefined) {
                props.getCommentsList().then((response) => {
                    props.setComments(response.data);
                });
            } else {

            }
        });
        event.preventDefault();
        event.stopPropagation();
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Row>
                    <Col>
                        <Form.Control as="input" placeholder="Author name" ref={newRef}/>
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="3" placeholder="text" ref={newRef1}/>
            </Form.Group>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Negative / Positive"
                ref={newRef2}
            />

            <Button type="submit">Reply</Button>
        </Form>

    )
};

export default ImplementForm;
