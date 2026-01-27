import { useState } from "react";
import "../../styles/Chat.css";
const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
      />
      <button onClick={send}>Send</button>
    </div>
  );
};

export default MessageInput;
