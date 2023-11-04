import React, { useState } from "react";
import "./Chat.scss";
import axios from "axios";

export default function Chat() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loadingChat, setLoadingChat] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
    setChat((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: input },
    ]);

    setInput("");
  };

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    setLoadingChat(true);

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setChat((prevChatLog) => [
          ...prevChatLog,
          {
            type: "bot",
            message: response.data.choices[0].message.content,
          },
        ]);
        setLoadingChat(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingChat(false);
      });
  };

  return (
    <div className="con">
      <h4>Chat to our friendly bot and learn</h4>
      <div className="chatCon">
        {chat.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.message}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="askInput"
            type="text"
            placeholder="Ask a question..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn askBtn" type="submit">
            Ask question
          </button>
        </form>
      </div>
    </div>
  );
}
