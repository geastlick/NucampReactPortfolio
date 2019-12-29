import React, { Component } from 'react';
import { Jumbotron, NavbarBrand } from 'reactstrap';

class AppHeader extends Component {
    render() {
        return (
        <Jumbotron fluid className="header">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-3 col-md-2 align-self-center">
                        <NavbarBrand href="#"><img src="img/EElogo.png" alt="Logo" className="img-fluid" /></NavbarBrand>
                    </div>
                    <div className="col-8 mx-auto">
                        <h1 className="display-4">Sign Rental Management</h1>
                        <p className="lead text-right">Eastlick Enterprises, LLC &copy;</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
        );
    }
}

export default AppHeader;