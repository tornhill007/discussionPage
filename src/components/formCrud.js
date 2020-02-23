import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Form, Col, Button } from "react-bootstrap";

const FieldInput = ({ input, type, placeholder, as }) => {
    return (
        <Form.Control
            type={type}
            placeholder={placeholder}
            value={input.value}
            as={as}
            onChange={input.onChange} />
    )
};

const CrudForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Field
                        name="authorName"
                        component={FieldInput}
                        type="text"
                        placeholder="Author name"

                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Field
                        name="text"
                        component={FieldInput}
                        as="textarea" rows="3"
                        placeholder="Comment text"
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <div className='custom-control custom-switch'>
                    <Field
                        name="state"
                        component='input'
                        type='checkbox'
                        className='custom-control-input'
                        id='customSwitchesChecked'
                        defaultChecked={false}
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                        Negative / Positive
                    </label>
                </div>
            </Form.Row>

            <Form.Row>
                <Button variant="primary" type="submit" style={{marginRight: '40px'}}>
                    Submit+
                </Button>
            </Form.Row>
        </Form>
    )
};

export const CrudReduxForm = reduxForm({
    form: 'crud'
})(CrudForm);

export const CommentsReduxForm = reduxForm({
    form: 'comments'
})(CrudForm);