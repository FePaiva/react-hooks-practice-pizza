import React, {useState, useEffect} from "react";
// import { v4 as uuid } from "uuid";


function PizzaForm({selectedPizza, handlePizzaChange}) {

   const [id, setPizzaId] = useState (0)
   const [topping, setTopping] = useState('')
   const [size, setSize] = useState('')
   const [isVegetarian, setIsVegetarian] = useState(false)


  useEffect(() => {
    setPizzaId(selectedPizza.id)
    setTopping(selectedPizza.topping)
    setSize(selectedPizza.size)
    setIsVegetarian(selectedPizza.vegetarian)

  }, [selectedPizza])

  function handleSubmit(e) {
    e.preventDefault()
    const updatedPizza = {
      // id: uuid(),
      id: id,
      size: size,
      topping: topping,
      isVegetarian: isVegetarian,
    }
    console.log(updatedPizza)
    handlePizzaChange(updatedPizza)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input 
            onChange={(e) => setTopping(e.target.value)}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={(e) => setSize(e.target.value)} value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={() => setIsVegetarian(true)}
              checked={isVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={() => setIsVegetarian(false)}
              checked={!isVegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
