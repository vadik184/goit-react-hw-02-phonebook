import React from 'react';
export const Contacts = prors => {
  return (
    <ul>
      {prors.contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};
