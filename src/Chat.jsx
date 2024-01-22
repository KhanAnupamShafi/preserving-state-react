export default function Chat({ contact, text, setText }) {
  const sendMessage = () => {
    // Handle sending the message here
    console.log('Sending message:', text);

    // Optionally, you can clear the text after sending
    setText('');
  };

  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={sendMessage}>Send to {contact.email}</button>
    </section>
  );
}
