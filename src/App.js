import React, { useState } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";

function App(props) {
  const [products, setProducts] = useState([]);

  const productHandler = (data) => {
    localStorage.setItem(data.productID,`expenseAmount:${data.productID} description:${data.productName} OrderID:${data.productID}`)
    console.log(data);
    const Products = [...products, data];
    setProducts(Products);
  };

  return (
    <div>
      <Input setData={productHandler}> </Input>

      <Display data={products}></Display>

      

    </div>
  );
}

export default App;
