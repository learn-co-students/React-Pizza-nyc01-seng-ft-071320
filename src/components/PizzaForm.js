import React from "react";

class PizzaForm extends React.Component {
  state = {
    id: undefined,
    vegetarian: false,
    size: "Small",
    topping: "",
  };

  buttonFix = (e) => {
    if (e.target.value === "Vegetarian") {
      this.setState({ vegetarian: true });
    } else this.setState({ vegetarian: false });
  };

  sizeClicker = (e) => {
    console.log(e.target.value);
    this.setState({ size: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      toppings: "",
      size: "Small",
      id: undefined,
      vegetarian: false,
    });
  };

  toppingInput = (e) => {
    this.setState({ topping: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    // this.props = current props
    // looking for a change in editPizza
    if (prevProps.editPizza.id !== this.props.editPizza.id) {
      // set the form values to match the editPizza props
      this.setState({
        id: this.props.editPizza.id,
        vegetarian: this.props.editPizza.vegetarian,
        size: this.props.editPizza.size,
        topping: this.props.editPizza.topping,
      });
    }
  }

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
              onChange={this.toppingInput}
            />
          </div>
          <div className="col">
            <select
              onChange={this.sizeClicker}
              value={this.state.size}
              className="form-control"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                onClick={this.buttonFix}
                className="form-check-input"
                type="radio"
                value="Vegetarian"
                checked={this.state.vegetarian}
              />
              <label className="form-check-label">Vegetarian</label>
            </div>
            <div className="form-check">
              <input
                onClick={this.buttonFix}
                className="form-check-input"
                type="radio"
                value="Not Vegetarian"
                checked={!this.state.vegetarian}
              />
              <label className="form-check-label">Not Vegetarian</label>
            </div>
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-success"
              // onClick={console.log}
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
