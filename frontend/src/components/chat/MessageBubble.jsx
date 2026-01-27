import "../../styles/Chat.css";
const MessageBubble = ({ message, isOwn }) => {
  return (
    <div className={`message-row ${isOwn ? "own" : "other"}`}>
      <div className={`message-bubble ${isOwn ? "own-bubble" : "other-bubble"}`}>
        <p>{message.content}</p>
        <span className="message-time">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
