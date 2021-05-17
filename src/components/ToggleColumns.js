import React, { Component } from 'react'

export default class ToggleColumns extends Component {
  onCheckboxClick = (e) => {
    // to-do: implement checkbox click handler
    this.props.onCheckboxClick(e.target.dataset.column, e.target.checked)
  }
  
  render() {
    return (
      <div className="toggle-columns">
        {/* Bind handlers and props */}
        { 
          Object.keys(this.props.columns).map((column, index) => {
            return ( 
            <div key={index}>
              <label>
                {column}
              </label>
              <input
                type="checkbox"
                checked={this.props.columns[column]}
                data-column={column}
                onChange={this.onCheckboxClick}/>
            </div>)
          })
        }
      </div>
    );
  }
}
