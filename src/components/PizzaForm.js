import React from "react"

class PizzaForm extends React.Component{

  state={
    topping:"",
    size:"",
    vegetarian:"",
  }

  change=(e)=>{
    console.log("this is the change", e.target.name,e.target.value)
    if (e.target.name==="non-vegetarian"){this.setState({vegetarian:false})}
    this.setState({[e.target.name]:e.target.value})
  }

  submit=(e)=>{
    e.preventDefault()
    console.log("this is my form submit",this.state)
    this.props.editPizza(this.state)
    // this.setState(()=>({toppings:"",size:"",vegetarian:""}))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ topping: nextProps.pizza.topping, size: nextProps.pizza.size, vegetarian: nextProps.pizza.vegetarian});
  }

  render(){
    console.log("this is pizzaform", this.props.pizza) // const {topping,size,vegetarian} = this.props.pizza // console.log(topping,size,vegetarian)
    return(
        <form className="form-row" onSubmit={this.submit}>
          <div className="col-5">
              <input type="text" className="form-control" placeholder="pizza topping" name="topping" value={this.state.topping} onChange={this.change}/>
          </div>
          <div className="col">
            <select name="size" value={this.state.size} className="form-control" onChange={this.change}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={this.state.vegetarian} onChange={this.change}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="non-vegetarian" value="Not Vegetarian" checked={this.state.vegetarian===false} onChange={this.change}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" >Submit</button>
          </div>
        </form>
  
    )


  }
}

export default PizzaForm
