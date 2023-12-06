// LC_PATTERNS_CONTENT.ts
import { Pattern } from './lc-patterns.model';

export const LC_PATTERNS_CONTENT: Pattern[] = [
  {
    name: 'Sliding Window',
    content: `
    <p>
    The <code>Sliding Window</code> pattern is employed to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s. Sliding Windows start from the 1st element and keep shifting right by one element, adjusting the length of the window according to the problem being solved. In some cases, the window size remains constant, while in others, it may grow or shrink.
    </p>

    <p>
    <strong>Following are some ways you can identify that the given problem might require a sliding window:</strong>
    </p>
    <ul>
    <li>The problem input is a linear data structure such as a linked list, array, or string.</li>
    <li>You’re asked to find the longest/shortest substring, subarray, or a desired value.</li>
    </ul>

    <p>
    <strong>Common problems you use the sliding window pattern with:</strong>
    </p>
    <ul>
    <li><strong>Maximum sum subarray of size ‘K’ (easy):</strong> <a href="link">Link</a></li>
    <li><strong>Longest substring with ‘K’ distinct characters (medium):</strong> <a href="link">Link</a></li>
    <li><strong>String anagrams (hard):</strong> <a href="link">Link</a></li>
    </ul>
    `,
    image: 'assets/lc-patterns-readme-content/slidingwindow.jpeg',
  },
  {
    name: 'Two Pointers or Iterators',
    content: `
        <p>
        The <code>Two Pointers</code> pattern is a technique where two pointers iterate through a data structure in tandem until one or both of the pointers hit a certain condition. This pattern is particularly useful when searching for pairs in a sorted array or linked list, for example, when comparing each element of an array to its other elements.
        </p>

        <p>
        <code>Two pointers</code> are employed because using just one pointer would require continually looping back through the array to find the answer. This back-and-forth movement with a single iterator is inefficient in terms of time and space complexity, a concept referred to as asymptotic analysis. While the brute force or naive solution with one pointer would work, it often results in a time complexity of O(n²). In many cases, utilizing two pointers can lead to a solution with better space or runtime complexity.
        </p>

        <p>
        <strong>Ways to identify when to use the Two Pointer method:</strong>
        </p>
        <ul>
        <li>It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints.</li>
        <li>The set of elements in the array is a pair, a triplet, or even a subarray.</li>
        </ul>

        <p>
        <strong>Here are some problems that feature the Two Pointer pattern:</strong>
        </p>
        <ul>
        <li><strong>Squaring a sorted array (easy):</strong> <a href="link">Link</a></li>
        <li><strong>Triplets that sum to zero (medium):</strong> <a href="link">Link</a></li>
        <li><strong>Comparing strings that contain backspaces (medium):</strong> <a href="link">Link</a></li>
        </ul>
    `,
    image: 'assets/lc-patterns-readme-content/twopointers.jpeg',
  },
  {
    name: 'Fast and Slow pointers',
    content: `
    <p>
    The <code>Fast and Slow pointer approach</code>, also known as the Hare & Tortoise algorithm, is a pointer algorithm that utilizes two pointers moving through the array (or sequence/linked list) at different speeds. This approach is particularly useful when dealing with cyclic linked lists or arrays.
    </p>

    <p>
    By moving at different speeds, especially in a cyclic linked list, the algorithm demonstrates that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both pointers enter a cyclic loop.
    </p>

    <p>
    <strong>How do you identify when to use the Fast and Slow pattern?</strong>
    </p>
    <ul>
    <li>The problem will deal with a loop in a linked list or array.</li>
    <li>When you need to determine the position of a certain element or the overall length of the linked list.</li>
    </ul>

    <p>
    <strong>When should I use it over the Two Pointer method mentioned above?</strong>
    </p>
    <p>
    There are cases where the Two Pointer approach may not be suitable, such as in a singly linked list where movement in a backward direction is not possible. An example of when to use the Fast and Slow pattern is when determining if a linked list is a palindrome.
    </p>

    <p>
    <strong>Problems featuring the fast and slow pointers pattern:</strong>
    </p>
    <ul>
    <li><strong>Linked List Cycle (easy):</strong> <a href="link">Link</a></li>
    <li><strong>Palindrome Linked List (medium):</strong> <a href="link">Link</a></li>
    <li><strong>Cycle in a Circular Array (hard):</strong> <a href="link">Link</a></li>
    </ul>

    `,
    image: 'assets/lc-patterns-readme-content/fastandslowpointers.jpeg',
  },
  {
    name: 'Merge Intervals',
    content: `
    <p>
    The <code>Merge Intervals</code> pattern is an efficient technique to address overlapping intervals. In many problems involving intervals, the task is to either find overlapping intervals or merge intervals if they overlap. The pattern operates based on the relationships between two intervals ('a' and 'b'), providing a versatile approach to solve various problems from inserting intervals to optimizing interval merges.
    </p>

    <p>
    Given two intervals ('a' and 'b'), there are six different ways the two intervals can relate to each other:
    </p>
    <ul>
    <li><code>a</code> and <code>b</code> do not overlap, and <code>a</code> comes before <code>b</code>.</li>
    <li><code>a</code> and <code>b</code> do not overlap, and <code>b</code> comes before <code>a</code>.</li>
    <li><code>a</code> and <code>b</code> overlap, with <code>b</code> fully contained within <code>a</code>.</li>
    <li><code>a</code> and <code>b</code> overlap, with <code>a</code> fully contained within <code>b</code>.</li>
    <li><code>a</code> and <code>b</code> overlap, with <code>a</code> extending beyond <code>b</code>.</li>
    <li><code>a</code> and <code>b</code> overlap, with <code>b</code> extending beyond <code>a</code>.</li>
    </ul>

    <p>
    Understanding and recognizing these six cases will help you solve a wide range of problems, from producing a list with only mutually exclusive intervals to optimizing interval merges.
    </p>

    <p>
    <strong>How do you identify when to use the Merge Intervals pattern?</strong>
    </p>
    <ul>
    <li>If you’re asked to produce a list with only mutually exclusive intervals.</li>
    <li>If you hear the term “overlapping intervals”.</li>
    </ul>

    <p>
    <strong>Merge interval problem patterns:</strong>
    </p>
    <ul>
    <li><strong>Intervals Intersection (medium):</strong> <a href="link">Link</a></li>
    <li><strong>Maximum CPU Load (hard):</strong> <a href="link">Link</a></li>
    </ul>
    `,
    image: 'assets/lc-patterns-readme-content/mergeintervals.jpeg',
  },
  {
    name: 'Cyclic sort',
    content: `
    <p>
    The <code>Cyclic Sort</code> pattern describes an interesting approach to deal with problems involving arrays containing numbers in a given range. The Cyclic Sort pattern iterates over the array one number at a time, and if the current number being iterated is not at the correct index, it swaps it with the number at its correct index. Placing the number in its correct index directly would produce a complexity of O(n²), which is not optimal, hence the adoption of the Cyclic Sort pattern.
    </p>

    <p>
    <strong>How do I identify this pattern?</strong>
    </p>
    <ul>
    <li>There will be problems involving a sorted array with numbers in a given range.</li>
    <li>If the problem asks you to find the missing/duplicate/smallest number in a sorted/rotated array.</li>
    </ul>

    <p>
    <strong>Problems featuring the cyclic sort pattern:</strong>
    </p>
    <ul>
    <li><strong>Find the Missing Number (easy):</strong> <a href="link">Link</a></li>
    <li><strong>Find the Smallest Missing Positive Number (medium):</strong> <a href="link">Link</a></li>
    </ul>    
    `,
    image: 'assets/lc-patterns-readme-content/cyclicosrt.jpeg',
  },
  {
    name: 'In-place reversal of linked list',
    content: `
    <p>
    In many problems, you may be tasked with reversing the links between a set of nodes in a linked list. Often, the constraint is that you need to perform this reversal in-place, utilizing the existing node objects and without employing extra memory. This is where the above-mentioned pattern proves useful.
    </p>

    <p>
    This pattern reverses one node at a time, starting with one variable (<code>current</code>) pointing to the head of the linked list, and another variable (<code>previous</code>) pointing to the previous node that you have processed. In a lock-step manner, you reverse the current node by pointing it to the previous before moving on to the next node. Additionally, you update the variable <code>previous</code> to always point to the previous node that you have processed.
    </p>

    <p>
    <strong>How do I identify when to use this pattern:</strong>
    </p>
    <ul>
    <li>If you’re asked to reverse a linked list without using extra memory.</li>
    </ul>

    <p>
    <strong>Problems featuring in-place reversal of linked list pattern:</strong>
    </p>
    <ul>
    <li><strong>Reverse a Sub-list (medium):</strong> <a href="link">Link</a></li>
    <li><strong>Reverse every K-element Sub-list (medium):</strong> <a href="link">Link</a></li>
    </ul>
    `,
    image: 'assets/lc-patterns-readme-content/inplacelinkedinreversal.jpeg',
  },
  {
    name: 'Tree BFS',
    content: `
    <p>
    This pattern is based on the <strong>Breadth First Search (BFS)</strong> technique to traverse a tree and utilizes a queue to keep track of all the nodes of a level before moving on to the next level. Any problem involving the traversal of a tree in a level-by-level order can be efficiently solved using this approach.
    </p>

    <p>
    The <strong>Tree BFS pattern</strong> works by pushing the root node to the queue and then continually iterating until the queue is empty. For each iteration, we remove the node at the head of the queue and “visit” that node. After removing each node from the queue, we also insert all of its children into the queue.
    </p>

    <p>
    <strong>How to identify the Tree BFS pattern:</strong>
    </p>
    <ul>
    <li>If you’re asked to traverse a tree in a level-by-level fashion (or level order traversal).</li>
    </ul>

    <p>
    <strong>Problems featuring Tree BFS pattern:</strong>
    </p>
    <ul>
    <li><strong>Binary Tree Level Order Traversal (easy):</strong> <a href="link">Link</a></li>
    <li><strong>Zigzag Traversal (medium):</strong> <a href="link">Link</a></li>
    </ul>
    `,
  },
  {
    name: 'Tree DFS',
    content: `
    <p>
    <strong>Tree DFS</strong> is based on the <strong>Depth First Search (DFS)</strong> technique to traverse a tree.
    </p>

    <p>
    You can use recursion (or a stack for the iterative approach) to keep track of all the previous (parent) nodes while traversing.
    </p>

    <p>
    The <strong>Tree DFS pattern</strong> works by starting at the root of the tree. If the node is not a leaf, you need to do three things:
    </p>

    <ol>
    <li>Decide whether to process the current node now (pre-order), or between processing two children (in-order), or after processing both children (post-order).</li>
    <li>Make two recursive calls for both the children of the current node to process them.</li>
    </ol>

    <p>
    <strong>How to identify the Tree DFS pattern:</strong>
    </p>
    <ul>
    <li>If you’re asked to traverse a tree with in-order, preorder, or postorder DFS.</li>
    <li>If the problem requires searching for something where the node is closer to a leaf.</li>
    </ul>

    <p>
    <strong>Problems featuring Tree DFS pattern:</strong>
    </p>
    <ul>
    <li><strong>Sum of Path Numbers (medium):</strong> <a href="link">Link</a></li>
    <li><strong>All Paths for a Sum (medium):</strong> <a href="link">Link</a></li>
    </ul>

    `,
  },
  {
    name: 'Two heaps',
    content: `
    <p>
    In many problems, we are given a set of elements such that we can divide them into two parts. To solve the problem, we are interested in knowing the smallest element in one part and the biggest element in the other part. This pattern is an efficient approach to solve such problems.
    </p>

    <p>
    This pattern uses two heaps; A <strong>Min Heap</strong> to find the smallest element and a <strong>Max Heap</strong> to find the biggest element. The pattern works by storing the first half of numbers in a Max Heap, as you want to find the largest number in the first half. Then, you store the second half of numbers in a Min Heap, as you want to find the smallest number in the second half. At any time, the median of the current list of numbers can be calculated from the top element of the two heaps.
    </p>

    <p>
    <strong>Ways to identify the Two Heaps pattern:</strong>
    </p>
    <ul>
    <li>Useful in situations like Priority Queue, Scheduling.</li>
    <li>If the problem states that you need to find the smallest/largest/median elements of a set.</li>
    <li>Sometimes, useful in problems featuring a binary tree data structure.</li>
    </ul>

    <p>
    <strong>Problems featuring Two Heaps pattern:</strong>
    </p>
    <ul>
    <li><strong>Find the Median of a Number Stream (medium):</strong> <a href="link">Link</a></li>
    </ul>
    `,
  },
  {
    name: 'Subsets',
    content: `
    <p>
    A huge number of coding interview problems involve dealing with Permutations and Combinations of a given set of elements. The <strong>Subsets</strong> pattern describes an efficient Breadth First Search (BFS) approach to handle all these problems.
    </p>

    <p>
    The pattern looks like this:
    </p>

    <ul>
    <li>Given a set of [1, 5, 3]</li>
    <li>Start with an empty set: [[]]</li>
    <li>Add the first number (1) to all the existing subsets to create new subsets: [[], [1]];</li>
    <li>Add the second number (5) to all the existing subsets: [[], [1], [5], [1,5]];</li>
    <li>Add the third number (3) to all the existing subsets: [[], [1], [5], [1,5], [3], [1,3], [5,3], [1,5,3]].</li>
    </ul>

    <p>
    <strong>How to identify the Subsets pattern:</strong>
    </p>
    <ul>
    <li>Problems where you need to find the combinations or permutations of a given set.</li>
    </ul>

    <p>
    <strong>Problems featuring Subsets pattern:</strong>
    </p>
    <ul>
    <li><strong>Subsets With Duplicates (easy):</strong> <a href="link">Link</a></li>
    <li><strong>String Permutations by changing case (medium):</strong> <a href="link">Link</a></li>
    </ul>

    `,
    image: 'assets/lc-patterns-readme-content/subsets.jpeg',
  },
  {
    name: 'Modified binary search',
    content: `
    <p>
    Whenever you are given a sorted array, linked list, or matrix, and are asked to find a certain element, the best algorithm you can use is the <strong>Binary Search</strong>. This pattern describes an efficient way to handle all problems involving Binary Search.
    </p>

    <p>
    The pattern looks like this for an ascending order set:
    </p>

    <ol>
    <li>First, find the middle of start and end. An easy way to find the middle would be: <code>middle = (start + end) / 2</code>. But this has a good chance of producing an integer overflow, so it’s recommended that you represent the middle as: <code>middle = start + (end — start) / 2</code></li>
    <li>If the key is equal to the number at index middle, then return middle</li>
    <li>If ‘key’ isn’t equal to the index middle:
        <ul>
        <li>Check if <code>key < arr[middle]</code>. If it is, reduce your search to <code>end = middle — 1</code></li>
        <li>Check if <code>key > arr[middle]</code>. If it is, reduce your search to <code>end = middle + 1</code></li>
        </ul>
    </li>
    </ol>

    <p>
    <strong>Problems featuring the Modified Binary Search pattern:</strong>
    </p>
    <ul>
    <li><strong>Order-agnostic Binary Search (easy):</strong> <a href="link">Link</a></li>
    <li><strong>Search in a Sorted Infinite Array (medium):</strong> <a href="link">Link</a></li>
    </ul>

    `,
    image: 'assets/lc-patterns-readme-content/modifiedbinarysearch.jpeg',
  },
  {
    name: 'Top K elements',
    content: `
    <p>
    Any problem that asks us to find the top/smallest/frequent ‘K’ elements among a given set falls under this pattern.
    </p>

    <p>
    The best data structure to keep track of ‘K’ elements is Heap. This pattern will make use of the Heap to solve multiple problems dealing with ‘K’ elements at a time from a set of given elements. The pattern looks like this:
    </p>

    <ol>
    <li>Insert ‘K’ elements into the min-heap or max-heap based on the problem.</li>
    <li>Iterate through the remaining numbers, and if you find one that is larger than what you have in the heap, then remove that number and insert the larger one.</li>
    </ol>

    <p>
    <strong>How to identify the Top ‘K’ Elements pattern:</strong>
    </p>
    <ul>
    <li>If you’re asked to find the top/smallest/frequent ‘K’ elements of a given set.</li>
    <li>If you’re asked to sort an array to find an exact element.</li>
    </ul>

    <p>
    <strong>Problems featuring Top ‘K’ Elements pattern:</strong>
    </p>
    <ul>
    <li><strong>Top ‘K’ Numbers (easy):</strong> <a href="link">Link</a></li>
    <li><strong>Top ‘K’ Frequent Numbers (medium):</strong> <a href="link">Link</a></li>
    </ul>

    `,
    image: 'assets/lc-patterns-readme-content/topkelements.jpeg',
  },
  {
    name: 'K-way Merge',
    content: `
    <p>
    <strong>K-way Merge</strong> helps you solve problems that involve a set of sorted arrays.
    </p>

    <p>
    Whenever you’re given ‘K’ sorted arrays, you can use a Heap to efficiently perform a sorted traversal of all the elements of all arrays. You can push the smallest element of each array in a Min Heap to get the overall minimum. After getting the overall minimum, push the next element from the same array to the heap. Then, repeat this process to make a sorted traversal of all elements.
    </p>

    <p>
    The pattern looks like this:
    </p>

    <ol>
    <li>Insert the first element of each array in a Min Heap.</li>
    <li>After this, take out the smallest (top) element from the heap and add it to the merged list.</li>
    <li>After removing the smallest element from the heap, insert the next element of the same list into the heap.</li>
    <li>Repeat steps 2 and 3 to populate the merged list in sorted order.</li>
    </ol>

    <p>
    <strong>How to identify the K-way Merge pattern:</strong>
    </p>
    <ul>
    <li>The problem will feature sorted arrays, lists, or a matrix.</li>
    <li>If the problem asks you to merge sorted lists, find the smallest element in a sorted list.</li>
    </ul>

    <p>
    <strong>Problems featuring the K-way Merge pattern:</strong>
    </p>
    <ul>
    <li><strong>Merge K Sorted Lists (medium):</strong> <a href="link">Link</a></li>
    <li><strong>K Pairs with Largest Sums (Hard):</strong> <a href="link">Link</a></li>
    </ul>

    `,
    image: 'assets/lc-patterns-readme-content/kwaymerge.jpeg',
  },
  {
    name: 'Topological sort',
    content: `
    <p>
    <strong>Topological Sort</strong> is used to find a linear ordering of elements that have dependencies on each other. For example, if event ‘B’ is dependent on event ‘A’, ‘A’ comes before ‘B’ in topological ordering.
    </p>

    <p>
    This pattern defines an easy way to understand the technique for performing topological sorting of a set of elements.
    </p>

    <p>
    <strong>The pattern works like this:</strong>
    </p>

    <ol>
    <li><strong>Initialization:</strong>
        <ul>
        <li>a) Store the graph in adjacency lists by using a HashMap</li>
        <li>b) To find all sources, use a HashMap to keep the count of in-degreesBuild the graph and find in-degrees of all vertices
        </li>
        </ul>
    </li>
    <li><strong>Build the graph and find in-degrees of all vertices:</strong>
        <ul>
        <li>Build the graph from the input and populate the in-degrees HashMap.</li>
        </ul>
    </li>
    <li><strong>Find all sources:</strong>
        <ul>
        <li>All vertices with ‘0’ in-degrees will be sources and are stored in a Queue.</li>
        </ul>
    </li>
    <li><strong>Sort:</strong>
        <ul>
        <li>For each source, do the following things:
            <ul>
            <li>i) Add it to the sorted list.</li>
            <li>ii) Get all of its children from the graph.</li>
            <li>iii) Decrement the in-degree of each child by 1.</li>
            <li>iv) If a child’s in-degree becomes ‘0’, add it to the sources Queue.</li>
            </ul>
        </li>
        <li>b) Repeat (a), until the source Queue is empty.</li>
        </ul>
    </li>
    </ol>

    <p>
    <strong>How to identify the Topological Sort pattern:</strong>
    </p>

    <ul>
    <li>The problem will deal with graphs that have no directed cycles.</li>
    <li>If you’re asked to update all objects in a sorted order.</li>
    <li>If you have a class of objects that follow a particular order.</li>
    </ul>

    <p>
    <strong>Problems featuring the Topological Sort pattern:</strong>
    </p>

    <ul>
    <li><strong>Task scheduling (medium):</strong> <a href="link">Link</a></li>
    <li><strong>Minimum height of a tree (hard):</strong> <a href="link">Link</a></li>
    </ul>

    `,
    image: 'assets/lc-patterns-readme-content/topologicalsort.png',
  },
  // Add more patterns as needed
];
