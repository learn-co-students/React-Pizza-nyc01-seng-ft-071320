import React from "react"

class PizzaForm extends React.Component {


  submit = (e) => {
    e.preventDefault()
    this.props.submitHandler()
  }

  change = (e) => {
    this.props.changeHandler(e)
  }

  render () {

    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
              this.props.topping 
              } onChange={this.change} name="topping"/>
        </div>
        <div className="col">
          <select value={this.props.size} className="form-control" onChange={this.change} name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="true" checked={this.props.vegetarian === '' ? false : this.props.vegetarian === "true" ? true : false } onChange={this.change} name="vegetarian"/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="false" checked={this.props.vegetarian === '' ? false : this.props.vegetarian === 'false' ? true : false } onChange={this.change} name="vegetarian"/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.submit}>Submit</button>
        </div>
      </div>

  )
  }
  
}

export default PizzaForm
