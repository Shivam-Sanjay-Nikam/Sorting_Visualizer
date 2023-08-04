function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(resolve, milisec);
    });
}
export async function bubblesort({ array, setArray, divRefs }) {
    const n = array.length;
    let swapped;
  
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight the current element and the next element being compared
        divRefs.current[j].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-500');
        divRefs.current[j + 1].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-500');
        divRefs.current[j].style.fontWeight = 'bold';
        await waitforme(1000); // Delay of 1000ms
  
        if (parseInt(divRefs.current[j].textContent) > parseInt(divRefs.current[j + 1].textContent)) {
          divRefs.current[j].classList.remove('bg-green-500', 'shadow');
          divRefs.current[j + 1].classList.remove('bg-green-500', 'shadow');
          divRefs.current[j].classList.add('bg-red-500', 'shadow-lg', 'transform', 'scale-110', 'transition-all', 'duration-500');
          divRefs.current[j + 1].classList.add('bg-red-500', 'shadow-lg', 'transform', 'scale-110', 'transition-all', 'duration-500');
          await waitforme(1000); // Delay of 1000ms
  
          // Swap the content of the div elements
          let temp = divRefs.current[j].textContent;
          divRefs.current[j].textContent = divRefs.current[j + 1].textContent;
          const jHeight = parseInt(divRefs.current[j].textContent);
          divRefs.current[j].style.width = `${jHeight + 20}px`;
          divRefs.current[j].style.height = `${jHeight + 20}px`;
  
          divRefs.current[j + 1].textContent = temp;
          const j1Height = parseInt(divRefs.current[j + 1].textContent);
  
          divRefs.current[j + 1].style.width = `${j1Height + 20}px`;
          divRefs.current[j + 1].style.height = `${j1Height + 20}px`;
          await waitforme(1000); // Delay of 1000ms
  
          divRefs.current[j].classList.remove('bg-red-500', 'shadow-lg', 'transform', 'scale-110');
          divRefs.current[j + 1].classList.remove('bg-red-500', 'shadow-lg', 'transform', 'scale-110');
          divRefs.current[j].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-500');
          divRefs.current[j + 1].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-500');
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
  
        // Reset the color of the current element and the next element being compared
        divRefs.current[j].classList.remove('bg-green-500', 'shadow', 'font-bold');
        divRefs.current[j + 1].classList.remove('bg-green-500', 'shadow');
        divRefs.current[j].style.fontWeight = 'normal';
        divRefs.current[j + 1].style.fontWeight = 'normal';
        divRefs.current[j].classList.add('bg-black', 'shadow-none');
        divRefs.current[j + 1].classList.add('bg-black', 'shadow-none');
      }
  
      if (!swapped) {
        break;
      }
    }
    // Optional: Call setflag to indicate sorting is complete
    setArray([...array]);
    console.log(array)
}
