import React, { Component } from 'react';

class Orders extends Component {
    render() {
        return (
            <div>Orders<hr />{JSON.stringify(this.props)}</div>
        );
    }
}

export default Orders;