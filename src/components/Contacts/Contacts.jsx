import React from 'react';
export const Contacts = prors => {
  return (
    <ul>
      {prors.contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
