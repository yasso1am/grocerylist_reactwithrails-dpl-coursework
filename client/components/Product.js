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
      <h1 className="center">
        {name}
      </h1>
      <div> 
        {category} 
      </div>
      <div> 
        ${price} 
      </div>
      <p className="white-text" style= { purchased ? styles.purchased : {} }></p>
        <input
          id={`product-${id}`}
          type="checkbox"
          defaultChecked={complete}
          onClick={ () => updateProduct(id)}
        />
        <label htmlFor={`product-${id}`}> Pruchased? </label>
        <div
          style={styles.pointer}
          onClick={()=> deleteProduct(id)}
          >
          Delete
        </div>
    </div>
  </div>
</div>
)

export default Product