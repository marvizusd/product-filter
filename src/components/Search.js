import React, { Component, useReducer } from 'react'
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      }
    };
  }

  onPriceInputChange = (name, value) => {
    // to-do: implement price change handler
    this.setState({...this.state, [name]: value })
  }

  filterProducts = () => {
    // to-do: implement handler for filtering products by price range

    if(!this.state.priceTo && !this.state.priceFrom || this.state.priceFrom > this.state.priceTo) {
      return this.props.products
    }

    let from = this.state.priceFrom === '' ? 0 : this.state.priceFrom;
    let to = this.state.priceTo === '' ? Infinity : this.state.priceTo;

    return this.props.products.reduce((acc, product) => {
      if(product.price <= to && product.price >= from) {
        return [...acc, product]
      }
      
      return acc
    }, [])
  }

  onCheckboxClick = (name, checked) => {
    // to-do: implement checkbox click handler
    this.setState({...this.state, columns: {...this.state.columns, [name]: checked }})
  }

  render() {
    let displayedProducts = this.filterProducts()
    console.log(displayedProducts)
    return (
      <div className="Products">
        <FilterForm
          priceFrom={this.state.priceFrom}
          priceTo={this.state.priceTo}
          onPriceInputChange={this.onPriceInputChange} />

        <ToggleColumns
          onCheckboxClick={this.onCheckboxClick}
          columns={this.state.columns} />

        <ProductList
          products={displayedProducts}
          columns={this.state.columns} />
      </div>
    );
  }
}
