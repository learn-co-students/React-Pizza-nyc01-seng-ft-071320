import React from "react"

//change the function to a class component since we will be using "state"
class PizzaForm extends React.Component {
  
  //create the state
  state = {
    id: "",
    topping: "",
    size: "",
    vegetarian: ""
  }

  componentDidUpdate(propsPizza) {
    if (this.props !== propsPizza) {
      this.setState(() => ({
        id: this.props.pizza.id,
        topping: this.props.pizza.topping,
        size: this.props.pizza.size,
        vegetarian: this.props.pizza.vegetarian 
      }))
    }
  }

  //create a function to handle the inputs, include the event
  handleTopping = (e) => {
    e.persist()
    this.setState(() => ({topping: e.target.value}))
  }

  handleSize = (e) => {
    e.persist()
    this.setState(() => ({size: e.target.value}))
  }

  handleVeg = (e) => {
    e.persist()
    this.setState(() => ({vegetarian: true}))
  }

  handleNonVeg = (e) => {
    e.persist()
    this.setState(() => ({vegetarian: false}))
  }

  //create function to handle the submit
  handleSubmit = (e) => {
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

    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping} onChange={this.handleTopping}/>
          </div>
          <div className="col">
            <select value={this.state.size} onChange={this.handleSize} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian} onChange={this.handleVeg}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian} onChange={this.handleNonVeg}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
  
    )
  }
}

export default PizzaForm
