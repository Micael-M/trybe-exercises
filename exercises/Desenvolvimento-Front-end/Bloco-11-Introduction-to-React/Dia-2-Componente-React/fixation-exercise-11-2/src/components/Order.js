import React, { Component } from 'react';

export default class Order extends Component {
  render() {
    const { products } = this.props.order;
    console.log(products);

    return (
      <div className="order">
        {/* <p> {user} bought {product} for {price.value} {price.currency} </p> */}
      </div>
    );
  }
}
