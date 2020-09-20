import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  rendPizza=()=>{
    return this.props.pizzas.map(el=><Pizza key={el.id} el={el} getPizza={this.props.getPizza}/>)
  }

  render() {
    // console.log("This is pizzalist", this.props)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.rendPizza()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
