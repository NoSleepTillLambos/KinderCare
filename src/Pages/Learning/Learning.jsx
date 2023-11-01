import React, { useState } from "react";
import "./Learning.scss";
import axios from "axios";

export default function Learning() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loadingChat, setLoadingChat] = useState(false);

  const apiKey = "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";
  const handleSubmit = (e) => {
    e.preventDefault();

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
      Authorization: `Bearer ${apiKey}`,
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
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setLoadingChat(false);
      })
      .catch((error) => {
        setLoadingChat(false);
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Chat with our bot and learn!</h1>
      {chat.map((message, index) => {
        <div key={index}>{message.message}</div>;
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn">Ask</button>
      </form>
    </div>
  );
}
