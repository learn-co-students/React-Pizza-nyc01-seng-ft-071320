import React from "react"

const PizzaForm = props => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={props.pizzaInput.topping} onChange={props.changeHandler}/>
        </div>
        <div className="col">
          <select value={props.pizzaInput.size} name="size" className="form-control" onChange={props.changeHandler}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Vegetarian" checked={props.pizzaInput.vegetarian === "Vegetarian"} onChange={props.changeHandler}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Not Vegetarian" checked={props.pizzaInput.vegetarian === "Not Vegetarian"} onChange={props.changeHandler}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={e => props.submitPizza(e, props.pizzaInput.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
