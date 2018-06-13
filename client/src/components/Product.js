import React from 'react';

const styles = {
  purchased: {
    textDecoration: 'line-through',
    color: 'grey',
  },
  pointer: { cursor: 'pointer' },
}

const Product = ({
  id,
  purchased,
  name,
  price,
  category,
  updateProduct,
  deleteProduct,
}) => (
  <div className="row">
  <div className="col s4">
    <div className="card-panel teal">
      <p className="white-text" style= { purchased ? styles.purchased : {} }>
      <h2 className="center">
        {category}
      </h2>
      <div> 
        {name} 
      </div>
      <div> 
        ${price} 
      </div>
      </p>
        <input
          id={`product-${id}`}
          type="checkbox"
          defaultChecked={purchased}
          onClick={ () => updateProduct(id)}
        />
        <label htmlFor={`product-${id}`}> Purchased? </label>
        <div
          style={styles.pointer}
          onClick={ () => deleteProduct(id)}
          >
          Delete
        </div>
    </div>
  </div>
</div>
)

export default Product