import React, { Component } from 'react';
import { nanoid } from 'nanoid';
const initState = {
  name: '',
  number: '',
};
export class Form extends Component {
  state = { ...initState };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ ...initState });
  };
  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label
          htmlFor={this.nameInputId}
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
            id={this.nameInputId}
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handelChange}
            required
          />
        </label>
        <label
          htmlFor={this.numberInputId}
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
            id={this.numberInputId}
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
