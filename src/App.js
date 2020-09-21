import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    edit: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(response => response.json())
    .then(response => {
      this.setState({ pizzas: response })
    })
  }

  handleEditButton = (props) => {
    console.log("Inside the edit handler!", props)
    this.setState({ edit: props.pizza })
  }

  submitHandler = (info) => {
    console.log("Inside the submit handler!", info)
    const options = {
      "method": "PATCH",
      "headers": {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
    body: JSON.stringify(info)
    }
    // debugger
    let obj = this.state.pizzas.find(el => el.id === info.id)
    fetch(`http://localhost:3000/pizzas/${obj.id}`, options)
    .then(res => res.json())
    .then(data => {
      let newArr = [...this.state.pizzas]
      newArr[obj.id - 1] = info
      this.setState({ pizzas: newArr, edit: {} })
    })
  }
  
  render() {
    console.log("Here is the response", this.state.pizzas, this.state.edit)
    console.log("Are we getting edit data??", this.state.edit)
    return (
      <Fragment>
        <Header/>
        <PizzaForm sendEditData={this.state.edit} submitHandler={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzas} clickHandler={this.handleEditButton}/>
      </Fragment>
    );
  }
}

export default App;
