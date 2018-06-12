import React from 'react';
import Product from './Product';

const ProductList = ({ groceries, updateProduct, deleteProduct}) => (
  <div className="row">
    { groceries.map( product => 
        <Product
          key={product.id}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
          {...product}
      />
    )
  }
  </div>
)
export default ProductList;