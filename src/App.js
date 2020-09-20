import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state={
    data:[],
    current:false
  }

  componentDidMount=()=>{
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
    .then(string=>{this.setState({data:string})})
  }

  getPizza=(pizza)=>{
    console.log("This is my pizza", pizza)
    this.setState({current:pizza})
  }
  
  editPizza=(obj)=>{
    if (this.state.current)
      {
      console.log("lets edit this pizza", obj,this.state.current.id)
      const id = this.state.current.id
      fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(
        obj
      )
      }).then(res=>res.json()).then(string=>{
        let newArray=[...this.state.data]
        let newCats = newArray.map(el => (el.id === id ? string : el))
        this.setState(()=>({data:newCats,current:false}))
        console.log(this.state.data)
      })
    }  
    else{
      console.log("you aint got no pizza for me, bro!")
    }
  }

  render() {
    // console.log("this is my data", this.state.data)
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.editPizza} pizza={this.state.current}/>
        <PizzaList pizzas={this.state.data} getPizza={this.getPizza}/>
      </Fragment>
    );
  }
}

export default App;
