import React from 'react';

class ProductForm extends React.Component {
  state = { name: '', category: '', price: '', purchased: false }

  handleChange = (e) => {
    const {name, value } = e.target
    this.setState( {[name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, category, price } = this.state;
    this.props.addProduct(name, category, price)
    this.setState({ name: '', category: '', price: ''})
  }
  
  render () {
    const { name, category, price } = this.state
    return (
      <form className="row" onSubmit={this.handleSubmit}>
      <div className="col s12">
        <button className="btn col s2"> Add Product </button>
        <div className="col s1"></div>
        <input className="col s3"
          name="name"
          placeholder="Product Name"
          required
          value={name}
          onChange={this.handleChange}
        />
        <input className="col s3"
          name="category"
          placeholder="Product Category"
          required
          value={category}
          onChange={this.handleChange}
        />
        <input className="col s3"
          name="price"
          placeholder="Price"
          required
          value={price}
          onChange={this.handleChange}
        />
      </div>
    </form>
    )
  }
}

export default ProductForm;