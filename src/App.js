import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzaArray: [],
    editPizza: {},
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((res) => res.json())
      .then((data) => this.setState({ pizzaArray: data }));
  }
  pizzaCreate = (pizza) => {
    const post = () => {
      fetch("http://localhost:3000/pizzas", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify(pizza),
      })
        .then((res) => res.json())
        .then((newObj) =>
          this.setState({ pizzaArray: [newObj, ...this.state.pizzaArray] })
        );
    };

    const patch = () => {
      fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify(pizza),
      })
        .then((res) => res.json())
        .then((newPizza) => {
          const newPizzaArray = this.state.pizzaArray;
          const index = newPizzaArray.findIndex(
            (pizza) => pizza.id === newPizza.id
          );
          newPizzaArray[index] = newPizza;
          this.setState({ pizzaArray: newPizzaArray });
        });
    };
    // check if this pizza.id exists, if it does, use patch request
    // else use post
    // const newPizzaArray = this.state.pizzaArray;
    // const pizzaFind = newPizzaArray.find((pizza) => pizza.id);

    // If there is no pizza id, we know to create a new pizza
    if (pizza.id === undefined) {
      post();
    } else {
      patch();
    }
  };
  editButtonClicker = (pizza) => {
    this.setState({ editPizza: pizza });
  };
  render() {
    return (
      <Fragment>
        v
        <Header />
        <PizzaForm
          editPizza={this.state.editPizza}
          submitHandler={this.pizzaCreate}
        />
        <PizzaList
          pizzaArray={this.state.pizzaArray}
          editButton={this.editButtonClicker}
        />
      </Fragment>
    );
  }
}

export default App;
