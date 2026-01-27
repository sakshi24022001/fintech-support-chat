import "../../styles/Chat.css";
const ChatWindow = ({ messages, userId }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`message ${
            msg.sender === userId ? "own" : "other"
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
