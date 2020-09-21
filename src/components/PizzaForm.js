import React from "react"

class PizzaForm extends React.Component {
  state = {
    id: undefined,
    topping: '',
    size: 'Small',
    vegetarian: false
  }

  componentWillReceiveProps(){
    this.setState({ 
      id: this.props.sendEditData.id,
      topping: this.props.sendEditData.topping,
      size: this.props.sendEditData.size,
      vegetarian: this.props.sendEditData.vegetarian
    })
  }
  
  changeHandler = (e) => {
    this.setState({ topping: e.target.value })
  }

  radioHandler = (e) => {
    if(e.target.value === "Vegetarian"){
      this.setState({ vegetarian: true })
    } else {
      this.setState({ vegetarian: false })
    }
  }

  sizeHandler = (e) => {
    this.setState({ size: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      topping: '',
      size: '',
      vegetarian: false
    })
  }

render(){
  console.log("Huh?", this.state.topping)
    return(
      <form onSubmit={this.submitHandler}>
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping} onChange={this.changeHandler}/>
          </div>
          <div className="col">
            <select value={this.state.size} onChange={this.sizeHandler} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="true" checked={this.state.vegetarian} onClick={this.radioHandler}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="false" checked={!this.state.vegetarian} onClick={this.radioHandler}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default PizzaForm
