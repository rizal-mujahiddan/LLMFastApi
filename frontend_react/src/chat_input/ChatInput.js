// ChatInput.js
import React, { useState } from "react";
import { sendMessage } from "../api/apiService";

function ChatInput({ isSidebarVisible, onApiResponse }) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await sendMessage(message);
      onApiResponse(response); 
      setMessage("");
    } catch (error)
 {
      console.error("Error sending message:", error);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full 
        ${
          isSidebarVisible
            ? "max-w-screen-md" // Adjust width when sidebar is visible
            : "max-w-screen-lg" // Adjust width when sidebar is hidden
        } 
        items-center border border-gray-300 rounded-lg px-4 py-2`}
    >
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleChange}
          className="flex-grow outline-none focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ChatInput;
