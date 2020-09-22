import React from "react";

class PizzaForm extends React.Component {
	state = {
		topping: "",
		size: "",
		isVegetarian: false,
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.props.submitForm(this.state);
		this.setState({
			topping: "",
			size: "",
		});
	};

	toppingChangeHandler = (e) => {
		e.persist();
		this.setState(() => ({
			topping: e.target.value,
		}));
	};

	sizeChangeHandler = (e) => {
		e.persist();
		this.setState(() => ({
			size: e.target.value,
		}));
	};

	veggieChangeHandler = (e) => {
		e.target.value === "Vegetarian"
			? this.setState({ isVegetarian: true })
			: this.setState({ isVegetarian: false });
	};

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<div className="form-row">
					<div className="col-5">
						<input
							type="text"
							className="form-control"
							placeholder="Pizza Topping"
							value={this.state.topping}
							onChange={this.toppingChangeHandler}
						/>
					</div>
					<div className="col">
						<select
							value={this.state.size}
							className="form-control"
							onChange={this.sizeChangeHandler}
						>
							<option value="Small">Small</option>
							<option value="Medium">Medium</option>
							<option value="Large">Large</option>
						</select>
					</div>
					<div className="col">
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								value="Vegetarian"
								onClick={this.veggieChangeHandler}
								checked={this.state.isVegetarian}
							/>
							<label className="form-check-label">
								Vegetarian
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								value="Not Vegetarian"
								onClick={this.veggieChangeHandler}
								checked={!this.state.isVegetarian}
							/>
							<label className="form-check-label">
								Not Vegetarian
							</label>
						</div>
					</div>
					<div className="col">
						<button
							type="submit"
							className="btn btn-success"
							onClick={console.log}
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default PizzaForm;
