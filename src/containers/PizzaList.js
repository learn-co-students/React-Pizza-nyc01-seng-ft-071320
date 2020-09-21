import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  pizzas = () => this.props.pizzas.map(pizzaObj => <Pizza editHandler={this.props.editHandler} key={pizzaObj.id} pizza={pizzaObj} />)

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pizzas ? this.pizzas() : null}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
