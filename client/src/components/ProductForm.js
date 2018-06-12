import React from 'react';

class ProductForm extends React.Component {
  state = { name: '', category: '', price: '' }

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
      <input className="col s4"
        name="name"
        placeholder="Product Name"
        required
        value={name}
        onChange={this.handleChange}
      />
      <input className="col s4"
        name="category"
        placeholder="Product Category"
        required
        value={category}
        onChange={this.handleChange}
      />
      <input className="col s4"
        name="price"
        placeholder="Price"
        required
        value={price}
        onChange={this.handleChange}
      />
        <button className="btn col s1"> Add Product </button>
    </form>
    )
  }
}

export default ProductForm;