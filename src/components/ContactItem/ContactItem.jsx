export default function ContactItem({ contact, onDeleteContact }) {
  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
}
