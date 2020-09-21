import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    id: '',
    topping: '',
    size: '',
    vegetarian: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => {
      this.setState(()=>({ pizzas: data }))
    })
  }

  handleClick = (obj) => {
    this.setState(()=>({
      id: obj.id,
      topping: obj.topping,
      size: obj.size,
      vegetarian: (obj.vegetarian) ? 'Vegetarian': 'Not Vegetarian'
    }))
  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (id) => {
    
    let options = {
      method: 'PATCH',
      headers: {
        'content-type':'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian === 'Vegetarian' ? true : false 
      })
    }
    fetch('http://localhost:3000/pizzas/' + id, options)
    .then(res => res.json())
    .then(updatedObj => {
      let newArray = [...this.state.pizzas]
      let foundObj = newArray.find(el => el.id === updatedObj.id)
      foundObj.topping = this.state.topping
      foundObj.size = this.state.size
      foundObj.vegetarian = (this.state.vegetarian === 'Vegetarian' ? true : false)
      this.setState({pizzas: newArray})
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm submit={this.handleSubmit} change={this.handleChange} id={this.state.id} size={this.state.size} topping={this.state.topping} vege={this.state.vegetarian}/>
        <PizzaList pizzas={this.state.pizzas} edit={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
