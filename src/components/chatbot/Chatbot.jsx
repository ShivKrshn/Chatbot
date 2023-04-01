import "./chatbot.scss";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: input, isUser: true }]);

    setInput("");

    const response = generateResponse(input);

    setTimeout(() => {
      setMessages((prevMessages) => {
        return [...prevMessages, { text: response, isUser: false }];
      });
    }, 1000);
  };

  const generateResponse = (input) => {
    // hardcoded responses
    switch (input.toLowerCase()) {
      case "hello":
        return "Hi there!";
      case "how about you":
        return "I am doing well, thank you for asking.";
      case "what is your name":
        return "My name is Chatbot.";
      default:
        return "I am not sure what you mean. Can you please rephrase your question?";
    }
  };

  return (
    <div className="container">
      <div className="message-log">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          placeholder="write a message..."
          onChange={inputChangeHandler}
        />
        <button type="submit">
          <SendOutlinedIcon />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
