import React, { useState,useCallback,useEffect } from 'react';

function Gen() {
  const [length, setLength] = useState(16); // Default password length is set to 16
  const[charAllowed,setCharAllowed]=useState(false);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[password,setPassword]=useState('');

  const generatePassword = useCallback(() => {
    const numberChars = '0123456789';
    const letterChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let validChars = '';
    
    // Add allowed characters based on user input
    if (charAllowed) validChars += letterChars;
    if (numberAllowed) validChars += numberChars;

    // If no options are selected, return an empty password
    if (!validChars.length) {
      setPassword('');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      // Randomly select characters from the valid set
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    // Update the password in state
    setPassword(generatedPassword);
  }, [charAllowed, numberAllowed, length]);


  // use effect
  useEffect(()=>{
      generatePassword();
  },[length,numberAllowed,charAllowed]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-white text-center mb-4">Password Generator</h1>

        {/* Generated Password Field */}
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none"
            placeholder="Generated password"
            value={password}
            readOnly
          />
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        {/* Length Slider with Value Display */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label htmlFor="length" className="text-white">Length</label>
            <span className="text-white font-bold">{length}</span>
          </div>
          <input
            type="range"
            id="length"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full mt-2"
          />
        </div>

        {/* Checkboxes for Numbers and Characters */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 h-5 w-5"
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev)=> !prev);
              }}
            />
            <span className="ml-2">Include Numbers</span>
          </label>
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 h-5 w-5"
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev)=> !prev);
              }}
            />
            <span className="ml-2">Include Characters</span>
          </label>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 focus:outline-none"
          onClick={generatePassword} // Trigger password generation
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gen;
