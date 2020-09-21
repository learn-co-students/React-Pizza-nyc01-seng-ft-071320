import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzaArray: [],
    id: "",
    topping: "",
    size: "", 
    vegetarian: "", 

  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp=>resp.json())
    .then(data => {
      this.setState(()=>({
        pizzaArray: data
      }))
    })
  }

  editButtonHandler = (pizzaObj) => {
    this.setState(()=> ({
      topping: pizzaObj.topping,
      size: pizzaObj.size,
      vegetarian: pizzaObj.vegetarian,
      id: pizzaObj.id
    }))
  }

  submitForm = () => {
    let newArray = [...this.state.pizzaArray]
    let found = newArray.find(pizza => pizza.id === this.state.id )
    fetch(`http://localhost:3000/pizzas/${found.id}`, {
      method: "PATCH", 
      headers: {"Content-Type": "application/json", "Accepts": "application/json"},
      body: JSON.stringify({
        topping: this.state.topping, 
        size: this.state.size, 
        vegetarian: this.state.vegetarian
      })
    })
    .then(resp=>resp.json())
    .then(data => {
      found.topping = data.topping
      found.size = data.size
      found.vegetarian = data.vegetarian
      this.setState(()=> ({
        pizzaArray: newArray, 
        topping: "", 
        size: "", 
        vegetarian: "", 
        id: ""
      }))
    })
  }

  handleFormInput = (e) => {
    e.persist()
    if (e.target.type === "radio"){
      this.setState(()=>({
        vegetarian: e.target.value === "true" ? true : false 
      }))
    }
    this.setState(()=>({
      [e.target.name]: e.target.value
    }))
  }
  

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm submitForm={this.submitForm} handleFormInput={this.handleFormInput} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} />
        <PizzaList editHandler={this.editButtonHandler} pizzas={this.state.pizzaArray} />
      </Fragment>
    );
  }
}

export default App;
