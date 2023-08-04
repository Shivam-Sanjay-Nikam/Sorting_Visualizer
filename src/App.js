// src/App.js
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import SortingVisualizer from './components/SortingVisualizer';
import Types from './components/Types';
import { AiFillHeart } from 'react-icons/ai';

function App() {
  function inputHandler(event) {
    const value = event.target.value;
    setNUMBER_OF_ELEMENTS_IN_ARRAY(value);
  }

  const [NUMBER_OF_ELEMENTS_IN_ARRAY, setNUMBER_OF_ELEMENTS_IN_ARRAY] = useState(3);
  const [array, setArray] = useState([]);
  const divRefs = useRef([]); // Create an array of refs

  // 0-0.999 -> Math.random
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArray() {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ELEMENTS_IN_ARRAY; i++) {
      newArray.push(randomIntFromInterval(10, 100));
    }
    setArray(newArray);
  }

  useEffect(() => {
    resetArray();
  }, [NUMBER_OF_ELEMENTS_IN_ARRAY]);

  return (
    <div className="App">
      <Navbar resetArray={resetArray} setNUMBER_OF_ELEMENTS_IN_ARRAY={setNUMBER_OF_ELEMENTS_IN_ARRAY} />
      <SortingVisualizer array={array} resetArray={resetArray} divRefs={divRefs} />
      <Types setArray={setArray} array={array} divRefs={divRefs} />
      <div className="text-center text-gray-600 text-lg mt-10">
        <AiFillHeart className="inline-block text-red-500 text-xl" /> Made By Shivam Nikam
      </div>

    </div>
  );
}

export default App;
