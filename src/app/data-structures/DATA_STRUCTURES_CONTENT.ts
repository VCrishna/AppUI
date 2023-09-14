export const DATA_STRUCTURES_CONTENT = [
  {
    name: 'Arrays',
    content: `
        <p> <code>Arrays</code> are a data structure that can hold more than one value at a time. It is a collection of variables that are accessed with an index number.</p>
        <p>Arrays in Java are objects that store multiple variables of the same type. However, an array itself is an object on the heap.</p>
        <h5>Declaration:</h5>
        <p>An array declaration has two components: the type of the array and its name.</p>
        <p>You can declare an array using either of these methods:</p>

        <p>
          <code>dataType[] arrayName;</code> // preferred <br>
          <code>dataType arrayName[];</code> // works but not preferred
        </p>
        <p><code>int[] myArray;</code><br>
        <code>int myArray[];</code></p>
        <h5>Initialization:</h5>
        <p>Arrays in Java are objects. Hence, they are created using the new keyword followed by the data type.</p>
        <p>
          <code>int[] arrayName = new int[size of the array];</code>
        </p>
        <p><code>int[] myArray = new int[5];</code> // allocates memory for 5 integers</p>
        <h5>Assigning Values:</h5>
        <p>
            <code>myArray[0] = 100;</code><br>
            <code>myArray[1] = 200;</code>
        </p>
        <h5>Array Length:</h5>
        <p>You can find the <code>length</code> of an array (i.e., the number of elements it can hold) using the length attribute:</p>
        <p>
        <code>int len = arr.length;</code>
        </p>
        <h5>Shortcut Initialization:</h5>
        <p><code>int[] myArray = {100, 200, 300, 400, 500};</code></p>

        <h5>Assignment:</h5>
        <p>You can assign values to specific locations in the array.</p>
        <p><code>arr[0] = 1; <br>
              arr[1] = 2; <br>
              // ... and so on.
        </code>
        </p>
        
        <h5>Multidimensional Arrays:</h5>
        <p>Java supports arrays with more than one dimension, commonly used as '2D arrays'.</p>
        <p><code>int[][] matrix = new int[5][5]; // 5x5 integer matrix</code></p>

        <h5>Dynamic Arrays:</h5>
        <p>In Java, arrays have a fixed size. To overcome this limitation, you can use <code>ArrayList</code>, which is a resizable array.</p>
        <p>
        <code>ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();<br>
        list.add(1);  // appends the element to the end
        </code><br>
        </p>

        <h5>Array Memory Management:</h5>
        <p>Arrays in Java are stored in continuous memory locations. For objects, the references are stored in continuous locations, not the actual objects.</p>

        <h5>Arrays of Objects:</h5>
        <p>When you create an array of objects, remember you're creating an array of references.</p>
        <p>
        <code>String[] strings = new String[5]; <br>
        strings[0] = new String("Hello");
        </code>
        </p>
        
        <h5>Array Manipulation:</h5>

        <h5>Copying Arrays:</h5>
        <p><code>System.arraycopy(src, srcPos, dest, destPos, length); or Arrays.copyOf()</code></p>

        <h5>Comparing Arrays:</h5>
        <p><code>Arrays.equals(arr1, arr2);  // checks if two arrays are equal.</code></p>

        <h5>Filling Arrays:</h5>
        <p><code>Arrays.fill(arr, value); // fills the array with the provided value.</code></p>

        <h5>Sorting Arrays:</h5>
        <p><code>Arrays.sort(arr); // sorts the array in ascending order.</code></p>

        <h5>Common Mistakes:</h5>
        <ul>
            <li><strong>Out of Bounds:</strong> Remember, array indices start at 0 and go to length - 1.</li>
            <li><strong>Null Pointer Exception:</strong> If you declare but don't initialize an array and try to use it, you'll get a NullPointerException.</li>
            <li><strong>Assuming Arrays are Initialized:</strong> Primitives get default values (e.g., int gets 0), but object arrays get null.</li>
        </ul>
      <br>
        <h5>Advanced Operations and Tricks:</h5>

        <h5>Sparse Arrays:</h5>
        <p>In situations where arrays have lots of empty values, it's memory-inefficient to use traditional arrays. Here, a 'Sparse Array' concept might be used to save space.</p>

        <h5>Jagged Arrays:</h5>
        <p>Unlike 2D arrays which are rectangular, jagged arrays can have a different number of columns in each row.</p>
        <p><code>int[][] jagged = new int[3][];<br>
        jagged[0] = new int[3];<br>
        jagged[1] = new int[5];<br>
        // ... and so on.</code></p>

        <h5>Array-backed Lists:</h5>
        <p>Some list implementations, like ArrayList, are backed by arrays, meaning their internals rely on arrays for storage. They combine benefits of both dynamic lists and arrays.</p>

        <h5>Memory and Performance Implications:</h5>
        <p>Direct access to array elements by index is a fast operation, making arrays suitable for various tasks. However, insertion or deletion operations are slow since all subsequent elements might need to be shifted.</p>
        
        <h5>Searching Algorithms:</h5>
        <ul>
            <li><strong>Linear Search:</strong> A simple algorithm that checks each element sequentially.</li>
            <li><strong>Binary Search:</strong> A fast search algorithm that requires the array to be sorted. It works by repeatedly dividing the search interval in half.</li>
        </ul>

        <h5>Sorting Algorithms:</h5>
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
    content: `
        <p><code>2D arrays</code>, often referred to as matrices, are arrays of arrays in Java. They are used to represent table-like data, where you have rows and columns.</p>

        <h5>Declaration and Initialization:</h5>
        <p>A 2D array can be declared and initialized in the following ways:</p>
        <p>
          <code>int[][] matrix = new int[3][3];</code> <!-- 3x3 matrix -->
          <br>
          <code>int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};</code> <!-- Initializing with values -->
        </p>

        <h5>Accessing Values:</h5>
        <p>You can access and modify values using their row and column indices:</p>
        <p>
          <code>int value = matrix[1][2];</code> <!-- Accessing value from 2nd row, 3rd column -->
          <br>
          <code>matrix[0][0] = 5;</code> <!-- Modifying value in the 1st row, 1st column -->
        </p>

        <h5>Looping Through a Matrix:</h5>
        <p>You can use nested loops to traverse through the 2D array:</p>
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

        <h5>Jagged Arrays:</h5>
        <p>In Java, 2D arrays can have rows of different lengths, often referred to as jagged arrays:</p>
        <p>
          <code>int[][] jagged = new int[3][];</code><br>
          <code>jagged[0] = new int[3];</code><br>
          <code>jagged[1] = new int[2];</code><br>
          <code>jagged[2] = new int[4];</code>
        </p>

        <h5>Common Matrix Operations:</h5>
        <ul>
            <li><strong>Matrix Addition:</strong> Add two matrices by adding their corresponding elements.</li>
            <li><strong>Matrix Multiplication:</strong> Multiply two matrices by taking the dot product of their rows and columns.</li>
            <li><strong>Transpose:</strong> Flip a matrix over its diagonal.</li>
        </ul>

        <h5>Common Use-Cases:</h5>
        <ul>
            <li><strong>Graphics:</strong> 2D arrays can represent pixel data in images.</li>
            <li><strong>Games:</strong> Many board games use 2D arrays to represent the game board.</li>
            <li><strong>Data Processing:</strong> Representing data tables or spreadsheets.</li>
        </ul>

        <h5>Best Practices:</h5>
        <ul>
            <li>When working with large matrices, ensure that operations are optimized to avoid performance bottlenecks.</li>
            <li>For dynamic or resizable matrices, consider using a list of lists.</li>
            <li>If most of the matrix contains default or null values, consider using a sparse matrix implementation to save space.</li>
        </ul>
`,
    image: '',
  },
  {
    name: 'Strings',
    content: `
      <p><code>String</code> is a class in Java representing a sequence of characters. Strings are immutable, which means once created, their value cannot be changed.</p>

        <h5>Declaration and Initialization:</h5>
        <p>A String can be declared and initialized in a few ways:</p>
        <p>
          <code>String str1 = "Hello";</code><br>
          <code>String str2 = new String("Hello");</code>
        </p>

        <h5>Concatenation:</h5>
        <p>You can concatenate Strings using the + operator:</p>
        <p><code>String combined = str1 + " World";</code></p>

        <h5>String Methods:</h5>
        <ul>
            <li><code>length()</code>: Returns the length of the string.</li>
            <li><code>charAt(int index)</code>: Returns the character at the specified index.</li>
            <li><code>substring(int beginIndex)</code>: Returns a substring starting from the specified index.</li>
            <li><code>split(String regex)</code>: Splits the string based on the given regex.</li>
            <!-- ... and many more -->
        </ul>

        <h5>String Immutability:</h5>
        <p>Strings are immutable in Java. When you perform operations on a String, a new String object is created.</p>

        <h5>String Pool:</h5>
        <p>Java uses a special memory region to store String literals, called the String pool. This helps in optimizing memory usage.</p>

        <h5>StringBuilder:</h5>
        <p><code>StringBuilder</code> is a mutable sequence of characters. It's often used when you have to make modifications to strings since it's more efficient than using a regular String.</p>
        <p>
          <code>StringBuilder sb = new StringBuilder();</code><br>
          <code>sb.append("Hello ");</code><br>
          <code>sb.append("World");</code>
        </p>
        <h5>StringBuilder Methods:</h5>
        <ul>
            <li><code>append(String str)</code>: Appends the string to the sequence.</li>
            <li><code>insert(int offset, String str)</code>: Inserts the string at the specified offset.</li>
            <li><code>delete(int start, int end)</code>: Deletes the substring from the start index to the end index.</li>
            <!-- ... and many more -->
        </ul>

        <h5>StringBuffer:</h5>
        <p><code>StringBuffer</code> is also a mutable sequence of characters, similar to StringBuilder. The main difference is that StringBuffer methods are synchronized, making them thread-safe, but slightly slower than StringBuilder in single-threaded scenarios.</p>

        <h5>Comparison between String, StringBuilder, and StringBuffer:</h5>
        <ul>
            <li><strong>Immutability:</strong> String is immutable, whereas StringBuilder and StringBuffer are mutable.</li>
            <li><strong>Performance:</strong> String concatenation can be inefficient due to immutability, so for frequent modifications, StringBuilder or StringBuffer is preferred.</li>
            <li><strong>Thread Safety:</strong> StringBuffer is thread-safe, whereas String and StringBuilder are not.</li>
        </ul>

        <h5>Conversion:</h5>
        <p>You can convert between these types easily:</p>
        <p>
          <code>String str = sb.toString();</code>  <!-- StringBuilder to String -->
          <br>
          <code>StringBuilder sb2 = new StringBuilder(str);</code> <!-- String to StringBuilder -->
        </p>

        <h5>Common Use-Cases:</h5>
        <ul>
            <li><strong>Immutable Text:</strong> Use String.</li>
            <li><strong>Frequent Modifications:</strong> Use StringBuilder in a single-threaded environment and StringBuffer in a multi-threaded environment.</li>
        </ul>

        <h5>Best Practices:</h5>
        <ul>
            <li>Avoid creating unnecessary String objects. Instead, use StringBuilder or StringBuffer for string manipulation.</li>
            <li>If thread safety is not a concern, prefer StringBuilder over StringBuffer for better performance.</li>
            <li>Use String methods like join(), split(), replace(), etc., effectively for basic operations.</li>
        </ul>

    `,
    image: '',
  },
  {
    name: 'Linked List',
    content: `
      <p>A <code>LinkedList</code> in Java is a part of the Java Collections Framework (JCF) and implements the <code>List</code> and <code>Deque</code> interfaces. It is a doubly-linked list data structure which can store any type of data and can have duplicate values.</p>

      <h5>Declaration and Initialization:</h5>
      <p><code>LinkedList</code> can be declared and initialized as:</p>
      <p>
        <code>LinkedList&lt;Type&gt; list = new LinkedList&lt;&gt;();</code> <!-- Type can be any object type e.g., Integer, String etc. -->
      </p>

      <h5>Adding and Removing Elements:</h5>
      <p>You can add elements to the list in various ways:</p>
      <p>
        <code>list.add("Element");</code> <!-- Appends the element to the end -->
        <br>
        <code>list.addFirst("First Element");</code> <!-- Inserts at the beginning -->
        <br>
        <code>list.addLast("Last Element");</code> <!-- Appends to the end -->
        <br>
        <code>list.remove();</code> <!-- Removes the first element -->
        <br>
        <code>list.removeLast();</code> <!-- Removes the last element -->
      </p>

      <h5>Accessing Elements:</h5>
      <p>You can retrieve but not modify elements at a particular index:</p>
      <p>
        <code>list.get(0);</code> <!-- Retrieves the first element -->
        <br>
        <code>list.getLast();</code> <!-- Retrieves the last element -->
      </p>

      <h5>Looping Through a LinkedList:</h5>
      <p>You can iterate through the linked list using enhanced for loop or iterators:</p>
      <pre>
      <code>
      for(String item : list) {
          System.out.println(item);
      }
      </code>
      </pre>

      <h5>Advantages:</h5>
      <ul>
          <li>Dynamic size: LinkedList can grow or shrink in size dynamically.</li>
          <li>Insertions/Deletions: Efficient insertion or removal of elements from the beginning, end, or even the middle, making it better than arrays in scenarios with frequent insertions/deletions.</li>
      </ul>

      <h5>Disadvantages:</h5>
      <ul>
          <li>Access time: Accessing elements by index can be slow since it might require traversal from the start or end to the desired position.</li>
          <li>Memory overhead: Uses more memory than arrays or <code>ArrayList</code> due to the storage of next and previous references for each element.</li>
      </ul>

      <h5>Use-Cases:</h5>
      <ul>
          <li><strong>Stack/Queue:</strong> Can be used to implement stack or queue data structures.</li>
          <li><strong>Browser History:</strong> Forward and backward navigation can be implemented using a LinkedList.</li>
          <li><strong>Applications with frequent insertions and deletions:</strong> Such as text editors or certain real-time applications.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Use <code>LinkedList</code> when frequent insertions and deletions are required, especially if the index is not known in advance.</li>
          <li>Avoid using <code>LinkedList</code> for random access by index. An <code>ArrayList</code> is usually a better choice in such scenarios.</li>
      </ul>

    `,
    image: '',
  },
  {
    name: 'Map/HashMap',
    content: `
      <p>The <code>Map</code> interface in Java represents a collection of key-value pairs where each key is mapped to exactly one value. <code>HashMap</code> is a part of the Java Collections Framework (JCF) and is one of the implementations of the <code>Map</code> interface. It provides the basic operations like storing, retrieving, and removing key-value pairs.</p>

      <h5>Declaration and Initialization:</h5>
      <p><code>Map</code> and <code>HashMap</code> can be declared and initialized as:</p>
      <p>
        <code>Map&lt;KeyType, ValueType&gt; map = new HashMap&lt;&gt;();</code> <!-- KeyType and ValueType can be any object types, e.g., Integer, String etc. -->
      </p>

      <h5>Storing and Retrieving Elements:</h5>
      <p>You can add key-value pairs and retrieve values based on keys:</p>
      <p>
        <code>map.put("key", "value");</code> <!-- Adds key-value pair to the map -->
        <br>
        <code>String value = map.get("key");</code> <!-- Retrieves value for the specified key -->
      </p>

      <h5>Checking Elements:</h5>
      <p>It's easy to check for the presence of keys and values:</p>
      <p>
        <code>map.containsKey("key");</code> <!-- Checks if a key is present -->
        <br>
        <code>map.containsValue("value");</code> <!-- Checks if a value is present -->
      </p>

      <h5>Removing Elements:</h5>
      <p>Elements can be removed from the map using their key:</p>
      <p>
        <code>map.remove("key");</code> <!-- Removes the key-value pair for the specified key -->
      </p>

      <h5>Looping Through a HashMap:</h5>
      <p>You can iterate through key-value pairs in a HashMap:</p>
      <pre>
      <code>
      for(Map.Entry&lt;KeyType, ValueType&gt; entry : map.entrySet()) {
          KeyType key = entry.getKey();
          ValueType value = entry.getValue();
          System.out.println(key + ": " + value);
      }
      </code>
      </pre>

      <h5>Key Features:</h5>
      <ul>
          <li><strong>Ordering:</strong> HashMap doesn't guarantee any specific order of entries.</li>
          <li><strong>Null Values:</strong> HashMap allows one null key and multiple null values.</li>
          <li><strong>Performance:</strong> Typically offers constant-time performance for basic operations.</li>
          <li><strong>Concurrency:</strong> HashMap is not synchronized. For multithreaded environments, consider using <code>ConcurrentHashMap</code> or synchronizing the HashMap externally.</li>
      </ul>

      <h5>Comparison with Other Map Implementations:</h5>
      <ul>
          <li><strong>TreeMap:</strong> A Red-Black tree-based NavigableMap. It is sorted according to the natural order of its keys or by a specified comparator.</li>
          <li><strong>LinkedHashMap:</strong> Maintains insertion order or access order of entries.</li>
          <li><strong>Hashtable:</strong> An older, synchronized implementation of Map. Considered less efficient than HashMap.</li>
      </ul>

      <h5>Use-Cases:</h5>
      <ul>
          <li><strong>Data Lookup:</strong> When quick data retrieval based on a unique key is required.</li>
          <li><strong>Frequency Count:</strong> To count occurrences of elements in a list.</li>
          <li><strong>Cache:</strong> Storing and retrieving data from a cache based on a unique key.</li>
          <li><strong>Data Grouping:</strong> Grouping data by certain attributes.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Always initialize the HashMap with an appropriate initial capacity to avoid rehashing if you have an idea of the number of entries.</li>
          <li>Use immutable classes as keys to ensure the integrity of the HashMap.</li>
          <li>Override <code>hashCode()</code> and <code>equals()</code> methods appropriately when using custom objects as keys.</li>
          <li>Avoid using <code>Hashtable</code> unless synchronization is explicitly required. Consider using <code>ConcurrentHashMap</code> for thread-safe operations.</li>
      </ul>

    `,
    image: '',
  },
  {
    name: 'Set/HashSet',
    content: `
      <p>The <code>Set</code> interface in Java represents a collection of elements where each element is unique. It's part of the Java Collections Framework (JCF). The <code>HashSet</code> class is one of the primary implementations of the <code>Set</code> interface and uses a hash table to store elements, ensuring constant time complexity for basic operations.</p>
      <h5>Declaration and Initialization:</h5>
      <p>A <code>Set</code> and <code>HashSet</code> can be declared and initialized as follows:</p>
      <p>
        <code>Set&lt;ElementType&gt; set = new HashSet&lt;&gt;();</code> <!-- ElementType can be any object type e.g., Integer, String etc. -->
      </p>

      <h5>Adding and Removing Elements:</h5>
      <p>You can manipulate elements within the set using the following methods:</p>
      <p>
        <code>set.add("element");</code> <!-- Adds an element to the set; returns false if the element already exists -->
        <br>
        <code>set.remove("element");</code> <!-- Removes the element from the set; returns false if the element doesn't exist -->
      </p>

      <h5>Checking Elements:</h5>
      <p>You can inspect the presence of elements in the set:</p>
      <p>
        <code>set.contains("element");</code> <!-- Checks if an element is present in the set -->
        <br>
        <code>set.isEmpty();</code> <!-- Checks if the set is empty -->
        <br>
        <code>set.size();</code> <!-- Retrieves the number of elements in the set -->
      </p>

      <h5>Looping Through a HashSet:</h5>
      <p>You can iterate over elements in a HashSet using enhanced for loops or iterators:</p>
      <pre>
      <code>
      for(ElementType element : set) {
          System.out.println(element);
      }
      </code>
      </pre>

      <h5>Key Characteristics:</h5>
      <ul>
          <li><strong>Ordering:</strong> HashSet does not guarantee any specific ordering of elements.</li>
          <li><strong>Null Values:</strong> HashSet allows a single null value.</li>
          <li><strong>Performance:</strong> Provides constant-time performance for basic operations assuming the hash function disperses elements properly.</li>
      </ul>

      <h5>Comparison with Other Set Implementations:</h5>
      <ul>
          <li><strong>LinkedHashSet:</strong> Maintains the insertion order.</li>
          <li><strong>TreeSet:</strong> A NavigableSet implementation using a Red-Black tree. Elements are ordered using their natural ordering or by a specified comparator.</li>
      </ul>

      <h5>Use-Cases:</h5>
      <ul>
          <li><strong>Eliminate Duplicates:</strong> When you want to remove duplicates from a list or collection.</li>
          <li><strong>Data Lookup:</strong> For scenarios where you need to quickly check if an element exists without concerning about its position or frequency.</li>
          <li><strong>Mathematical Set Operations:</strong> Such as union, intersection, and set difference.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Use <code>Set</code> when you want to store a collection of unique elements without any specific order.</li>
          <li>If ordering is important, consider using <code>LinkedHashSet</code> or <code>TreeSet</code>.</li>
          <li>Override <code>hashCode()</code> and <code>equals()</code> methods appropriately when using custom objects in a <code>HashSet</code>.</li>
      </ul>

    `,
    image: '',
  },
  {
    name: 'Stack',
    content: `
      <p>The <code>Stack</code> class in Java is a subclass of <code>Vector</code> and implements the Last-In-First-Out (LIFO) data structure, where the last element added to the stack is the first element removed from it.</p>

      <h5>Declaration and Initialization:</h5>
      <p>A <code>Stack</code> can be declared and initialized as follows:</p>
      <p>
        <code>Stack&lt;ElementType&gt; stack = new Stack&lt;&gt;();</code> <!-- ElementType can be any object type e.g., Integer, String etc. -->
      </p>

      <h5>Adding and Removing Elements:</h5>
      <p>You can manipulate elements within the stack using the following methods:</p>
      <p>
        <code>stack.push("element");</code> <!-- Pushes an element onto the stack -->
        <br>
        <code>stack.pop();</code> <!-- Removes and returns the top element from the stack -->
      </p>

      <h5>Inspecting Elements:</h5>
      <p>You can inspect the top of the stack without removing elements:</p>
      <p>
        <code>stack.peek();</code> <!-- Looks at the top element of the stack without removing it -->
      </p>

      <h5>Checking Properties:</h5>
      <p>You can check the properties of the stack using:</p>
      <p>
        <code>stack.isEmpty();</code> <!-- Checks if the stack is empty -->
        <br>
        <code>stack.size();</code> <!-- Retrieves the number of elements in the stack -->
        <br>
        <code>stack.search("element");</code> <!-- Determines if an object is in the stack and returns its position with respect to the top -->
      </p>

      <h5>Key Characteristics:</h5>
      <ul>
          <li><strong>LIFO Principle:</strong> The primary principle governing a stack is Last-In-First-Out (LIFO).</li>
          <li><strong>Direct Access:</strong> Only the top element can be accessed directly.</li>
          <li><strong>Dynamic Size:</strong> Stack can grow and shrink dynamically as elements are pushed and popped.</li>
      </ul>

      <h5>Use-Cases:</h5>
      <ul>
          <li><strong>Expression Evaluation:</strong> Stacks can be used to evaluate postfix or prefix expressions.</li>
          <li><strong>Undo Mechanisms:</strong> In software applications like word processors or graphic tools, a stack can store actions and thus provide an undo feature.</li>
          <li><strong>Backtracking:</strong> Algorithms that need to backtrack, like certain path-finding algorithms, utilize stacks.</li>
          <li><strong>Function Calls:</strong> Programming languages use a call stack to manage function calls.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Ensure to check if the stack is empty before calling the <code>pop()</code> or <code>peek()</code> methods to avoid <code>EmptyStackException</code>.</li>
          <li>For thread-safe stack operations, consider using <code>ConcurrentLinkedDeque</code> as a stack.</li>
          <li>Avoid relying on the <code>search()</code> method for large stacks as it has a linear runtime.</li>
      </ul>

      <h5>Alternatives:</h5>
      <p>Though the <code>Stack</code> class is a classic representation, the <code>Deque</code> (Double Ended Queue) interface and its implementations (like <code>ArrayDeque</code>) offer a more complete and robust way to represent a stack in Java with improved performance.</p>

    `,
    image: '',
  },
  {
    name: 'Queue',
    content: `
      <p>The <code>Queue</code> interface in Java represents a collection designed for holding elements prior to processing and follows the First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.</p>
      <h5>Declaration and Initialization:</h5>
      <p>The <code>Queue</code> interface can be instantiated using various classes, with <code>LinkedList</code> being one of the most common:</p>
      <p>
        <code>Queue&lt;ElementType&gt; queue = new LinkedList&lt;&gt;();</code> <!-- ElementType can be any object type e.g., Integer, String etc. -->
      </p>

      <h5>Adding and Removing Elements:</h5>
      <p>You can manipulate elements within the queue using the following methods:</p>
      <p>
        <code>queue.add("element");</code> <!-- Inserts the element and throws an exception if the operation fails -->
        <br>
        <code>queue.offer("element");</code> <!-- Inserts the element and returns a boolean indicating success or failure -->
        <br>
        <code>queue.remove();</code> <!-- Removes and returns the head of the queue, throws an exception if the queue is empty -->
        <br>
        <code>queue.poll();</code> <!-- Removes and returns the head of the queue, returns null if the queue is empty -->
      </p>

      <h5>Inspecting Elements:</h5>
      <p>You can inspect the head of the queue without removing it:</p>
      <p>
        <code>queue.element();</code> <!-- Retrieves, but doesn't remove, the head of the queue; throws an exception if the queue is empty -->
        <br>
        <code>queue.peek();</code> <!-- Retrieves, but doesn't remove, the head of the queue; returns null if the queue is empty -->
      </p>

      <h5>Key Characteristics:</h5>
      <ul>
          <li><strong>FIFO Principle:</strong> Queues typically operate on the First-In-First-Out principle.</li>
          <li><strong>Multiple Implementations:</strong> Besides <code>LinkedList</code>, there are other classes like <code>ArrayDeque</code>, <code>PriorityQueue</code>, and <code>ConcurrentLinkedQueue</code> that implement the <code>Queue</code> interface with distinct features.</li>
      </ul>

      <h5>Use-Cases:</h5>
      <ul>
          <li><strong>Task Scheduling:</strong> Queues are often used in scenarios where tasks are scheduled and processed in the order they arrive.</li>
          <li><strong>Data Buffers:</strong> They can act as buffers in scenarios like printers, where tasks are processed based on their arrival time.</li>
          <li><strong>Breadth-First Search:</strong> In graph algorithms, a queue is used to manage the nodes to be explored in breadth-first search.</li>
          <li><strong>Order Processing:</strong> In e-commerce platforms, queues can manage the order in which customer orders are processed.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Choose the right implementation of the <code>Queue</code> interface based on your requirements. For instance, <code>PriorityQueue</code> if elements need to be processed by priority, or <code>ConcurrentLinkedQueue</code> for a thread-safe queue.</li>
          <li>Always handle potential exceptions (or use methods that return special values) when working with operations that could fail, such as adding to a capacity-restricted queue or removing from an empty queue.</li>
      </ul>

      <h5>Specialized Queues:</h5>
      <p>Java also provides specialized queue implementations such as <code>Deque</code> (double-ended queue), allowing insertion and removal from both ends, and <code>PriorityQueue</code>, where elements are ordered based on their natural ordering or by a specified comparator.</p>
`,
    image: '',
  },
  {
    name: 'Binary Search Tree',
    content: `
      <p>A <code>Binary Search Tree (BST)</code> is a node-based binary tree data structure that has the following properties:</p>
      <ul>
          <li>Each node has a distinct key (and an associated value).</li>
          <li>The left subtree of a node contains only nodes with keys less than the node's key.</li>
          <li>The right subtree of a node contains only nodes with keys greater than the node's key.</li>
          <li>Both the left and right subtrees must also be binary search trees.</li>
      </ul>

      <h5>Basic Operations:</h5>
      <p>Common operations performed on a BST include:</p>
      <ul>
          <li><strong>Insertion:</strong> Adds a new node.</li>
          <li><strong>Deletion:</strong> Removes a node.</li>
          <li><strong>Traversal:</strong> Visiting all the nodes in a specific order (e.g., inorder, preorder, postorder).</li>
          <li><strong>Searching:</strong> Finds a node with a given key.</li>
          <li><strong>Minimum/Maximum:</strong> Finds a node with the minimum or maximum key.</li>
      </ul>

      <h5>Advantages:</h5>
      <ul>
          <li><strong>Ordered Data:</strong> Provides the ability to traverse nodes in order, which can be useful for range query tasks.</li>
          <li><strong>Flexibility:</strong> Nodes can be added or removed, and the tree can be rebalanced as needed.</li>
          <li><strong>Efficient Operations:</strong> Operations like insertion, deletion, and search can be performed efficiently if the tree remains balanced.</li>
      </ul>

      <h5>Disadvantages:</h5>
      <ul>
          <li><strong>Tree Balancing:</strong> Without any balancing, the tree might skew in one direction, becoming a linked list in the worst case, which would reduce the efficiency of operations.</li>
          <li><strong>Complex Implementation:</strong> Recursive algorithms are typically used for BST operations, which might be challenging to implement and understand for beginners.</li>
      </ul>

      <h5>Use-Cases:</h5>
      <ul>
          <li><strong>Database Systems:</strong> For indexing and to speed up search queries.</li>
          <li><strong>File Systems:</strong> Used in certain types of file systems for storing and retrieving files.</li>
          <li><strong>Sorted Lists:</strong> To implement sorted lists where insertions, deletions, and look-ups need to be fast.</li>
      </ul>

      <h5>Specialized BSTs:</h5>
      <p>There are specialized versions of BSTs to overcome its limitations and to optimize certain operations:</p>
      <ul>
          <li><code>AVL Tree:</code> A self-balancing BST where the difference between heights of left and right subtrees cannot be more than one for all nodes.</li>
          <li><code>Red-Black Tree:</code> A balanced binary search tree where each node has an extra bit for denoting the color of the node, either red or black.</li>
          <li><code>Splay Tree:</code> A self-adjusting BST which moves recently accessed element to the root.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Choose the right type of BST based on the use-case, ensuring that the tree remains balanced to provide optimized operations.</li>
          <li>Consider iterative solutions if recursion introduces too much overhead or consumes too much stack space.</li>
          <li>Always handle cases where the BST might become skewed by rebalancing the tree or opting for a self-balancing binary search tree implementation.</li>
      </ul>

    `,
    image: '',
  },
  // {
  //   name: 'AVL Tree',
  //   content: '',
  //   image: '',
  // },
  {
    name: 'Heap',
    content: `
      <p>A <code>Heap</code> is a specialized tree-based data structure that satisfies the heap property. It can be visualized as a binary tree, where nodes have a specific ordering between parent and child nodes. There are two types of heaps:</p>
      <ul>
          <li><strong>Max Heap:</strong> For any given node I, the value of I is greater than or equal to the values of its children.</li>
          <li><strong>Min Heap:</strong> For any given node I, the value of I is less than or equal to the values of its children.</li>
      </ul>

      <h5>Characteristics:</h5>
      <ul>
          <li><strong>Complete Binary Tree:</strong> All levels of the tree, except possibly the last, are fully filled, and nodes are as left as possible.</li>
          <li><strong>Heap Operations:</strong> The primary operations associated with a heap are insertion, deletion, and retrieval of the maximum (in a max heap) or minimum (in a min heap).</li>
      </ul>

      <h5>Basic Operations:</h5>
      <p>Common operations performed on a heap include:</p>
      <ul>
          <li><strong>Insertion:</strong> Adds a new node and then reorders the heap to maintain the heap property.</li>
          <li><strong>Deletion:</strong> Removes the root node (max or min) and then reorders the heap.</li>
          <li><strong>Peek:</strong> Retrieves but does not remove the root node.</li>
      </ul>

      <h5>Applications:</h5>
      <ul>
          <li><strong>Priority Queue:</strong> Heaps are the underlying data structure for priority queues, offering efficient insertion and max/min deletion.</li>
          <li><strong>Heap Sort:</strong> A comparison-based sorting technique that utilizes a heap data structure.</li>
          <li><strong>Shortest Path Algorithms:</strong> Algorithms like Dijkstra's use heaps (or priority queues) to keep track of vertices with the shortest path estimates.</li>
      </ul>

      <h5>Advantages:</h5>
      <ul>
          <li><strong>Efficiency:</strong> Heaps offer efficient implementations for algorithms that require repeated maximum or minimum element retrieval.</li>
          <li><strong>Dynamic:</strong> Suitable for dynamically changing data.</li>
      </ul>

      <h5>Disadvantages:</h5>
      <ul>
          <li><strong>Space Overhead:</strong> Even though it's based on a binary tree, there's some space overhead compared to simple arrays.</li>
          <li><strong>Complex Operations:</strong> Insertions and deletions require restructuring of the heap which can be complex.</li>
      </ul>

      <h5>Implementation:</h5>
      <p>While heaps are usually visualized as trees, they are commonly implemented using arrays. The parent-child relationship can be defined using indices: for an element at index <code>i</code>, its:</p>
      <ul>
          <li><strong>Left Child:</strong> is at position <code>2*i + 1</code></li>
          <li><strong>Right Child:</strong> is at position <code>2*i + 2</code></li>
          <li><strong>Parent Node:</strong> is at position <code>(i-1)/2</code></li>
      </ul>

      <h5>Specialized Heaps:</h5>
      <p>There are specialized versions of heaps to handle advanced scenarios:</p>
      <ul>
          <li><code>Binomial Heap:</code> A set of binomial trees that are defined recursively.</li>
          <li><code>Fibonacci Heap:</code> Utilizes a collection of heap-ordered trees to achieve better amortized running time for operations like decrease key and delete.</li>
          <li><code>K-ary Heap:</code> A tree-based data structure where each node has K children instead of 2.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Choose the appropriate type of heap (min or max) based on the specific requirements of the problem at hand.</li>
          <li>Ensure that the heap property is maintained after every insertion or deletion operation.</li>
          <li>For applications needing frequent merge operations, consider more advanced heap structures like binomial or Fibonacci heaps.</li>
      </ul>

    `,
    image: '',
  },
  {
    name: 'PriorityQueue',
    content: `
      <p>The <code>PriorityQueue</code> class in Java is a part of the Java Collections Framework (JCF) and implements the <code>Queue</code> interface. It represents a data structure that enables processing elements based on their priority, which is typically implemented using heaps.</p>
      <h5>Declaration and Initialization:</h5>
      <p>A <code>PriorityQueue</code> can be declared and initialized as follows:</p>
      <p>
        <code>PriorityQueue&lt;ElementType&gt; pQueue = new PriorityQueue&lt;&gt;();</code> <!-- ElementType can be any object type e.g., Integer, String etc. -->
      </p>

      <h5>Basic Operations:</h5>
      <p>You can manipulate elements within the priority queue using the following methods:</p>
      <p>
        <code>pQueue.add("element");</code> <!-- Inserts the element -->
        <br>
        <code>pQueue.offer("element");</code> <!-- Inserts the element and returns a boolean indicating success or failure -->
        <br>
        <code>pQueue.remove();</code> <!-- Removes and returns the highest priority element, throws an exception if the queue is empty -->
        <br>
        <code>pQueue.poll();</code> <!-- Removes and returns the highest priority element, returns null if the queue is empty -->
        <br>
        <code>pQueue.peek();</code> <!-- Retrieves, but doesn't remove, the highest priority element; returns null if the queue is empty -->
      </p>

      <h5>Ordering:</h5>
      <p>By default, a <code>PriorityQueue</code> orders its elements in natural order (minimum value with the highest priority for numbers and lexicographic order for strings). However, you can define custom ordering using a <code>Comparator</code>.</p>

      <h5>Applications:</h5>
      <ul>
          <li><strong>Task Scheduling:</strong> When tasks have different priorities and need to be executed based on their importance.</li>
          <li><strong>Shortest Path Algorithms:</strong> Like Dijkstra's, where nodes need to be processed based on their path weights.</li>
          <li><strong>Load Balancing:</strong> Directing requests to the least loaded system.</li>
          <li><strong>Data Compression:</strong> Algorithms like Huffman coding use priority queues.</li>
      </ul>

      <h5>Advantages:</h5>
      <ul>
          <li><strong>Dynamic Priority Handling:</strong> Unlike arrays and linked lists, a priority queue efficiently manages dynamic priorities of elements.</li>
          <li><strong>Flexibility:</strong> Supports insertion, deletion, and peek operations efficiently.</li>
      </ul>

      <h5>Limitations:</h5>
      <ul>
          <li><strong>No Bounds:</strong> The <code>PriorityQueue</code> in Java doesn't have a capacity restriction, it can grow as needed, which can lead to memory consumption issues if not handled properly.</li>
          <li><strong>Not Thread-Safe:</strong> Multiple threads should not access a <code>PriorityQueue</code> concurrently if any of the threads modifies the queue.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>When using objects (other than the standard wrappers like <code>Integer</code> or <code>String</code>) with a <code>PriorityQueue</code>, make sure they are either Comparable or provide a custom Comparator.</li>
          <li>For thread-safety, consider using <code>PriorityBlockingQueue</code>.</li>
          <li>Regularly poll or remove elements from the priority queue to prevent unnecessary memory consumption, especially in scenarios where the queue size can grow rapidly.</li>
      </ul>

      <h5>Under the Hood:</h5>
      <p>The Java implementation of <code>PriorityQueue</code> is based on a priority heap, which provides O(log n) time for enqueuing and dequeuing methods (<code>offer</code>, <code>poll</code>, <code>remove()</code> and <code>add</code>), and constant time for retrieval methods (<code>peek</code>, <code>element</code>, and <code>size</code>).</p>

    `,
    image: '',
  },
  {
    name: 'Deque',
    content: `
      <p>The <code>Deque</code> (pronounced "deck") interface in Java stands for Double Ended Queue, which is a linear collection that supports element insertion and removal at both ends. This allows a deque to function as both a queue (FIFO) and a stack (LIFO).</p>

      <h5>Declaration and Initialization:</h5>
      <p>A <code>Deque</code> can be instantiated using various classes, with <code>ArrayDeque</code> being one of the most common:</p>
      <p>
        <code>Deque&lt;ElementType&gt; deque = new ArrayDeque&lt;&gt;();</code> <!-- ElementType can be any object type e.g., Integer, String etc. -->
      </p>

      <h5>Basic Operations:</h5>
      <p>You can manipulate elements within the deque using the following methods:</p>
      <p>
        <code>deque.addFirst("element");</code> <!-- Adds to the front -->
        <br>
        <code>deque.addLast("element");</code> <!-- Adds to the end -->
        <br>
        <code>deque.removeFirst();</code> <!-- Removes from the front -->
        <br>
        <code>deque.removeLast();</code> <!-- Removes from the end -->
        <br>
        <code>deque.peekFirst();</code> <!-- Views the front without removal -->
        <br>
        <code>deque.peekLast();</code> <!-- Views the end without removal -->
      </p>

      <h5>Stack and Queue Operations:</h5>
      <p>Deque interface supports all stack and queue related operations.</p>
      <p>
        <code>deque.push("element");</code> <!-- Stack push operation -->
        <br>
        <code>deque.pop();</code> <!-- Stack pop operation -->
        <br>
        <code>deque.offer("element");</code> <!-- Queue add operation -->
        <br>
        <code>deque.poll();</code> <!-- Queue remove operation -->
      </p>

      <h5>Applications:</h5>
      <ul>
          <li><strong>Undo Functionality:</strong> In software applications, a deque can track changes for undo/redo functionality.</li>
          <li><strong>Palindromes:</strong> Checking if a word or phrase reads the same backward as forward can be efficiently performed using a deque.</li>
          <li><strong>Sliding Window Algorithms:</strong> In algorithmic problems, a deque is often used to keep track of a "window" of elements in a larger collection.</li>
      </ul>

      <h5>Advantages:</h5>
      <ul>
          <li><strong>Versatility:</strong> Can function as both stack and queue, giving flexibility in different scenarios.</li>
          <li><strong>Efficiency:</strong> Typically faster in non-threaded applications compared to Stack and LinkedList due to its array-based implementation.</li>
      </ul>

      <h5>Disadvantages:</h5>
      <ul>
          <li><strong>Capacity:</strong> Unlike a LinkedList, an ArrayDeque has an initial capacity, which, if exceeded, requires resizing. This can be an overhead for very large or dynamic deques.</li>
          <li><strong>Null Handling:</strong> ArrayDeque does not support the addition of null elements.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Always specify an initial capacity if you have an idea of the deque's size to avoid resizing overhead.</li>
          <li>For concurrent applications, consider using <code>ConcurrentLinkedDeque</code> for thread safety.</li>
          <li>Use <code>ArrayDeque</code> as a stack, which is faster than the Stack class and doesn't have the methods with unpredictable performance like Stack's <code>search</code> method.</li>
      </ul>

      <h5>Under the Hood:</h5>
      <p>Deque implementations, like ArrayDeque, typically use a dynamic array to support regular array operations in constant time. However, when resizing is needed, it's usually done in amortized constant time with the doubling (or halving) of the array.</p>

    `,
    image: '',
  },
  {
    name: 'Graph',
    content: `
      <p>A <code>Graph</code> is a non-linear data structure consisting of nodes (or vertices) and edges that connect these nodes. Graphs are used to represent many real-world structures like networks, state machines, and dependency trees.</p>

      <h5>Types of Graphs:</h5>
      <ul>
          <li><strong>Directed Graph (DiGraph):</strong> Edges have a direction, i.e., each edge moves from one vertex to another.</li>
          <li><strong>Undirected Graph:</strong> Edges do not have a direction; they simply connect two vertices.</li>
          <li><strong>Weighted Graph:</strong> Each edge has an associated weight, often representing costs, distances, etc.</li>
          <li><strong>Unweighted Graph:</strong> All edges are identical.</li>
          <li><strong>Cyclic Graph:</strong> Contains at least one cycle (a closed path).</li>
          <li><strong>Acyclic Graph:</strong> Contains no cycles. A Directed Acyclic Graph (DAG) is a directed graph with no directed cycles.</li>
      </ul>

      <h5>Representation:</h5>
      <p>Graphs can be represented using two main methods:</p>
      <ul>
          <li><strong>Adjacency Matrix:</strong> A 2D array of size V x V (where V is the number of vertices) such that the value at index i,j is 1 (or the weight) if there's an edge from vertex i to vertex j; otherwise, it's 0.</li>
          <li><strong>Adjacency List:</strong> An array of lists. The size of the array is equal to the number of vertices. An entry at index i represents the list of vertices adjacent to the i<sup>th</sup> vertex.</li>
      </ul>

      <h5>Basic Operations:</h5>
      <p>Common operations performed on a graph include:</p>
      <ul>
          <li><strong>Add Vertex:</strong> Adds a new vertex to the graph.</li>
          <li><strong>Add Edge:</strong> Adds a new edge between two vertices in the graph.</li>
          <li><strong>Delete Vertex:</strong> Removes a vertex from the graph.</li>
          <li><strong>Delete Edge:</strong> Removes an edge between two vertices.</li>
          <li><strong>Traversal:</strong> Accessing/visiting all vertices in the graph. Common methods include Depth First Search (DFS) and Breadth First Search (BFS).</li>
      </ul>

      <h5>Applications:</h5>
      <ul>
          <li><strong>Shortest Path:</strong> Finding the shortest path between two nodes using algorithms like Dijkstra's or Floyd-Warshall.</li>
          <li><strong>Network Flow:</strong> Max flow problems in networks.</li>
          <li><strong>Connectivity:</strong> Checking if a graph is connected or finding connected components.</li>
          <li><strong>Topological Sorting:</strong> Finding a linear ordering of vertices in a DAG such that for every directed edge (u, v), vertex u comes before vertex v in the ordering.</li>
      </ul>

      <h5>Advantages:</h5>
      <ul>
          <li><strong>Flexibility:</strong> Graphs can represent many real-world systems more naturally than other data structures.</li>
          <li><strong>Robustness:</strong> Changing one part of the graph often doesn't affect others, making it easier to adapt.</li>
      </ul>

      <h5>Disadvantages:</h5>
      <ul>
          <li><strong>Complexity:</strong> Algorithms on graphs can become complex, and many graph problems are NP-hard.</li>
          <li><strong>Space Overhead:</strong> Especially in adjacency matrix representation where space required is V^2, even if the number of edges is very less.</li>
      </ul>

      <h5>Best Practices:</h5>
      <ul>
          <li>Choose between adjacency list and adjacency matrix representations based on the type and density of the graph and the operations to be performed.</li>
          <li>For weighted graphs, consider using data structures like <code>priority queues</code> to optimize certain algorithms.</li>
          <li>While traversing, marking visited nodes can help avoid unnecessary revisits and cycles.</li>
      </ul>

      <h5>Graph Classes and Libraries:</h5>
      <p>Many libraries offer robust graph functionalities. In Java, for instance, libraries like JGraphT provide comprehensive graph manipulation capabilities.</p>

    `,
    image: '',
  },
];
