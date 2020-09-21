import React, { Component } from "react";
import Pizza from "../components/Pizza";

const PizzaList = (props) => {
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
				{props.pizzaArray.map((element) => (
					<Pizza
						pizza={element}
						key={element.id}
						editHandler={props.editHandler}
					/>
				))}
			</tbody>
		</table>
	);
};

export default PizzaList;
