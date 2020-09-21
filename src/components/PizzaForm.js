import React from "react"

function PizzaForm (props){
  




    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" name="topping" onChange={props.handleFormInput} className="form-control" placeholder="Pizza Topping" value={props.topping}/>
          </div>
          <div className="col">
            <select name="size" value={props.size} onChange={props.handleFormInput} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" name="vegetarian" type="radio" value="Vegetarian" onChange={props.handleFormInput}  checked={props.vegetarian === "" ? false : props.vegetarian ? true : false }/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" name="vegetarian" type="radio" value="Not Vegetarian" onChange={props.handleFormInput} checked={props.vegetarian === "" ? false : !props.vegetarian ? true : false }/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button className="btn btn-success" onClick={props.submitForm}>Submit</button>
          </div>
        </div>
      )

}

export default PizzaForm
