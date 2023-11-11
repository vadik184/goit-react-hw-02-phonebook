import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handelChange}
            required
          />
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="Enter number"
            onChange={this.handelChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
