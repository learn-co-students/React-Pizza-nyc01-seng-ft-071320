fetch(`http://localhost:3000/toys/${toy.id}`, {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
    accepts: "application/json",
  },
  body: JSON.stringify(toy),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// copy the toy array
const toyArray = this.state.toyArray;
// remove
const newToyArray = toyArray.filter();
this.setState({});

//filtered => [6, 7, 8, 9]//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
