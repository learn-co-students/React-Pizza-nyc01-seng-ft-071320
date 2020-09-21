import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  pizzaMap = () => {
    return this.props.pizzaArray.map((ele) => (
      <Pizza pizza={ele} editButton={this.props.editButton} />
    ));
  };
  render() {
    console.log(this.pizzaMap());
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
        <tbody>{this.pizzaMap()} </tbody>
      </table>
    );
  }
}

export default PizzaList;
