import React from "react"

const PizzaForm = (props) => {
  return(
    <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
              props.topping
            } onChange={props.changeHandler} />
        </div>
        <div className="col">
          <select value={props.size} onChange={(e)=>props.updateSize(e.target.value)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.vegetarian === true} onChange={(e)=>props.updateVeg(e.target.value)} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={props.vegetarian === false} onChange={(e)=>props.updateVeg(e.target)} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>props.submitHandler(props.pizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
