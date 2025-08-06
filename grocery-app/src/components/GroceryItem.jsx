import React, { useState } from 'react'

const GroceryItem = (props) => {
  const [isDone, setIsDone] = useState(false)

  const onToggle = () => {
    setIsDone((prevValue) => {
      return (!prevValue)
    })
  }
  return (
    <div>
      <p
        onClick={onToggle}
        style={{ textDecoration: isDone ? "line-through" : "none" }}>{props.item}</p>
    </div>
  )
}

export default GroceryItem
