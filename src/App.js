import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    array: [],
    formPizza: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data => this.setState(() => ({array: data})))
  }

  getValue = (pizza) => {
    this.setState(() => ({formPizza: pizza}))
  }

  changeHandler = (pizza) => {
      fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(pizza)
    })
    .then(resp => resp.json())
    .then(data => {
      let newArray = [...this.state.array]
      let changedArray = newArray.map(el => (el.id === data.id ? data : el))
      this.setState({array: changedArray, formPizza: []})
    })
  }

  render() {
    console.log('in app:', this.state.formPizza)
    return (
      <Fragment>
        <Header/>
        { this.state.formPizza ? <PizzaForm key={this.state.formPizza.id} formPizza={this.state.formPizza} changeHandler={this.changeHandler}/> : null}
        <PizzaList pizza={this.state.array} getValue={this.getValue}/>
      </Fragment>
    );
  }
}

export default App;
