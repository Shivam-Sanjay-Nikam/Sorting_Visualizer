function waitforme(milisec) {
    return new Promise(resolve => {
      setTimeout(resolve, milisec);
    });
  }
  
  async function merge(arr, left, mid, right, divRefs) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
  
    const L = new Array(n1);
    const R = new Array(n2);
  
    // Add classes for the first array (L) elements
    for (let i = 0; i < n1; i++) {
      L[i] = parseInt(divRefs.current[left + i].textContent);
      divRefs.current[left + i].classList.add('bg-blue-500', 'shadow', 'transition-all', 'duration-500');
      await waitforme(1000);
      divRefs.current[left + i].classList.remove('bg-blue-500', 'shadow');
    }
  
    // Add classes for the second array (R) elements
    for (let j = 0; j < n2; j++) {
      R[j] = parseInt(divRefs.current[mid + 1 + j].textContent);
      divRefs.current[mid + 1 + j].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-500');
      await waitforme(1000);
      divRefs.current[mid + 1 + j].classList.remove('bg-green-500', 'shadow');
    }
  
    let i = 0;
    let j = 0;
    let k = left;
  
    // Merge the two arrays while showing them in different colors
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        divRefs.current[k].textContent = L[i];
        arr[k] = L[i];
        divRefs.current[k].style.width = `${L[i] + 20}px`;
        divRefs.current[k].style.height = `${L[i] + 20}px`;
        divRefs.current[k].classList.add('bg-blue-500', 'shadow', 'transition-all', 'duration-500');
        await waitforme(1000);
        divRefs.current[k].classList.remove('bg-blue-500', 'shadow');
        i++;
      } else {
        divRefs.current[k].textContent = R[j];
        arr[k] = R[j];
        divRefs.current[k].style.width = `${R[j] + 20}px`;
        divRefs.current[k].style.height = `${R[j] + 20}px`;
        divRefs.current[k].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-500');
        await waitforme(1000);
        divRefs.current[k].classList.remove('bg-green-500', 'shadow');
        j++;
      }
      k++;
    }
  
    // Add remaining elements from the first array (L)
    while (i < n1) {
      divRefs.current[k].textContent = L[i];
      arr[k] = L[i];
      divRefs.current[k].style.width = `${L[i] + 20}px`;
      divRefs.current[k].style.height = `${L[i] + 20}px`;
      divRefs.current[k].classList.add('bg-blue-500', 'shadow', 'transition-all', 'duration-500');
      await waitforme(1000);
      divRefs.current[k].classList.remove('bg-blue-500', 'shadow');
      i++;
      k++;
    }
  
    // Add remaining elements from the second array (R)
    while (j < n2) {
      divRefs.current[k].textContent = R[j];
      arr[k] = R[j];
      divRefs.current[k].style.width = `${R[j] + 20}px`;
      divRefs.current[k].style.height = `${R[j] + 20}px`;
      divRefs.current[k].classList.add('bg-green-500', 'shadow', 'transition-all', 'duration-500');
      await waitforme(1000);
      divRefs.current[k].classList.remove('bg-green-500', 'shadow');
      j++;
      k++;
    }
  }
  
  async function mergeSort(arr, left, right, divRefs) {
    if (left >= right) return;
  
    const mid = Math.floor((left + right) / 2);
    await mergeSort(arr, left, mid, divRefs);
    await mergeSort(arr, mid + 1, right, divRefs);
    await merge(arr, left, mid, right, divRefs);
  }
  
  export async function mergesort({ array, setArray, divRefs }) {
    const n = array.length;
    await mergeSort(array, 0, n - 1, divRefs);
    console.log(array)
  }
  