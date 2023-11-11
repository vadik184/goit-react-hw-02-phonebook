import React, { Component } from 'react';

// import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Form } from 'components/Form/Form';
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

  formSubmitHandler = data => {
    console.log(data);
  };
  // InputId = nanoid();
  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}
