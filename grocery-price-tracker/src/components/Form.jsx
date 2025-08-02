import React from 'react'

const Form = () => {
    return (
        <div className="flex-center">
            <form className='col-center'>
                <label for="grocery-name">Grocery Name</label>
                <input type="text" id="grocery-name" name="grocery-name" placeholder="Enter the name of the grocery" required />
                <label for="price">Enter Grocery's Price</label>
                <input type="number" id="price" name="price" placeholder="Enter the price of the grocery item" required />

                <button type="submit">Add</button>
            </form>
        </div>

    )
}

export default Form
