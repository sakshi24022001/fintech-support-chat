    import ChatHeader from "../components/chat/ChatHeader";
    import ChatWindow from "../components/chat/ChatWindow";
    import MessageInput from "../components/chat/MessageInput";
    import { useAuth } from "../hooks/useAuth";
    import { useChat } from "../hooks/useChat";
    import "../styles/Chat.css";

export default function Chat() {
  const { state } = useAuth();
  const { messages, addMessage } = useChat();

  if (!state?.user) {
    return <div>Loading chat...</div>;
  }

  const sendMessage = (text) => {
    addMessage({
      sender: state.user._id,
      content: text,
      createdAt: new Date(),
    });
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <ChatHeader user={state.user} />
        <ChatWindow messages={messages} userId={state.user._id} />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}

