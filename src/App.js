import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
	state = {
		pizzaArray: [],
	};

	componentDidMount() {
		fetch("http://localhost:3000/pizzas/")
			.then((response) => response.json())
			.then((data) => this.setState({ pizzaArray: data }));
	}

	newPizza = (pizzaObj) => {
		let newPizzaObj = pizzaObj;

		const configObj = {
			method: "POST",
			headers: {
				"content-type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify(newPizzaObj),
		};
		fetch("http://localhost:3000/pizzas/", configObj)
			.then((resp) => resp.json())
			.then((data) => console.log(data));
	};

	editHandler = (pizza) => {
		const configObj = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify({ pizza }),
		};
		fetch(`http://localhost:3000/pizzas/${pizza.id}`, configObj)
			.then((response) => response.json())
			.then((updatedPizza) => {
				console.log(updatedPizza);
			});
	};

	render() {
		return (
			<Fragment>
				<Header />
				<PizzaForm submitForm={this.newPizza} />
				<PizzaList
					editHandler={this.editHandler}
					pizzaArray={this.state.pizzaArray}
				/>
			</Fragment>
		);
	}
}

export default App;
