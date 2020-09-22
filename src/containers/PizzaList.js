import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  state = {
    pizzas: []
  }

  getPizzas = () => {
    return this.state.pizzas.map(pizza => <Pizza pizza={pizza}/>)
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => {
      this.setState(() => ({
        pizzas: pizzas
      }))
    })
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
          {this.getPizzas()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
