import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaArray: [],
    currentPizza: ""
  }

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = () => {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => this.setState(() => ({ pizzaArray: pizzas })))
  }

  getPizza = (pizza) => {
    this.setState({ currentPizza: pizza })
  }

  patchPizza = (pizza) => {
    const pizzaObj = {
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    }
    console.log(pizza, pizzaObj)

    const options = {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(pizzaObj)
    }

    fetch(`http://localhost:3000/pizzas/${pizza.id}`, options)
      .then(resp => resp.json())
      .then(newPizza => this.fetchApi())

    this.setState(() => ({ currentPizza: "" }))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm pizza={this.state.currentPizza} patchPizza={this.patchPizza} />
        <PizzaList pizzas={this.state.pizzaArray} getPizza={this.getPizza} />
      </Fragment>
    );
  }
}

export default App;
