import React, { Component } from 'react';

class Customers extends Component {
    render() {
        return (
            <div>Customers<hr />{JSON.stringify(this.props)}</div>
        );
    }
}

export default Customers;