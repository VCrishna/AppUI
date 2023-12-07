// algorithms-content.ts
import { Algorithm } from './algorithm.model';

export const ALGORITHMS_CONTENT: Algorithm[] = [
  {
    category: 'Searching',
    name: 'Linear Search',
    description:
      'A simple searching algorithm that finds the position of a target value within a list.',
    content: `<p>
        <strong>Linear Search</strong> is a simple searching algorithm that finds the position of a target value within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.
      </p>

      <p>
        <strong>Algorithm:</strong>
      </p>

      <ol>
        <li>Start from the first element (index 0) of the list.</li>
        <li>Compare the current element with the target value.</li>
        <li>If the current element is equal to the target, return the current index as the position of the target.</li>
        <li>If not, move to the next element in the list.</li>
        <li>Repeat steps 2-4 until a match is found or the end of the list is reached.</li>
        <li>If the end of the list is reached and no match is found, return a signal (e.g., -1) indicating that the target is not present in the list.</li>
      </ol>

      <p>
        <strong>How to identify Linear Search:</strong>
      </p>

      <ul>
        <li>Sequentially checks each element in the list.</li>
        <li>Simple and intuitive but not the most efficient for large datasets.</li>
      </ul>

      <p>
        <strong>Time Complexity:</strong>
      </p>

      <p>
        In the worst case, when the target is at the end of the list or not present, the time complexity is O(n), where 'n' is the number of elements in the list.
      </p>

      <p>
        <strong>Space Complexity:</strong>
      </p>

      <p>
        Linear Search has a space complexity of O(1) as it doesn't require additional space proportional to the input size.
      </p>

      <p>
        <strong>Advantages:</strong>
      </p>

      <ul>
        <li>Easy to understand and implement.</li>
        <li>Suitable for small lists or unsorted data.</li>
      </ul>

      <p>
        <strong>Disadvantages:</strong>
      </p>

      <ul>
        <li>Inefficient for large datasets compared to more advanced search algorithms.</li>
      </ul>`,
  },
  {
    category: 'Searching',
    name: 'Binary Search',
    description:
      'A searching algorithm that finds the position of a target value within a sorted array.',
    content: `<p>
        <strong>Binary Search</strong> is an efficient searching algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array and narrows down the search range by half based on the comparison.
      </p>

      <p>
        <strong>Algorithm:</strong>
      </p>

      <ol>
        <li>Start with the entire sorted array.</li>
        <li>Calculate the middle index of the current search range.</li>
        <li>Compare the middle element with the target value.</li>
        <li>If the middle element is equal to the target, return the middle index as the position of the target.</li>
        <li>If the middle element is greater than the target, search the left half of the array.</li>
        <li>If the middle element is less than the target, search the right half of the array.</li>
        <li>Repeat steps 2-6 until a match is found or the search range becomes empty.</li>
        <li>If the search range is empty and no match is found, return a signal (e.g., -1) indicating that the target is not present in the array.</li>
      </ol>

      <p>
        <strong>How to identify Binary Search:</strong>
      </p>

      <ul>
        <li>Divides the search range by half in each step.</li>
        <li>Requires a sorted array as input.</li>
      </ul>

      <p>
        <strong>Time Complexity:</strong>
      </p>

      <p>
        Binary Search has a time complexity of O(log n) in the worst and average cases, where 'n' is the number of elements in the array.
      </p>

      <p>
        <strong>Space Complexity:</strong>
      </p>

      <p>
        Binary Search has a space complexity of O(1) as it doesn't require additional space proportional to the input size.
      </p>

      <p>
        <strong>Advantages:</strong>
      </p>

      <ul>
        <li>Efficient for searching in large, sorted datasets.</li>
        <li>Reduces the search space by half in each step.</li>
      </ul>

      <p>
        <strong>Disadvantages:</strong>
      </p>

      <ul>
        <li>Requires a sorted array as input.</li>
        <li>May not be optimal for small or unsorted datasets.</li>
      </ul>`,
  },
  {
    category: 'Sorting',
    name: 'Bubble Sort',
    description: 'A simple sorting algorithm.',
    content: `<p>
            <strong>Bubble Sort</strong> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, indicating that the list is sorted.
          </p>

          <p>
            <strong>Algorithm:</strong>
          </p>

          <ol>
            <li>Start with the first element (index 0) and compare it with the next element (index 1).</li>
            <li>If the first element is greater than the second element, swap them.</li>
            <li>Move to the next pair of elements (index 1 and index 2) and repeat the comparison and swap if necessary.</li>
            <li>Continue this process, comparing and swapping adjacent elements, until you reach the end of the list.</li>
            <li>After the first pass, the largest element will be at the end of the list.</li>
            <li>Repeat the process for the remaining elements, excluding the last one that is already sorted.</li>
            <li>Continue these passes until no more swaps are needed, indicating that the list is sorted.</li>
          </ol>

          <p>
            <strong>How to identify Bubble Sort:</strong>
          </p>

          <ul>
            <li>The algorithm repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</li>
            <li>It is a simple sorting algorithm with quadratic time complexity.</li>
            <li>Useful for educational purposes but less efficient compared to other sorting algorithms for large datasets.</li>
          </ul>

          <p>
            <strong>Time Complexity:</strong>
          </p>

          <p>
            The time complexity of Bubble Sort is O(n^2) in the worst and average cases, where 'n' is the number of elements in the list. In the best case (when the list is already sorted), the time complexity is O(n).
          </p>

          <p>
            <strong>Space Complexity:</strong>
          </p>

          <p>
            Bubble Sort has a space complexity of O(1) as it only requires a constant amount of extra space for the swapping of elements.
          </p>

          <p>
            <strong>Advantages:</strong>
          </p>

          <ul>
            <li>Simple to understand and implement.</li>
            <li>Requires minimal additional memory space.</li>
          </ul>

          <p>
            <strong>Disadvantages:</strong>
          </p>

          <ul>
            <li>Not efficient for large datasets due to its quadratic time complexity.</li>
            <li>There are more efficient sorting algorithms available, such as QuickSort and MergeSort.</li>
          </ul>
          <h5>Implementation in Java:</h5>
        <pre>
        <code>
        for(int i = 0; i < matrix.length; i++) {
            for(int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        </code>
        </pre>
`,
  },
  {
    category: 'Sorting',
    name: 'Insertion Sort',
    description:
      'A simple sorting algorithm that builds the final sorted array one item at a time.',
    content: `<p>
            <strong>Insertion Sort</strong> is a simple sorting algorithm that builds the final sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as QuickSort, HeapSort, or MergeSort. However, it has some advantages that make it suitable in certain situations.
        </p>

        <p>
            <strong>Algorithm:</strong>
        </p>

        <ol>
            <li>Start with the second element (index 1) and consider it as the key.</li>
            <li>Compare the key with the element before it (index 0).</li>
            <li>If the key is smaller, swap it with the previous element.</li>
            <li>Move the key to the left and continue comparing it with the elements before until it is in the correct position.</li>
            <li>Repeat these steps for the remaining unsorted elements, each time inserting the current element into its correct position among the sorted elements.</li>
        </ol>

        <p>
            <strong>How to identify Insertion Sort:</strong>
        </p>

        <ul>
            <li>Builds the final sorted array one element at a time.</li>
            <li>Efficient for small datasets and nearly sorted lists.</li>
            <li>Simple to understand and implement.</li>
        </ul>

        <p>
            <strong>Time Complexity:</strong>
        </p>

        <p>
            The time complexity of Insertion Sort is O(n^2) in the worst and average cases, where 'n' is the number of elements in the list. In the best case (when the list is nearly sorted), the time complexity is O(n).
        </p>

        <p>
            <strong>Space Complexity:</strong>
        </p>

        <p>
            Insertion Sort has a space complexity of O(1) as it only requires a constant amount of extra space for the swapping of elements.
        </p>

        <p>
            <strong>Advantages:</strong>
        </p>

        <ul>
            <li>Efficient for small datasets and nearly sorted lists.</li>
            <li>Simple to understand and implement.</li>
            <li>Adaptive – performs well for partially sorted datasets.</li>
        </ul>

        <p>
            <strong>Disadvantages:</strong>
        </p>

        <ul>
            <li>Not efficient for large datasets due to its quadratic time complexity.</li>
            <li>There are more efficient sorting algorithms available for larger datasets.</li>
        </ul>

        <h5>Implementation in Java:</h5>
        <pre>
        <code>
        public class InsertionSort {
            public static void insertionSort(int[] arr) {
                int n = arr.length;
                for (int i = 1; i < n; ++i) {
                    int key = arr[i];
                    int j = i - 1;

                    // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
                    while (j >= 0 && arr[j] > key) {
                        arr[j + 1] = arr[j];
                        j = j - 1;
                    }
                    arr[j + 1] = key;
                }
            }

            public static void main(String[] args) {
                int[] arr = {64, 34, 25, 12, 22, 11, 90};

                System.out.println("Original array: " + Arrays.toString(arr));

                insertionSort(arr);

                System.out.println("Sorted array: " + Arrays.toString(arr));
            }
        }
        </code>
        </pre>
        </p>`,
  },
  {
    category: 'Sorting',
    name: 'Selection Sort',
    description: '',
    content: '',
  },
  {
    category: 'Sorting',
    name: 'Heap Sort',
    description: '',
    content: '',
  },
  {
    category: 'Sorting',
    name: 'Merge Sort',
    description: '',
    content: '',
  },
  {
    category: 'Sorting',
    name: 'Quick Sort',
    description: '',
    content: '',
  },
  {
    category: 'Graph Algorithms',
    name: 'Breadth First Search',
    description: '',
    content: '',
  },
  {
    category: 'Graph Algorithms',
    name: 'Depth First Search',
    description: '',
    content: '',
  },
  {
    category: 'Graph Algorithms',
    name: 'Dijkstras Algorithm',
    description: '',
    content: '',
  },
  {
    category: 'Basic Math Algorithms',
    name: 'Euclids Algorithm for GCD',
    description: '',
    content: '',
  },
  {
    category: 'Basic Math Algorithms',
    name: 'Sieve of Erstosthenes',
    description: '',
    content: '',
  },
  {
    category: 'Basic Math Algorithms',
    name: 'Bit Manipulation',
    description: '',
    content: '',
  },
  {
    category: 'Tree Algorithms',
    name: 'Inorder Traversal',
    description: '',
    content: '',
  },
  {
    category: 'Tree Algorithms',
    name: 'Preorder Traversal',
    description: '',
    content: '',
  },
  {
    category: 'Tree Algorithms',
    name: 'Postorder Traversal',
    description: '',
    content: '',
  },
  {
    category: 'Tree Algorithms',
    name: 'Kruskas Algorithm',
    description: '',
    content: '',
  },
  {
    category: 'BackTracking',
    name: 'BackTracking Algorithm',
    description: '',
    content: '',
  },
  {
    category: 'Dynamic Programming',
    name: 'Floyd-Warshall Algorithm',
    description: '',
    content: '',
  },

  // Add more algorithms as needed
];
