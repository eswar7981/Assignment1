import React, { useState } from 'react';


function Display(props) {
    const[prod,setProd]=useState([props.data])
    


  const func1=(s)=>{
    localStorage.removeItem(s)
  }


  return (
    <div>
      <h1>Products</h1>
      {props.data.map((a)=>{
          return(
            <li key={a.productID}>
                {a.productID}
                <button onClick={func1(a.productID)}>Delete</button>
                </li>
          )
      })}
    </div>
  )
}

export default Display;
