import React, { useState } from 'react'

const AddGroceryForm = (props) => {
  const [inputItem, setInputItem] = useState("")

  const handleChange = (event) => {
    const newValue = event.target.value
    setInputItem(newValue)
  }
  return (
    <form>
      <label for="grocery_item">Grocery Item</label>
      <br />
      <input onChange={handleChange} type="text" name="grocery_item" id="grocery_item" placeholder="Enter your grocery item" required value={inputItem} />
      <button
        onClick={() => {
          props.onAdd()
        }}
        type="submit"
      >Submit</button>
    </form>
  )
}

export default AddGroceryForm
