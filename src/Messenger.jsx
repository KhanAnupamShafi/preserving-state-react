import { useState } from 'react';
import Chat from './Chat';
import ContactList from './ContactList.jsx';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  const [textByContact, setTextByContact] = useState({});

  const setText = (contact, message) => {
    setTextByContact({
      ...textByContact,
      [contact.id]: message,
    });
  };

  const getText = (contact) => textByContact[contact.id] || '';

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat
        key={to.id}
        contact={to}
        text={getText(to)}
        setText={(message) => setText(to, message)}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
