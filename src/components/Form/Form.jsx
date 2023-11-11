import React, { Component } from 'react';

const initialState = {
  name: '',
  number: '',
};
export class Form extends Component {
  state = { ...initialState };
  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ ...initialState });
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
            value={this.state.name.value}
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
            value={this.state.number.value}
            placeholder="Enter number"
            onChange={this.handelChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
