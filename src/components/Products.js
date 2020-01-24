import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div>Products<hr />{JSON.stringify(this.props)}</div>
        );
    }
}

export default Products;