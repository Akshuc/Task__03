import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          console.log(json);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Product ID: </strong>
            {product.id}
            <br />
            <strong>Product Title: </strong>
            {product.title}
            <br />
            <strong>Product Price: </strong>
            {product.price}
            <br />
            <p>Description : {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
