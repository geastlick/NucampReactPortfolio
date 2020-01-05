import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

class ContactUs extends Component {
    render() {
        return (
            <div id="content" className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="name" className="col-sm-2">Name</Label>
                                <Col className="col-sm-10">
                                    <Input type="text" id="name" required />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="company" className="col-sm-2">Company</Label>
                                <Col className="col-sm-10">
                                    <Input type="text" id="company" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" className="col-sm-2">Email address</Label>
                                <Col>
                                    <Input type="email" id="email" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phone" className="col-sm-2">Phone</Label>
                                <Col>
                                    <Input type="tel" id="phone" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-sm-2">Preferred Contact</Label>
                                <Col>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="preferredContact"
                                                id="preferredContactEmail" value="email" defaultChecked /> Email
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="preferredContact"
                                                id="preferredContactPhone" value="phone" /> Phone
                                    </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="contactReason" className="col-sm-2">Contact Reason</Label>
                                <Col>
                                    <Input type="select" id="contactReason">
                                        <option>More Information</option>
                                        <option>Demo</option>
                                        <option>Feedback</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="comments" className="col-sm-2">Comments</Label>
                                <Col>
                                    <Input type="textarea" id="comments" rows="5" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col className="offset-sm-2">
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;