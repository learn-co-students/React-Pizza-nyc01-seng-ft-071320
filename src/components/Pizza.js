import React from "react"

const clickHandler = (e, props) => {
  props.getPizza(props.pizza)
}

const Pizza = (props) => {
  return (
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      {props.pizza.vegetarian ? <td>Yes</td> : <td>No</td>}
      <td><button type="button" className="btn btn-primary" onClick={(e) => clickHandler(e, props)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
