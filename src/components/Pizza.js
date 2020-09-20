import React from "react"

const Pizza = (props) => {
  // console.log("this is my pizza",props)
  return(
    <tr>
      <td>{props.el.topping}</td>
      <td>{props.el.size}</td>
      <td>{props.el.vegetarian ? "yes" : "no"}</td>
      <td><button type="button" className="btn btn-primary" onClick={()=>(props.getPizza(props.el))}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
