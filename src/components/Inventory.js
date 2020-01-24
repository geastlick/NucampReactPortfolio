import React, { Component } from 'react';

class Inventory extends Component {
    render() {
        return (
            <div>Inventory<hr />{JSON.stringify(this.props)}</div>
        );
    }
}

export default Inventory;