import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ItemList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }
  render() {
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    )
  }
}

export default ItemList
