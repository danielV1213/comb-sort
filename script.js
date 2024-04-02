// Comb Sort algorithm using JavaScript
// This algorithm sorts an array of numbers by comparing and swapping adjacent elements by a defined gap between them
// The initial gap is defined by the array's length
// The gap starts to decrease by 1.3 in every run until the array is sorted. The factor 1.3 was empirically found after testing Comb Sort on over 200,000 random arrays

// Function used to find the gap between elements
function combSort(arr) {
  const shrinkFactor = 1.3; // The decreasing or shrink factor to determine the gap
  let gap = arr.length; // Initialize gap size
  let swapped = true; // Initialize swapped as true to make sure loop runs at least once

  // Keep running until no swaps occur and gap is greater than 1
  while (gap > 1 || swapped) {
    // Calculate next gap
    gap = Math.floor(gap / shrinkFactor);
    if (gap < 1) {
      gap = 1; // Ensure gap is at least 1
    }

    // Initialize swapped as false for this iteration
    swapped = false;

    // Compare all elements with current gap
    for (let i = 0; i + gap < arr.length; i++) {
      // If current element is greater than the element at gap position ahead, swap them
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]]; // Swap elements
        swapped = true; // Set swapped to true since a swap occurred
      }
    }
  }

  return arr;
}

// Testing the algorithm
const unsortedArray = [7, 4, 8, -58, -22, 12, 0, -96, 9, 5];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = combSort(unsortedArray.slice()); // Slice is used to make a copy of the array
console.log("Sorted Array:", sortedArray);

// Daniel Vélez.
