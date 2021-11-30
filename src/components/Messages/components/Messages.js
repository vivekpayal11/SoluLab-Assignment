import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import io from "socket.io-client";
import useSound from "use-sound";
import config from "../../../config";
import LatestMessagesContext from "../../../contexts/LatestMessages/LatestMessages";
import TypingMessage from "./TypingMessage";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import "../styles/_messages.scss";
import { BottyGreetMessage } from "./BottyGreetMessage";

const ME = "me";
const BOT = "bot";

const socket = io(config.BOT_SERVER_ENDPOINT, {
  transports: ["websocket", "polling", "flashsocket"],
});

function Messages() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([BottyGreetMessage]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [playSend] = useSound(config.SEND_AUDIO_URL);
  const [playReceive] = useSound(config.RECEIVE_AUDIO_URL);
  const { setLatestMessage } = useContext(LatestMessagesContext);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.off("bot-message");
    socket.on("bot-message", (message) => {
      setIsBotTyping(false);
      setMessages([...messages, { message, user: BOT, id: Date.now() }]);
      setLatestMessage(BOT, message);
      playReceive();   
     });
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    socket.on("bot-typing", () => {
      setIsBotTyping(true);
    });
    scrollToBottom();
  }, []);

  const sendMessage = useCallback(() => {
    if (!message) {
      return;
    }
    setMessages([...messages, { message, user: ME, id: Date.now() }]);
    playSend();
    scrollToBottom();
    socket.emit("user-message", message);
    setMessage("");
  }, [messages, message]);

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="messages">
      <Header />
      <div className="messages__list" id="message-list">
        {messages.map((message, index) => (
          <Message
            message={message}
            nextMessage={messages[index + 1]}
            botTyping={isBotTyping}
          />
        ))}
        <div ref={messagesEndRef} />
        {isBotTyping ? <TypingMessage /> : null}
      </div>
      <Footer
        message={message}
        sendMessage={sendMessage}
        onChangeMessage={onChangeMessage}
      />
    </div>
  );
}

export default Messages;
