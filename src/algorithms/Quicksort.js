function waitforme(milisec) {
    return new Promise(resolve => {
      setTimeout(resolve, milisec);
    });
  }
  
  async function quickSort(arr, low, high, divRefs) {
    if (low < high) {
      let pivot = parseInt(divRefs.current[high].textContent);
      let i = low - 1;
  
      // Highlight the pivot element
      divRefs.current[high].classList.add('bg-red-500', 'shadow', 'transition-all', 'duration-500');
      await waitforme(1000);
      divRefs.current[high].classList.remove('bg-red-500', 'shadow');
  
      for (let j = low; j < high; j++) {
        divRefs.current[j].classList.add('bg-blue-500', 'shadow', 'transition-all', 'duration-500');
        await waitforme(1000);
  
        if (parseInt(divRefs.current[j].textContent) <= pivot) {
          i++;
          // Swap elements at i and j
          let temp = divRefs.current[i].textContent;
          divRefs.current[i].textContent = divRefs.current[j].textContent;
          divRefs.current[j].textContent = temp;
  
          // Swap elements in the actual array
          [arr[i], arr[j]] = [arr[j], arr[i]];
  
          const iHeight = parseInt(divRefs.current[i].textContent);
          const jHeight = parseInt(divRefs.current[j].textContent);
          divRefs.current[i].style.width = `${iHeight + 20}px`;
          divRefs.current[i].style.height = `${iHeight + 20}px`;
          divRefs.current[j].style.width = `${jHeight + 20}px`;
          divRefs.current[j].style.height = `${jHeight + 20}px`;
        }
  
        divRefs.current[j].classList.remove('bg-blue-500', 'shadow');
      }
  
      // Swap the pivot element to its correct position
      let temp = divRefs.current[i + 1].textContent;
      divRefs.current[i + 1].textContent = divRefs.current[high].textContent;
      divRefs.current[high].textContent = temp;
  
      // Swap elements in the actual array
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
      const pivotHeight = parseInt(divRefs.current[i + 1].textContent);
      const highHeight = parseInt(divRefs.current[high].textContent);
      divRefs.current[i + 1].style.width = `${pivotHeight + 20}px`;
      divRefs.current[i + 1].style.height = `${pivotHeight + 20}px`;
      divRefs.current[high].style.width = `${highHeight + 20}px`;
      divRefs.current[high].style.height = `${highHeight + 20}px`;
  
      // Highlight the pivot element after positioning
      divRefs.current[i + 1].classList.add('bg-red-500', 'shadow', 'transition-all', 'duration-500');
      await waitforme(1000);
      divRefs.current[i + 1].classList.remove('bg-red-500', 'shadow');
  
      // Recursive calls for left and right partitions
      await quickSort(arr, low, i, divRefs);
      await quickSort(arr, i + 2, high, divRefs);
    }
  }
  
  export async function quicksort({ array, setArray, divRefs }) {
    const n = array.length;
    await quickSort(array, 0, n - 1, divRefs);
    console.log(array)
  }
  