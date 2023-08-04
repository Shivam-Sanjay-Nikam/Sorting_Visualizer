function waitforme(milisec) {
    return new Promise(resolve => {
      setTimeout(resolve, milisec);
    });
  }
  
  async function heapify(arr, n, i, divRefs) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    // Highlight the current element and its children being compared
    divRefs.current[i].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-200');
    if (left < n) {
      divRefs.current[left].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-200');
      await waitforme(500);
      divRefs.current[left].classList.remove('bg-green-500', 'shadow');
    }
    if (right < n) {
      divRefs.current[right].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-200');
      await waitforme(500);
      divRefs.current[right].classList.remove('bg-green-500', 'shadow');
    }
  
    if (left < n && parseInt(divRefs.current[left].textContent) > parseInt(divRefs.current[largest].textContent)) {
      largest = left;
    }
  
    if (right < n && parseInt(divRefs.current[right].textContent) > parseInt(divRefs.current[largest].textContent)) {
      largest = right;
    }
  
    if (largest !== i) {
      // Swap the content of the div elements and update the actual array
      let temp = divRefs.current[i].textContent;
      divRefs.current[i].textContent = divRefs.current[largest].textContent;
      divRefs.current[largest].textContent = temp;
      arr[i] = parseInt(divRefs.current[i].textContent);
      arr[largest] = parseInt(divRefs.current[largest].textContent);
      const iHeight = parseInt(divRefs.current[i].textContent);
      divRefs.current[i].style.width = `${iHeight + 20}px`;
      divRefs.current[i].style.height = `${iHeight + 20}px`;
  
      const largestHeight = parseInt(divRefs.current[largest].textContent);
      divRefs.current[largest].style.width = `${largestHeight + 20}px`;
      divRefs.current[largest].style.height = `${largestHeight + 20}px`;
  
      await waitforme(500);
      await heapify(arr, n, largest, divRefs);
    }
  
    // Reset the color and shadow of the current element
    divRefs.current[i].classList.remove('bg-green-500', 'shadow', 'transition-all', 'duration-200');
  }
  
  export async function heapsort({ array, setArray, divRefs }) {
    const n = array.length;
  
    // Heapify each subtree
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(array, n, i, divRefs);
    }
  
    // Extract elements one by one from the heap
    for (let i = n - 1; i > 0; i--) {
      // Move the current root to the end
      let temp = divRefs.current[0].textContent;
      divRefs.current[0].textContent = divRefs.current[i].textContent;
      divRefs.current[i].textContent = temp;
      array[0] = parseInt(divRefs.current[0].textContent);
      array[i] = parseInt(divRefs.current[i].textContent);
      const iHeight = parseInt(divRefs.current[0].textContent);
      const lastHeight = parseInt(divRefs.current[i].textContent);
      divRefs.current[0].style.width = `${iHeight + 20}px`;
      divRefs.current[0].style.height = `${iHeight + 20}px`;
      divRefs.current[i].style.width = `${lastHeight + 20}px`;
      divRefs.current[i].style.height = `${lastHeight + 20}px`;
  
      await waitforme(500);
  
      await heapify(array, i, 0, divRefs);
    }
    console.log(array);
  }
  