import React, { Component } from 'react';

export default class Order extends Component {
  render() {
    const { products } = this.props;
    return (
      <section className="product">
        {
        products.map( product => {
          return <p key={ product.id }> 
            Você comprou {product.product} por {product.price.value} {product.price.currency}
          </p>
        })
        }
      </section>
    );
  }
}
