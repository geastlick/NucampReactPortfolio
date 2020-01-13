import React, { Component } from 'react';
import { Label, Row, Col, Button } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
            <div id="content" className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" className="col-sm-2">Name</Label>
                                <Col className="col-sm-10">
                                    <Control.text model=".name" id="name" name="name" required />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="company" className="col-sm-2">Company</Label>
                                <Col className="col-sm-10">
                                    <Control.text model=".company" id="company" name="company" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" className="col-sm-2">Email address</Label>
                                <Col>
                                    <Control.text type="email" model=".email" id="email" name="email" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phone" className="col-sm-2">Phone</Label>
                                <Col>
                                    <Control.text type="tel" model=".phone" id="phone" name="phone" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label className="col-sm-2">Preferred Contact</Label>
                                <Col>
                                    <div className="form-check inline">
                                        <Label check>
                                            <Control.radio model=".preferredContact" name="preferredContact"
                                                id="preferredContactEmail" value="email" defaultChecked /> Email
                                    </Label>
                                    </div>
                                    <div className="form-check inline">
                                        <Label check>
                                            <Control.radio model=".preferredContact" name="preferredContact"
                                                id="preferredContactPhone" value="phone" /> Phone
                                    </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="contactReason" className="col-sm-2">Contact Reason</Label>
                                <Col>
                                    <Control.select model=".contactReason" id="contactReason" name="contactReason" >
                                        <option>More Information</option>
                                        <option>Demo</option>
                                        <option>Feedback</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comments" className="col-sm-2">Comments</Label>
                                <Col>
                                    <Control.textarea model=".comments" id="comments" name="comments" rows="5" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col className="offset-sm-2">
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;