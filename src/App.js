import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="13c32380-7423-41c6-98e3-bad60d48dda4"
      userName="meetbeddy"
      userSecret="meetbeddy"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    ></ChatEngine>
  );
}

export default App;
