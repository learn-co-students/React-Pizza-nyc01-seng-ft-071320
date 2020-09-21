import React from "react"

const Pizza = (props) => {

  function veg_true(vegetarian) {
    return vegetarian ? "true" : "false"
    // debugger
  }

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{veg_true(props.pizza.vegetarian)}</td>
      <td><button onClick={()=>props.editHandler(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
