import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddItemForm extends Component {
  static propTypes = {
    formSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    inputIsEmpty: PropTypes.func.isRequired
  }
  render() {
    return (
      <form onSubmit={(event) => this.props.formSubmit(event)}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.props.inputValue}
          onChange={(event) => this.props.handleChange(event)}
        />
        <button disabled={this.props.inputIsEmpty()}>Add</button>
      </form>

    )
  }
}

export default AddItemForm
