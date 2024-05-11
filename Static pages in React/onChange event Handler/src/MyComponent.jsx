
// onChnage = event handler use primarily with form elements 
        //  ex. <input>, <textarea>, <select>, <radio>
        // triggers a function every time the value of the input changes


import React, {useState} from "react"

function MyComponent(){
    //for name
    const [name, setName] = useState("")

    //For quantity
    const [quantity, setQuantity] = useState(1)

    // for comment
    const [comment, setComment] = useState("")

    //for payment
    const [payment, setPayment] = useState("")


    //for delivery option
    const [shipping, setShipping] = useState("")


    //one way of writing the function 
    const handleNameChange = (event) =>
    {
        setName(event.target.value)
    }

    //other way of writing the function 
    function handleQuantityChange(event)
    {
        if (quantity <=0)
        {
            quantity = 0 
        }
        else
        {
            setQuantity(event.target.value)
        }
    }

    function handleCommentChange(event)
    {
        setComment(event.target.value)
    }


    function handlePaymentChange(event)
    {
        setPayment(event.target.value)
    }


    function handleShippingChange(event)
    {
        setShipping(event.target.value)
    }

       

    return(
        <div>
            {/* for name */}
            <label>First name: </label>
            <input value={name} onChange={handleNameChange} />
            <p>Name Entered: {name}</p>

            {/* for quantity */}
            <label> Quantity: </label>
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity Entered: {quantity}</p>
            
            {/* for comment  */}
            <p>Comments:</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Comments here"></textarea>
            <p>Comments: {comment}</p>

            {/* for payment: we are using the select html. Inside select we put in the option */}
            <label> Choose Payment Option: </label>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option> 
            </select>
            <p>payment Option: {payment}</p>


            {/* for shipping: create a label */}
            <label htmlFor=""> Options: </label>
            <label>
                <input type="radio" value= "Pick Up"
                checked = {shipping === "Pick Up"}
                onChange={handleShippingChange}/>
                Pick Up
            </label>

            <label>
                <input type="radio" value= "Delivery"
                checked = {shipping === "Delivery"}
                onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Pick up options: {shipping}</p>
        </div>)
        

}

export default MyComponent