import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Row, Button } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
    }

    render() {
        const cardHeaderStyle = { backgroundColor: "#e3f2fd" }

        return (
            <Card>
                <CardHeader className="border-bottom border-primary" style={cardHeaderStyle}>
                    Login
                </CardHeader>
                <CardBody>
                    <div className="container-fluid">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label className="sr-only" htmlFor="loginEmail">Email address</Label>
                                <Control.text model=".loginEmail" id="loginEmail" name="loginEmail" placeholder="Enter email" className="form-control" />
                            </Row>
                            <Row className="form-group">
                                <Label className="sr-only" htmlFor="loginPassword">Password</Label>
                                <Control.text type="password" model=".loginPassword" id="loginPassword" name="loginPassword" placeholder="Password" className="form-control" />
                            </Row>
                            <Row className="form-group">
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".rememberMe" name="rememberMe" className="form-check-input" /> Remember me</Label>
                                </div>
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary">Sign in</Button>
                            </Row>
                        </LocalForm>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default SignIn;