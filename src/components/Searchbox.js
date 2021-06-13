import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbox extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { value: '' };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    );
  }
}
