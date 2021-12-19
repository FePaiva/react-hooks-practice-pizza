import React from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
import {useState, useEffect} from 'react';


function App() {

  const [pizzas, setPizzas] = useState([]) //the list of pizzas is an array.
  const [selectedPizza, setSelectedPizza] = useState({}) // each pizza is a object.

  useEffect(() =>{
    fetch('http://localhost:3001/pizzas')
    .then(response => response.json())
    .then(data => setPizzas(data))
  }, [])

  const selectPizza = (pizzaObj) => {
    setSelectedPizza(pizzaObj)
  }

  const handlePizzaChange = (pizzaObj) => {
    // PATCH so it persists
    fetch(`http://localhost:3001/pizzas/${pizzaObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizzaObj)
    }).then(res => res.json())
    .then(_ => {
      const updatedPizzaList = [...pizzas].map(pizza => {
        if(pizza.id === pizzaObj.id) {
          return pizzaObj
        } else {
          return pizza
        }
      })
      setPizzas(updatedPizzaList)
    })
  }
  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} handlePizzaChange={handlePizzaChange}/>
      <PizzaList pizzas={pizzas} selectPizza={selectPizza} />
    </>
  );
}

export default App;
