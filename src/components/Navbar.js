// src/components/Navbar.js
import React from 'react';

const Navbar = ({ resetArray, setNUMBER_OF_ELEMENTS_IN_ARRAY }) => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">Sorting Visualizer</div>
          <div className="flex items-center">
            <div className="text-white mr-2">Enter number of elements (1-13)</div>
            <input
              type="number"
              className="border rounded p-2 mr-2"
              placeholder='Eg :- 11'
              onChange={e => setNUMBER_OF_ELEMENTS_IN_ARRAY(e.target.value)}
            />
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={resetArray}
            >
              Generate Random Array
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
