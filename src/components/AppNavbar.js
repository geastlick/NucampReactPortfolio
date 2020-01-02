import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, ButtonToggle, Modal, ModalHeader } from 'reactstrap';

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
            <div>
                <Navbar expand="md" light className="border-bottom border-primary">
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="navbar-nav mr-auto mt-2 mt-lg-0" navbar>
                            <NavItem>
                                <NavLink href="index.html"><i className="fa fa-home"> Home</i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="contact.html"><i className="fa fa-envelope"> Contact</i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="about.html"><i className="fa fa-question-circle"> About Us</i></NavLink>
                            </NavItem>
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
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <label className="sr-only" htmlFor="loginEmail">Email address</label>
                                        <input type="email" className="form-control form-control-sm" id="loginEmail"
                                            placeholder="Enter email"></input>
                                    </div>
                                    <div className="form-group col-12">
                                        <label className="sr-only" htmlFor="loginPassword">Password</label>
                                        <input type="password" className="form-control form-control-sm" id="loginPassword"
                                            placeholder="Password"></input>
                                    </div>
                                    <div className="col">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"></input>
                                            <label className="form-check-label"> Remember me
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <button type="button" className="btn btn-secondary btn-sm ml-auto"
                                        onClick={toggleLogin}>Cancel</button>
                                    <button type="submit" className="btn btn-primary btn-sm ml-1">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AppNavbar;