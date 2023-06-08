import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts || [];
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const contactWithId = { ...newContact, id: nanoid() };
    setContacts([...contacts, contactWithId]);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />

      <h4>Contacts</h4>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      ) : (
        <h6>No contacts found</h6>
      )}
    </div>
  );
};
