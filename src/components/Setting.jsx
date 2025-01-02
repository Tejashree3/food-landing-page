import React, { useState } from "react";
import { FaCog } from "react-icons/fa";

const colors = [
  { name: "Pink", color: "#f72585" },
  { name: "Orange", color: "#f77f00" },
  { name: "Blue", color: "#1d407f" },
  { name: "Green", color: "#00b35d" },
  { name: "Black", color: "#000000" },
 
];

const Settings = ({ setPrimaryColor }) => {
  const [showPalette, setShowPalette] = useState(false);

  const handleCustomColorChange = (e) => {
    setPrimaryColor(e.target.value);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setShowPalette(!showPalette)}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        <FaCog className="h-6 w-6 text-gray-900 dark:text-white" />
      </button>

      {showPalette && (
        <div className="absolute mt-2 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg right-0">
          <div className="flex space-x-2 mb-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setPrimaryColor(color.color)}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color.color }}
                title={color.name}
              ></button>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="color"
              onChange={handleCustomColorChange}
              className="w-8 h-8 cursor-pointer border-0"
              title="Pick a custom color"
            />
            <span className="ml-2 text-gray-900 dark:text-white">
           
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
