import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ChatProvider>
<Routes>
  <Route path="/login" element={<Login />} />

  <Route
    path="/chat"
    element={
      <ProtectedRoute>
        <Chat />
      </ProtectedRoute>
    }
  />

  {/* optional redirect */}
  <Route path="*" element={<Navigate to="/chat" replace />} />
</Routes>

        </ChatProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
