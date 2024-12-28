// App.js
import React, { useState } from 'react';
import SidebarCustom from './sidebar_custom/SidebarCustom';
import ChatInput from './chat_input/ChatInput';
import ApiResponseDisplay from './api/ApiResponseDisplay'; 

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [apiResponse, setApiResponse] = useState(null); 

  function toggleSidebar() {
    setSidebarVisible(!isSidebarVisible);
  }

  const handleApiResponse = (response) => {
    setApiResponse(response);
    console.log('API Response:', response);
  };

  return (
    <div className="flex">
      <SidebarCustom isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="flex-1 relative">
        <div className="container mx-auto">
          <div className="flex flex-col items-center w-full max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold text-center">Rizal ChatGPT</h1>
            <ChatInput isSidebarVisible={isSidebarVisible} onApiResponse={handleApiResponse} /> 
            <ApiResponseDisplay apiResponse={apiResponse} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;