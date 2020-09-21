import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaArray: [], 
    pizzaForm: {

      topping: "",
      size: "",
      vegetarian: null
    }
    
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
      .then(resp=>resp.json())
      .then(data=>this.setState({ pizzaArray: data }))
  }

  editHandler = (obj) => {
    this.setState({ pizzaForm: obj })
  }

  updateSize = (objSize) => {
    this.setState({ size: objSize })
  }

  updateVeg = (objVeg) => {
    if(objVeg === "Vegetarian") {
      objVeg = true
    } else {
      objVeg = false
    }
    this.setState({ vegetarian: objVeg })
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(() => ({
      [e.target.name]: e.target.value }), console.log(e.target.value))
  }

  submitHandler = (pizzaId) => {
    fetch(`http://localhost:3000/pizzas/${pizzaId}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    })
    .then(resp=>resp.json())
    .then(pizzaObj=>{
      let newArray = [...this.state.pizzaArray]
      let foundObj = newArray.find(el=>el.id === parseInt(pizzaObj.id))
      foundObj.size = this.state.size
      this.setState({ pizzaArray: newArray })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaForm} updateSize={this.updateSize} vegetarian={this.state.pizzaForm.vegetarian} topping={this.state.pizzaForm.topping} size={this.state.pizzaForm.size} submitHandler={this.submitHandler} updateVeg={this.updateVeg} changeHandler={this.changeHandler} />
        <PizzaList pizza={this.state.pizzaArray} topping={this.state.topping} size={this.state.size} editHandler={this.editHandler}/>
      </Fragment>
    );
  }
}

export default App;
