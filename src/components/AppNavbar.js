import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }

    render() {
        const toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

        return (
            <React.Fragment>
                <Navbar expand="md" light className="border-bottom border-primary">
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <div className="container">
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
                            <NavLink to="/signin" color="primary" className="my-2 my-sm-0"><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</NavLink>
                        </Nav>
                        </div>
                    </Collapse>
                </Navbar>

            </React.Fragment>
        );
    }
}

export default AppNavbar;