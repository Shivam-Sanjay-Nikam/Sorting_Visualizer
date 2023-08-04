import React, { useState } from 'react';
import { bubblesort } from '../algorithms/Bubblesort';
import { mergesort } from '../algorithms/Mergesort';
import { heapsort } from '../algorithms/Heapsort';
import { quicksort } from '../algorithms/Quicksort';

const Types = ({ setArray, array, divRefs }) => {
  const [isSorting, setIsSorting] = useState(false);
  const [activeAlgorithm, setActiveAlgorithm] = useState(null);

  const handleSortClick = (sortingFunction) => {
    if (!isSorting) {
      setIsSorting(true);
      setActiveAlgorithm(sortingFunction.name);
      sortingFunction({ array, setArray, divRefs }).finally(() => {
        setIsSorting(false);
        setActiveAlgorithm(null);
      });
    }
  };

  return (
    <div className="mt-10 p-4 flex justify-center">
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline ${
          activeAlgorithm !== 'mergesort' ? '' : ' -translate-y-6 '
        }`}
        onClick={() => handleSortClick(mergesort)}
      >
        Merge Sort
      </button>
      <button
        className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline ${
          activeAlgorithm !== 'quicksort' ? '' : ' -translate-y-6'
        }`}
        onClick={() => handleSortClick(quicksort)}
      >
        Quick Sort
      </button>
      <button
        className={`bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline ${
          activeAlgorithm !== 'heapsort' ? '' : ' -translate-y-6'
        }`}
        onClick={() => handleSortClick(heapsort)}
      >
        Heap Sort
      </button>
      <button
        className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          activeAlgorithm !== 'bubblesort' ? '' : ' -translate-y-6'
        }`}
        onClick={() => handleSortClick(bubblesort)}
      >
        Bubble Sort
      </button>
    </div>
  );
};

export default Types;
