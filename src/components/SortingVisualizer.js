import React, { useRef } from 'react'

// { NUMBER_OF_ELEMENTS_IN_ARRAY, resetArray, array, setArray, randomIntFromInterval }

const SortingVisualizer = ({ array,divRefs }) => {
    
    console.log(array)
    return (
        <div className="flex flex-row space-x-4 justify-center mt-[200px] items-center" >
            {array.map((value,index) => (
                <div ref={(element) => (divRefs.current[index] = element)} className="bg-black rounded-full flex items-center justify-center text-white " style={{ height: `${value + 20}px`, width: `${value + 20}px` }}>
                    {value}
                </div>
            ))}
        </div>
    )
}

export default SortingVisualizer