import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    id: "",
    topping: "",
    size: "",
    vegetarian: ""
  }

  changeHandler = e => {
    e.persist()
    this.setState(() => ({
      [e.target.name]: e.target.value
    }))
  }

  editPizza = (e, pizzaObj) => {
    e.persist()
    this.setState(() => ({
      id: pizzaObj.id,
      topping: pizzaObj.topping,
      size: pizzaObj.size,
      vegetarian: pizzaObj.vegetarian ? "Vegetarian" : "Not Vegetarian"
    }))
  }

  submitPizza = (e, id) => {
    if (id) {
      e.persist()
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json"
        },
        body: JSON.stringify({
          topping: this.state.topping,
          size: this.state.size,
          vegetarian: this.state.vegetarian === "Vegetarian"
        })
      }
      fetch(`http://localhost:3000/pizzas/${id}`, options)
      .then(res => res.json())
      .then(pizza => {
        let newPizzas = [...this.state.pizzas]
        let foundPizza = newPizzas.find(el => el.id === pizza.id)
        foundPizza.topping = pizza.topping
        foundPizza.size = pizza.size
        foundPizza.vegetarian = pizza.vegetarian
        this.setState(() => ({
          pizzas: newPizzas,
          id: "",
          topping: "",
          size: "",
          vegetarian: ""
        }))
      })
    }
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
      <Fragment>
        <Header/>
        <PizzaForm pizzaInput={this.state} changeHandler={this.changeHandler} submitPizza={this.submitPizza}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
