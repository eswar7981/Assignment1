import React, { useState } from 'react';



function Input(props) {
    const [productID,setProductID]=useState('')
    const [productPrice,setProductPrice]=useState('')
    const [productName,setProductName]=useState('')
    const [totalPrice,setTotal]=useState(0)


    const productPriceHandler=(e)=>{
        setProductPrice(e.target.value)
        
    }

    const productIdHandler=(e)=>{
        setProductID(e.target.value)

    }


    const productNameHandler=(e)=>{
        setProductName(e.target.value)
    }
    

    const submitData=(e)=>{
        e.preventDefault()
        const tot=totalPrice+parseInt(productPrice)
        setTotal(tot)
        
        const data={productID,productPrice,productName,totalPrice}
        props.setData(data)
        setProductID('')
        setProductName('')
        setProductPrice('')
    }

   

  return (
    <div>
        <form onSubmit={submitData}>
            <div>
                <label>Product ID</label>
                <input  type='number' onChange={productIdHandler}></input>
            </div>
            <div>
                <label>Selling Price</label>
                <input type='number' onChange={productPriceHandler}></input>
            </div>
            <div>
                <label>Product Name</label>
                <input type="text" onChange={productNameHandler}></input>
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>

        </form>
      
      
    </div>
    )
}

export default Input;
