import React from "react";

class Pizza extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.pizza.topping}</td>
				<td>{this.props.pizza.size}</td>
				<td>{this.props.pizza.isVegetarian === true ? "Yes" : "No"}</td>
				<td>
					<button
						onClick={() => {
							// console.log(this.props.editHandler)
							this.props.editHandler(this.props.pizza);
						}}
						type="button"
						className="btn btn-primary"
					>
						Edit Pizza
					</button>
				</td>
			</tr>
		);
	}
}

export default Pizza;
