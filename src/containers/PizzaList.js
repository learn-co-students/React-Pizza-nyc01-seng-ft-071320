import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  pizzasArray = () => {
    return this.props.pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    console.log("Is PizzaList getting the Pizzas prop?", this.props.pizzas)
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
          {this.pizzasArray()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
