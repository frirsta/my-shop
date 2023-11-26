import React from "react";

const Products = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="productList">
        {products.map((product) => () => {
          <div className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price.formatted_with_symbol}</p>
            <button onClick={() => onAddToCart(product.id, 1)}>
              Add to Cart
            </button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Products;
