export const DATA_STRUCTURES_CONTENT = [
  {
    name: 'Arrays',
    content: `
        <p> <code>Arrays</code> are a data structure that can hold more than one value at a time. It is a collection of variables that are accessed with an index number.</p>
        <p>Arrays in Java are objects that store multiple variables of the same type. However, an array itself is an object on the heap.</p>
        <h4>Declaration:</h4>
        <p>An array declaration has two components: the type of the array and its name.</p>
        <p>You can declare an array using either of these methods:</p>

        <p>
          <code>dataType[] arrayName;</code> // preferred <br>
          <code>dataType arrayName[];</code> // works but not preferred
        </p>
        <p><code>int[] myArray;</code><br>
        <code>int myArray[];</code></p>
        <h4>Initialization:</h4>
        <p>Arrays in Java are objects. Hence, they are created using the new keyword followed by the data type.</p>
        <p>
          <code>int[] arrayName = new int[size of the array];</code>
        </p>
        <p><code>int[] myArray = new int[5];</code> // allocates memory for 5 integers</p>
        <h4>Assigning Values:</h4>
        <p>
            <code>myArray[0] = 100;</code><br>
            <code>myArray[1] = 200;</code>
        </p>
        <h4>Array Length:</h4>
        <p>You can find the <code>length</code> of an array (i.e., the number of elements it can hold) using the length attribute:</p>
        <p>
        <code>int len = arr.length;</code>
        </p>
        <h4>Shortcut Initialization:</h4>
        <p><code>int[] myArray = {100, 200, 300, 400, 500};</code></p>

        <h4>Assignment:</h4>
        <p>You can assign values to specific locations in the array.</p>
        <p><code>arr[0] = 1; <br>
              arr[1] = 2; <br>
              // ... and so on.
        </code>
        </p>
        
        <h4>Multidimensional Arrays:</h4>
        <p>Java supports arrays with more than one dimension, commonly used as '2D arrays'.</p>
        <p><code>int[][] matrix = new int[5][5]; // 5x5 integer matrix</code></p>

        <h4>Dynamic Arrays:</h4>
        <p>In Java, arrays have a fixed size. To overcome this limitation, you can use <code>ArrayList</code>, which is a resizable array.</p>
        <p>
        <code>ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();<br>
        list.add(1);  // appends the element to the end
        </code><br>
        </p>

        <h4>Array Memory Management:</h4>
        <p>Arrays in Java are stored in continuous memory locations. For objects, the references are stored in continuous locations, not the actual objects.</p>

        <h4>Arrays of Objects:</h4>
        <p>When you create an array of objects, remember you're creating an array of references.</p>
        <p>
        <code>String[] strings = new String[5]; <br>
        strings[0] = new String("Hello");
        </code>
        </p>
        
        <h4>Array Manipulation:</h4>

        <h4>Copying Arrays:</h4>
        <p><code>System.arraycopy(src, srcPos, dest, destPos, length); or Arrays.copyOf()</code></p>

        <h4>Comparing Arrays:</h4>
        <p><code>Arrays.equals(arr1, arr2);  // checks if two arrays are equal.</code></p>

        <h4>Filling Arrays:</h4>
        <p><code>Arrays.fill(arr, value); // fills the array with the provided value.</code></p>

        <h4>Sorting Arrays:</h4>
        <p><code>Arrays.sort(arr); // sorts the array in ascending order.</code></p>

        <h4>Common Mistakes:</h4>
        <ul>
            <li><strong>Out of Bounds:</strong> Remember, array indices start at 0 and go to length - 1.</li>
            <li><strong>Null Pointer Exception:</strong> If you declare but don't initialize an array and try to use it, you'll get a NullPointerException.</li>
            <li><strong>Assuming Arrays are Initialized:</strong> Primitives get default values (e.g., int gets 0), but object arrays get null.</li>
        </ul>
      <br>
        <h4>Advanced Operations and Tricks:</h4>

        <h4>Sparse Arrays:</h4>
        <p>In situations where arrays have lots of empty values, it's memory-inefficient to use traditional arrays. Here, a 'Sparse Array' concept might be used to save space.</p>

        <h4>Jagged Arrays:</h4>
        <p>Unlike 2D arrays which are rectangular, jagged arrays can have a different number of columns in each row.</p>
        <p><code>int[][] jagged = new int[3][];
        jagged[0] = new int[3];
        jagged[1] = new int[5];
        // ... and so on.</code></p>

        <h4>Array-backed Lists:</h4>
        <p>Some list implementations, like ArrayList, are backed by arrays, meaning their internals rely on arrays for storage. They combine benefits of both dynamic lists and arrays.</p>

        <h4>Memory and Performance Implications:</h4>
        <p>Direct access to array elements by index is a fast operation, making arrays suitable for various tasks. However, insertion or deletion operations are slow since all subsequent elements might need to be shifted.</p>
        
        <h4>Searching Algorithms:</h4>
        <ul>
            <li><strong>Linear Search:</strong> A simple algorithm that checks each element sequentially.</li>
            <li><strong>Binary Search:</strong> A fast search algorithm that requires the array to be sorted. It works by repeatedly dividing the search interval in half.</li>
        </ul>

        <h4>Sorting Algorithms:</h4>
        <ul>
            <li><strong>Bubble Sort:</strong> A simple comparison-based sorting technique.</li>
            <li><strong>Insertion Sort:</strong> Builds a sorted array one item at a time.</li>
            <li><strong>Selection Sort:</strong> Repeatedly finds the minimum (or maximum) from an unsorted section and puts it in the beginning.</li>
            <li><strong>Merge Sort:</strong> A divide-and-conquer algorithm that divides the array in half, sorts the halves, and then merges them.</li>
            <li><strong>Quick Sort:</strong> Works by selecting a 'pivot' and partitioning the array around the pivot.</li>
            <li><strong>Heap Sort:</strong> Uses a binary heap data structure to sort elements.</li>
        </ul>
    `,
    image: '',
    // 'https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png',
  },
  {
    name: '2D-Arrays/Matrix',
    content: '',
    image: '',
  },
  {
    name: 'Linked List',
    content: '',
    image: '',
  },
  {
    name: 'Map/HashMap',
    content: '',
    image: '',
  },
  {
    name: 'Set/HashSet',
    content: '',
    image: '',
  },
  {
    name: 'Stack',
    content: '',
    image: '',
  },
  {
    name: 'Queue',
    content: '',
    image: '',
  },
  {
    name: 'Binary Search Tree',
    content: '',
    image: '',
  },
  {
    name: 'AVL Tree',
    content: '',
    image: '',
  },
  {
    name: 'Heap',
    content: '',
    image: '',
  },
  {
    name: 'PriorityQueue',
    content: '',
    image: '',
  },
  {
    name: 'Deque',
    content: '',
    image: '',
  },
  {
    name: 'Graph',
    content: '',
    image: '',
  },
];
