import React from "react"

const Pizza = (props) => {
  console.log("We are in Pizza", props)
  
  let handleEdit = (props) => {
    props.clickHandler(props)
  }

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      {props.pizza.vegetarian ? <td>Yes</td> : <td>No</td>}
      <td><button type="button" className="btn btn-primary" onClick={() => handleEdit(props)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
