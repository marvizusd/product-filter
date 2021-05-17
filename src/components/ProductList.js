import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    return (
      <div id="product-list">
        <header>
          <strong>Product List ({this.props.products.length} items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              { this.props.columns.id && <th>ID</th> }
              { this.props.columns.name && <th>Name</th> }
              { this.props.columns.department && <th>Department</th> }
              { this.props.columns.currency && <th>Currency</th> }
              { this.props.columns.price && <th>Price</th> }
            </tr>
          </thead>
          <tbody>
          {
            this.props.products.map((product, index) => (
              <tr key={product.id}>
                { this.props.columns.id && <td>{product.id}</td> }
                { this.props.columns.name && <td>{product.name}</td> }
                { this.props.columns.department && <td>{product.department}</td> }
                { this.props.columns.currency && <td>{product.currency}</td> }
                { this.props.columns.price && <td>{product.price}</td> }
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    )
  }
}
