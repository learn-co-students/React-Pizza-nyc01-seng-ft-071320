import React from "react"

class PizzaForm extends React.Component {

  state = {
    id: "",
    topping: "",
    size: "",
    vegetarian: ""
  }

  componentDidUpdate(pP) {
    if (this.props !== pP) {
      this.setState(() => ({
        id: this.props.pizza.id,
        topping: this.props.pizza.topping,
        size: this.props.pizza.size,
        vegetarian: this.props.pizza.vegetarian
      }))
    }
  }

  toppingHandler = (e) => {
    e.persist()
    this.setState(() => ({ topping: e.target.value }))
  }
  sizeHandler = (e) => {
    e.persist()
    this.setState(() => ({ size: e.target.value }))
  }
  veggieHandler = (e) => {
    e.persist()
    this.setState(() => ({ vegetarian: true }))
  }
  nonVeggieHandler = (e) => {
    e.persist()
    this.setState(() => ({ vegetarian: false }))
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.patchPizza(this.state)
    this.setState(() => ({
      id: "",
      topping: "",
      size: "",
      vegetarian: ""
    }))
  }

  render() {
    return (
      <div className="form-row">
        <div className="col-5">
          <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping} onChange={this.toppingHandler} />
        </div>
        <div className="col">
          <select value={this.state.size} className="form-control" onChange={this.sizeHandler}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian} onChange={this.veggieHandler} />
            <label className="form-check-label">
              Vegetarian
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian} onChange={this.nonVeggieHandler} />
            <label className="form-check-label">
              Not Vegetarian
              </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.submitHandler}>Submit</button>
        </div>
      </div>

    )
  }
}

export default PizzaForm
