import React from "react"

export default class PizzaForm extends React.Component {

  state = {
    id: "",
    topping: "", 
    size: "", 
    vegetarian: ""
    }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      topping: nextProps.formPizza.topping,
      size: nextProps.formPizza.size,
      vegetarian: nextProps.formPizza.vegetarian,
      id: nextProps.formPizza.id
    })
  }

  // setPizza = () => {
  //   this.setState(() => ({
  //     id: this.props.formPizza.id, 
  //     topping: this.props.formPizza.topping,
  //     size: this.props.formPizza.size,
  //     vegetarian: this.props.formPizza.vegetarian
  //   })
  // }
  
  editingPizza = (e) => {
    e.persist()
    if (e.target.name==="vegetarian") {
      this.setState(() => ({[e.target.name]: JSON.parse(e.target.value)}))
    } else {
      this.setState(() => ({[e.target.name]: e.target.value}))
    }
  }

  changeHandler = (e) => {
    e.preventDefault()
    this.props.changeHandler(this.state)
    this.setState(({id: "", topping: "", size: "", vegetarian: ""}))
  }

  render() {
    console.log('in form', this.state)
    return(
      <form onSubmit={this.changeHandler}>
        <div className="form-row">
          <div className="col-5">
              <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={this.state.topping} onChange={this.editingPizza}/>
          </div>
          <div className="col">
            <select name="size" value={this.state.size} className="form-control" onChange={this.editingPizza}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <form name="vegetarian">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="vegetarian" value={true} checked={this.state.vegetarian} onClick={this.editingPizza}/>
                <label className="form-check-label">
                  Vegetarian
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="vegetarian" value={false} checked={!this.state.vegetarian} onClick={this.editingPizza}/>
                <label className="form-check-label">
                  Not Vegetarian
                </label>
              </div>
            </form>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </div> 
      </form>
        )
  }
}
