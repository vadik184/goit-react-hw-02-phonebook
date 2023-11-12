import React from 'react';
export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
