import React from 'react'
import Rating from './Rating';
import '../index.css';

function Product(props) {
    const { element } = props
    return (
        <div key={element._id} className="card">
        <a href="product.html">
          
          <img className="medium" src="./images/p1.jpg" alt="product" />
        </a>
        <div className="card-body">
          <a href="product.html">
            <h2>{element.name}</h2>
          </a>
            <Rating rating={element.rating} numReviews={element.numReviews}/>
          <div className="price">${element.price}</div>
        </div>
      </div>
    )
}

export default Product
