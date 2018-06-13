import React, { Component } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

class App extends Component {
  state = { groceries: [] }

  componentDidMount() {
    fetch('/api/products')
    .then( res => res.json())
    .then( groceries => { 
      this.setState({groceries})
      })
    }

  addProduct = (name, category, price) => {
    const product = { name, category, price }
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product)
    }).then( res => res.json() )
    .then( product => {
      const { groceries } = this.state;
      this.setState({ groceries: [...groceries, product] })
    })
  }

  updateProduct = (id) => {
    debugger
    fetch(`/api/products/${id}`, { method: 'PUT' })
    .then (res => res.json() )
    .then ( product => {
      const groceries = this.state.groceries.map ( p => {
        if (p.id === id)
          return product
        return p;
      });
      this.setState({groceries});
    })
  }

    deleteProduct = (id) => {
      fetch (`/api/products/${id}`, {method: 'DELETE' })
      .then ( () => {
      const { groceries } = this.state
      this.setState({ groceries: groceries.filter( p => p.id!==id )
        })
      })
    }

  render() {
    return (
      <div className="container">
        <h1 className="center">Andrew's Grocery List</h1>
        <ProductForm addProduct={this.addProduct} />
        <ProductList
          updateProduct={this.updateProduct}
          deleteProduct={this.deleteProduct}
          groceries={this.state.groceries}
          />
      </div>

    );
  }
}

export default App;
