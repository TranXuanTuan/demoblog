import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const Comment = (props) => {
    return (
        <div className="post-comment">
            <h3>Leave a comment</h3>
        <Form>
            <Row>
                <Col xs="6">
                    <FormGroup>
                        <Input type="text" name="name" id="name" placeholder="Name *" />
                    </FormGroup>
                </Col>
                <Col xs="6">
                    <FormGroup>
                        <Input type="email" name="email" id="email" placeholder="Email *" />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Input type="textarea" name="comment" id="comment" placeholder="Comment *"/>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    I agree that my submitted data is being collected and stored. *
        </Label>
            </FormGroup>
            <Button>Leave a comment</Button>
        </Form>
        </div>
    );
}

export default Comment;