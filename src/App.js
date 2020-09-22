import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  //create the state
  state = {
    pizzaCollection: [],
    currentPizza: ""
  }

  //fetch the data
  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(data => this.setState({pizzaCollection: data}))
  }

  //create the function to get the pizza info of the pizza that will be "edited"
  getPizza = (pizza) => {
    this.setState({currentPizza: pizza})
    console.log(pizza)
  }

  //create the function to PATCH the database with the newly edited pizza
  patchPizza = (pizza) => {
    let pizzaObj = {
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    }
    console.log(pizza, pizzaObj)

    //create options for the PATCH request
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(pizzaObj)
    }

    //fetch request with patch options
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, options)
    .then(resp => resp.json())
    .then(updatedPizza => this.componentDidMount())

    //change the state 
    this.setState(() => ({ currentPizza: ""}))

  }

  
  render() {
    // console.log(this.state.pizzaCollection)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.currentPizza} patchPizza={this.patchPizza}/>
        <PizzaList pizzas={this.state.pizzaCollection} getPizza={this.getPizza}/>
      </Fragment>
    );
  }
}

export default App;
