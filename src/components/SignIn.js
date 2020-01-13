import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Row, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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
            <div id="content" className="container">
                <div className="row row-content">
                    <div className="col-12 mt-5 pt-5">
                        <Card>
                            <CardHeader className="border-bottom border-primary text-center" style={cardHeaderStyle}>
                                Login
                            </CardHeader>
                            <CardBody>
                                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label className="sr-only" htmlFor="loginEmail">Email address</Label>
                                        <Control.text model=".loginEmail" id="loginEmail" name="loginEmail" placeholder="Enter email" className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors className="text-danger" model=".loginEmail" show="touched" component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid login email'
                                            }}
                                        />
                                    </Row>
                                    <Row className="form-group">
                                        <Label className="sr-only" htmlFor="loginPassword">Password</Label>
                                        <Control.text type="password" model=".loginPassword" id="loginPassword" name="loginPassword" placeholder="Password" className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors className="text-danger" model=".loginPassword" show="touched" component="div"
                                            messages={{
                                                required: 'Required'
                                            }}
                                        />
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
                            </CardBody>
                        </Card>
                    </div></div></div>
        );
    }
}

export default SignIn;