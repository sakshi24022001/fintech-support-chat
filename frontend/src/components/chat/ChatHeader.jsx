import "../../styles/Chat.css";

const ChatHeader = ({ user }) => {
  return (
    <div className="chat-header">
      <div>
        <h2>FinTech Support Chat</h2>
        <p className="online">● Online</p>
      </div>
      <div className="username">{user?.name}</div>
    </div>
  );
};

export default ChatHeader;
