import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ChoosePage from "./pages/ChoosePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/choose" element={<ChoosePage />} />
        <Route path="/chats" element={<ChatPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
