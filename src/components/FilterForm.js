import React, { Component } from 'react'

export default class FilterForm extends Component {

  onPriceInputChange = (e) => {
    // to-do: implement handler
    this.props.onPriceInputChange(e.target.name, e.target.value)
  }

  render() {
    return (
      <div>
        {/* Bind handlers and props */}
        <label htmlFor="name">Filter:</label>
        <input
          onChange={this.onPriceInputChange}
          type="number"
          name="priceFrom"
          value={this.props.priceFrom}
          placeholder="Price from..." />
        <input
          onChange={this.onPriceInputChange}
          type="number"
          name="priceTo"
          value={this.props.priceTo}
          placeholder="Price to..." />
      </div>
    )
  }
}
