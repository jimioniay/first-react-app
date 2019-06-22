import React from 'react';

const Product = props => {
  return (
    <div>
      <ul className="list-group">
        <p className="lead text-center">Item {props.num}</p>
        <li className="list-group-item">Name: {props.name}</li>
        <li className="list-group-item">Price: ${props.price}</li>
        <li className="list-group-item">Intel: {props.description}</li>
      </ul>
      <hr />
    </div>
  );
};

export default Product;
