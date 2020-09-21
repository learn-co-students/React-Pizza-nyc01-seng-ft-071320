import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    topping: '',
    size: '',
    vegetarian: '',
    pizzaId: ''
  }


  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

  clickHandler = (pizzaObj) => {
    console.log("clicked")
    this.setState({
      topping: pizzaObj.topping,
      size: pizzaObj.size,
      vegetarian: pizzaObj.vegetarian,
      pizzaId: pizzaObj.id
    })
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({topping: this.state.topping, size: this.state.size, vegetarian: this.state.vegetarian})
    }).then(response => response.json())
    .then(updatedObj=> {
      let newArray = [...this.state.pizzas]
      let found = newArray.find(pizza => pizza.id === updatedObj.id)
      found.topping = updatedObj.topping
      found.size = updatedObj.size 
      found.vegetarian = updatedObj.vegetarian
      this.setState({
        pizzas: newArray,
        topping: '',
        size: '',
        vegetarian: '',
        pizzaId: ''
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzas} clickHandler={this.clickHandler}/>
      </Fragment>
    );
  }
}

export default App;
