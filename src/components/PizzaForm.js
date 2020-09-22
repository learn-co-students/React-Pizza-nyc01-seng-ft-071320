import React from "react"

const PizzaForm = ( {id, topping, size, vege, change, submit} ) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={topping} onChange={ e => change(e)} />
        </div>
        <div className="col">
          <select value={size} name="size" className="form-control" onChange={ e => change(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" checked={vege === 'Vegetarian'} onChange={ e => change(e)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name="vegetarian" checked={vege === 'Not Vegetarian'} onChange={ e => change(e)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => submit(id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
