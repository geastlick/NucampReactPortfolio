import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Row, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        /*
         Everything is wrong with this --
            Passing the entire users array - even having it exist in JavaScript
            Cleartext password
            Plus state needs to be "lifted" so login status can be reflected in header/navbar and used here
            Also need to handle redirections -- where do we go after successful login?
                Where will be go after logout (when state is lifted)
        */
        const user = this.props.users.filter(user => user.username === values.username)[0];
        if(!user || user.password !== values.loginPassword) {
            alert('Invalid username/password!');
        } else {
            alert("Good username/password");
        }
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
                                        <Label className="sr-only" htmlFor="username">Username</Label>
                                        <Control.text model=".username" id="username" name="username" placeholder="Username" className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors className="text-danger" model=".username" show="touched" component="div"
                                            messages={{
                                                required: 'Required'
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