import { useState } from 'react';
import { nanoid } from 'nanoid';
export default function ContactForm({ contacts, onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert('Contact with the same name already exists.');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={handleAddContact}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h6 style={{ margin: '0' }}>Name: </h6>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />
      <h6 style={{ margin: '0' }}>Phone: </h6>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
