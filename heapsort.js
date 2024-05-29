// heapSort Function: This is the main function that sorts the array. It first builds a max heap from the input array using buildMaxHeap. Then, it iteratively swaps the first element (the largest) with the last unsorted element and reduces the size of the heap, calling heapify to restore the heap property.

// buildMaxHeap Function: This function constructs a max heap from an unsorted array. It starts from the middle of the array and calls heapify on each element to ensure all elements satisfy the max heap property.

// heapify Function: This function ensures the max heap property is maintained. It checks if the children of a given node are larger than the node itself and swaps them if necessary, then recursively calls itself on the affected sub-tree.

// Example Usage: The provided example demonstrates how to use the heapSort function to sort an array.


// Heap sort algorithm implementation in JavaScript

// Function to sort an array using heap sort
function heapSort(array) {
    buildMaxHeap(array);

    for (let i = array.length - 1; i >= 1; i--) {
        // Swap the first element (largest) with the last element
        [array[0], array[i]] = [array[i], array[0]];

        // Reduce the heap size
        heapSize--;

        // Restore the max heap property
        heapify(array, 0, heapSize);
    }
}

// Function to build a max heap from an array
function buildMaxHeap(array) {
    heapSize = array.length;

    // Start from the middle of the array and move to the beginning
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        heapify(array, i, heapSize);
    }
}

// Function to maintain the max heap property
function heapify(array, index, heapSize) {
    let largest = index;
    let left = 2 * index + 1;  // Left child
    let right = 2 * index + 2; // Right child

    // If left child is larger than the current largest
    if (left < heapSize && array[left] > array[largest]) {
        largest = left;
    }

    // If right child is larger than the current largest
    if (right < heapSize && array[right] > array[largest]) {
        largest = right;
    }

    // If the largest element is not the current element, swap them
    if (largest !== index) {
        [array[index], array[largest]] = [array[largest], array[index]];

        // Recursively heapify the affected sub-tree
        heapify(array, largest, heapSize);
    }
}

// Example usage
let array = [4, 10, 3, 5, 1];
console.log("Original array:", array);

heapSort(array);
console.log("Sorted array:", array);
