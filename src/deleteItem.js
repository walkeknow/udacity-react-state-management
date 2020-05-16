import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class DeleteItem extends Component {
  static propTypes = {
      deleteLastItem: PropTypes.func.isRequired,
      noItemsFound: PropTypes.func.isRequired
  }
  render() {
    return (
      <button onClick={(event) => this.props.deleteLastItem(event)} disabled={this.props.noItemsFound()}>
        Delete Last Item
      </button>
    )
  }
}

export default DeleteItem
