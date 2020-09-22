import React from "react"

//create the clickHandler, since this is a function instead of a class, I'll have to invoke an 
//anonymous function within the clickHandler so that it will ONLY INVOKE ON A CLICK
const clickHandler = (e, props) => {
  props.getPizza(props.pizza)
}

//give props to the function to accept as an argument, to inherit the necessary info
const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? <td>Yes</td> : <td>No</td>}</td>
      <td><button type="button" className="btn btn-primary" onClick={(e) => clickHandler(e, props)}>Edit Pizza</button></td>
    </tr>
  )
}


export default Pizza
