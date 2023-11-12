import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

import { formatPhoneNumber } from 'components/Form/Number';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  deleteContact = contactID => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactID),
    }));
  };
  formSubmitHandler = data => {
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      )
    ) {
      return alert(`${data.name} is already in contacts`);
    }
    return this.setState(prev => ({
      ...prev,
      contacts: [
        ...prev.contacts,
        {
          id: nanoid(),
          name: data.name,
          number: formatPhoneNumber(data.number),
        },
      ],
    }));
  };

  chageFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  InputId = nanoid();
  render() {
    const selectedByFilter = this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.state.filter} onChageFilter={this.chageFilter} />
          <Contacts
            contacts={selectedByFilter}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
