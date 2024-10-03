import React, { useState } from 'react';

function Bg() {
  const [bgColor, setBgColor] = useState('bg-gray-900'); // Default background color

  return (
    <div className={`h-screen ${bgColor} flex flex-col justify-center items-center`}>
      <h1 className="text-white text-4xl mb-8">Background Color Changer</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => setBgColor('bg-red-500')}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor('bg-green-500')}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Green
        </button>
        <button
          onClick={() => setBgColor('bg-yellow-500')}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Yellow
        </button>
        <button
          onClick={() => setBgColor('bg-gray-900')}
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Bg;
