import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  pizzas = () => {
    return this.props.pizza.map(el => <Pizza key={el.id} pizza={el} editHandler={this.props.editHandler} />)
  }

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
          {
           this.pizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
