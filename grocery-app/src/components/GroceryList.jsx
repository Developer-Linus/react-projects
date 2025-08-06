import React from 'react'

const GroceryList = (props) => {
    return (
        <div>
            {props.groceryList.map((groceryItem, index) => (
                <li key={index}>{groceryItem}</li>
            ))}
        </div>
    )
}

export default GroceryList
