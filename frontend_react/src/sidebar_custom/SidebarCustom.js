import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaInfoCircle } from "react-icons/fa";

function SidebarCustom({ isSidebarVisible, toggleSidebar }) {
  //const [isSidebarVisible, setSidebarVisible] = useState(true);

  // function toggleSidebar() {
  //   setSidebarVisible(!isSidebarVisible);
  // }

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className={`p-2 fixed z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
          ${isSidebarVisible ? 'left-64 top-0' : 'left-0 top-0'}`}
      >
        {isSidebarVisible ? "Hide" : "Show"} Sidebar
      </button>

      {/* Gray screen overlay (updated) */}
      {isSidebarVisible && (
        <div 
          className="fixed top-0 left-0 h-screen w-64 bg-gray-300 opacity-50 z-30 pointer-events-none" 
          onClick={toggleSidebar}
        ></div>
      )}

      {isSidebarVisible && (
        <div className="w-64 bg-gray-100 border-r border-gray-100 ml-0 z-40">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-200">
              <button
                className="flex items-center w-full text-left cursor-pointer"
                onClick={() => {
                  /* Handle Home click */
                }}
              >
                <FaHome className="inline-block mr-2" />
                Home
              </button>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <button
                className="flex items-center w-full text-left cursor-pointer"
                onClick={() => {
                  /* Handle Profile click */
                }}
              >
                <FaUser className="inline-block mr-2" />
                Profile
              </button>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <button
                className="flex items-center w-full text-left cursor-pointer"
                onClick={() => {
                  /* Handle Settings click */
                }}
              >
                <FaCog className="inline-block mr-2" />
                Settings
              </button>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <button
                className="flex items-center w-full text-left cursor-pointer"
                onClick={() => {
                  /* Handle About click */
                }}
              >
                <FaInfoCircle className="inline-block mr-2" />
                About
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SidebarCustom;

