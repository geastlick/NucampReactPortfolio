import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, ButtonToggle, Modal, ModalHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isLoginOpen: false
        }
    }

    render() {
        const modalHeaderStyle = { backgroundColor: "#e3f2fd" }
        const toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });
        const toggleLogin = () => this.setState({ isLoginOpen: !this.state.isLoginOpen });

        return (
            <React.Fragment>
                <Navbar expand="md" light className="border-bottom border-primary">
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="navbar-nav mr-auto mt-2 mt-lg-0" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    <i className="fa fa-envelope fa-lg" /> Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <i className="fa fa-question-circle fa-lg" /> About Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <ButtonToggle onClick={toggleLogin} color="primary" className="my-2 my-sm-0"><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</ButtonToggle>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Modal isOpen={this.state.isLoginOpen} toggle={toggleLogin} centered>
                    <ModalHeader toggle={toggleLogin} className="border-bottom border-primary" style={modalHeaderStyle}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <div className="container-fluid">
                            <Form>
                                <FormGroup row>
                                        <Label className="sr-only" htmlFor="loginEmail">Email address</Label>
                                        <Input type="email" id="loginEmail" placeholder="Enter email" />
                                    </FormGroup>
                                <FormGroup row>
                                        <Label className="sr-only" htmlFor="loginPassword">Password</Label>
                                        <Input type="password" id="loginPassword" placeholder="Password" />
                                    </FormGroup>
                                <FormGroup row>
                                        <FormGroup check>
                                            <Label check>
                                            <Input type="checkbox" /> Remember me</Label>
                                        </FormGroup>
                                </FormGroup>
                                <FormGroup row>
                                    <Button color="secondary"
                                        onClick={toggleLogin}>Cancel</Button>&nbsp;&nbsp;
                                    <Button type="submit" color="primary">Sign in</Button>
                                </FormGroup>
                            </Form>
                            </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default AppNavbar;