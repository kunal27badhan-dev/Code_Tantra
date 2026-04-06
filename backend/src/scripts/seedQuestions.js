/**
 * Pre-generated Quiz Questions Seed Script
 * Populates MongoDB with curated questions that appear AI-generated
 */

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://kunal-badhan:Psw%40db@code-tantra.mpwa35c.mongodb.net/quizapp';

// Question bank organized by domain -> language -> sets
const questionBank = {
  // ==================== WEB DEVELOPMENT ====================
  WebDevelopment: {
    JavaScript: [
      // Set 1
      [
        { id: 1, question: "What is the output of typeof null in JavaScript?", difficulty: "easy", options: ["A. null", "B. undefined", "C. object", "D. number"], correctAnswer: 2, explanation: "This is a known JavaScript quirk - typeof null returns 'object' due to a legacy bug in the language." },
        { id: 2, question: "Which method converts a JSON string to a JavaScript object?", difficulty: "easy", options: ["A. JSON.stringify()", "B. JSON.parse()", "C. JSON.toObject()", "D. JSON.convert()"], correctAnswer: 1, explanation: "JSON.parse() parses a JSON string and constructs the JavaScript value or object." },
        { id: 3, question: "What does the 'use strict' directive do in JavaScript?", difficulty: "medium", options: ["A. Enables ES6 features", "B. Enforces stricter parsing and error handling", "C. Improves performance", "D. Enables TypeScript mode"], correctAnswer: 1, explanation: "Strict mode catches common coding mistakes and unsafe actions like using undeclared variables." },
        { id: 4, question: "Which ES6 feature allows you to extract values from arrays or objects?", difficulty: "medium", options: ["A. Spread operator", "B. Destructuring", "C. Template literals", "D. Arrow functions"], correctAnswer: 1, explanation: "Destructuring assignment unpacks values from arrays or properties from objects into distinct variables." },
        { id: 5, question: "What is the event loop in JavaScript responsible for?", difficulty: "hard", options: ["A. Managing CSS animations", "B. Handling asynchronous callbacks and the call stack", "C. Compiling JavaScript code", "D. Managing DOM updates"], correctAnswer: 1, explanation: "The event loop monitors the call stack and callback queue, pushing callbacks when the stack is empty." }
      ],
      // Set 2
      [
        { id: 1, question: "What is a closure in JavaScript?", difficulty: "medium", options: ["A. A function that returns another function", "B. A function with access to its outer scope even after the outer function returns", "C. A method to close browser windows", "D. A way to end loops"], correctAnswer: 1, explanation: "Closures allow functions to retain access to variables from their lexical scope." },
        { id: 2, question: "Which array method creates a new array with elements that pass a test?", difficulty: "easy", options: ["A. map()", "B. forEach()", "C. filter()", "D. reduce()"], correctAnswer: 2, explanation: "filter() creates a new array with all elements that pass the test implemented by the provided function." },
        { id: 3, question: "What is the difference between == and === in JavaScript?", difficulty: "easy", options: ["A. No difference", "B. == compares values, === compares values and types", "C. === is faster", "D. == is deprecated"], correctAnswer: 1, explanation: "== performs type coercion before comparison, while === checks both value and type without coercion." },
        { id: 4, question: "What does Promise.all() return when one promise rejects?", difficulty: "hard", options: ["A. An array with the rejection reason", "B. It immediately rejects with the first rejection reason", "C. It waits for all promises and returns mixed results", "D. undefined"], correctAnswer: 1, explanation: "Promise.all() fails fast - it rejects immediately when any of the input promises rejects." },
        { id: 5, question: "Which keyword creates a block-scoped variable in JavaScript?", difficulty: "easy", options: ["A. var", "B. let", "C. const", "D. Both B and C"], correctAnswer: 3, explanation: "Both let and const create block-scoped variables, unlike var which is function-scoped." }
      ],
      // Set 3
      [
        { id: 1, question: "What is hoisting in JavaScript?", difficulty: "medium", options: ["A. Moving elements up in the DOM", "B. Variable and function declarations moved to top of scope", "C. Increasing performance", "D. A CSS property"], correctAnswer: 1, explanation: "Hoisting moves declarations to the top of their scope during compilation, though let/const have a temporal dead zone." },
        { id: 2, question: "Which method is used to add elements to the end of an array?", difficulty: "easy", options: ["A. unshift()", "B. push()", "C. concat()", "D. append()"], correctAnswer: 1, explanation: "push() adds one or more elements to the end of an array and returns the new length." },
        { id: 3, question: "What is the purpose of the async/await syntax?", difficulty: "medium", options: ["A. To make code run faster", "B. To write asynchronous code that looks synchronous", "C. To create web workers", "D. To handle DOM events"], correctAnswer: 1, explanation: "async/await provides a cleaner syntax for working with Promises, making async code easier to read and write." },
        { id: 4, question: "What does Object.freeze() do?", difficulty: "hard", options: ["A. Pauses code execution", "B. Prevents modifications to an object's properties", "C. Creates a copy of an object", "D. Converts object to JSON"], correctAnswer: 1, explanation: "Object.freeze() makes an object immutable - you cannot add, remove, or modify its properties." },
        { id: 5, question: "What is the Prototype chain in JavaScript?", difficulty: "hard", options: ["A. A linked list data structure", "B. The mechanism by which objects inherit features from other objects", "C. A way to chain function calls", "D. A security feature"], correctAnswer: 1, explanation: "JavaScript uses prototypal inheritance where objects can inherit directly from other objects via the prototype chain." }
      ]
    ],
    React: [
      // Set 1
      [
        { id: 1, question: "What is the virtual DOM in React?", difficulty: "easy", options: ["A. A direct copy of the browser DOM", "B. A lightweight JavaScript representation of the actual DOM", "C. A CSS framework", "D. A database for storing components"], correctAnswer: 1, explanation: "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM." },
        { id: 2, question: "What hook is used for side effects in functional components?", difficulty: "easy", options: ["A. useState", "B. useContext", "C. useEffect", "D. useReducer"], correctAnswer: 2, explanation: "useEffect is designed for side effects like data fetching, subscriptions, or DOM manipulation." },
        { id: 3, question: "What is the purpose of React.memo()?", difficulty: "medium", options: ["A. To store data in memory", "B. To memoize component rendering and prevent unnecessary re-renders", "C. To create memos in the app", "D. To improve SEO"], correctAnswer: 1, explanation: "React.memo() is a higher-order component that memoizes the result, skipping re-render if props haven't changed." },
        { id: 4, question: "What is prop drilling in React?", difficulty: "medium", options: ["A. A performance optimization", "B. Passing props through multiple levels of components", "C. A testing technique", "D. A build process"], correctAnswer: 1, explanation: "Prop drilling refers to passing data through multiple nested components that don't need it, just to reach a deeply nested component." },
        { id: 5, question: "What is the difference between useCallback and useMemo?", difficulty: "hard", options: ["A. No difference", "B. useCallback memoizes functions, useMemo memoizes values", "C. useCallback is for async operations", "D. useMemo is deprecated"], correctAnswer: 1, explanation: "useCallback returns a memoized callback function, while useMemo returns a memoized value from a computation." }
      ],
      // Set 2
      [
        { id: 1, question: "How do you pass data from parent to child component in React?", difficulty: "easy", options: ["A. Using state", "B. Using props", "C. Using context", "D. Using refs"], correctAnswer: 1, explanation: "Props (short for properties) are the primary way to pass data from parent to child components in React." },
        { id: 2, question: "What is JSX in React?", difficulty: "easy", options: ["A. A JavaScript library", "B. A syntax extension that allows HTML-like code in JavaScript", "C. A state management tool", "D. A testing framework"], correctAnswer: 1, explanation: "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files." },
        { id: 3, question: "When does useEffect cleanup function run?", difficulty: "medium", options: ["A. Only on component mount", "B. Before the effect runs again and on unmount", "C. Only on unmount", "D. Never automatically"], correctAnswer: 1, explanation: "The cleanup function runs before the effect runs again (on re-render with changed dependencies) and when the component unmounts." },
        { id: 4, question: "What is the Context API used for?", difficulty: "medium", options: ["A. Routing", "B. Avoiding prop drilling by sharing data across components", "C. Making API calls", "D. Styling components"], correctAnswer: 1, explanation: "Context provides a way to pass data through the component tree without having to pass props manually at every level." },
        { id: 5, question: "What is React Fiber?", difficulty: "hard", options: ["A. A CSS framework for React", "B. React's reconciliation algorithm for incremental rendering", "C. A state management library", "D. A testing utility"], correctAnswer: 1, explanation: "React Fiber is the reimplementation of React's core algorithm for rendering, enabling incremental rendering and better scheduling." }
      ],
      // Set 3
      [
        { id: 1, question: "What is the key prop used for in React lists?", difficulty: "easy", options: ["A. Styling elements", "B. Helping React identify which items changed, added, or removed", "C. Accessing elements", "D. Sorting the list"], correctAnswer: 1, explanation: "Keys help React identify which items have changed, are added, or removed, enabling efficient re-rendering of lists." },
        { id: 2, question: "What is a controlled component in React?", difficulty: "medium", options: ["A. A component with no state", "B. A form element whose value is controlled by React state", "C. A component inside a container", "D. A pure component"], correctAnswer: 1, explanation: "A controlled component is a form element where React controls the value through state, making React the single source of truth." },
        { id: 3, question: "How do you prevent a component from rendering?", difficulty: "medium", options: ["A. Return undefined", "B. Return null or false", "C. Use display: none", "D. Delete the component"], correctAnswer: 1, explanation: "Returning null from a component's render method prevents it from rendering anything to the DOM." },
        { id: 4, question: "What is the useReducer hook best used for?", difficulty: "hard", options: ["A. Simple boolean toggles", "B. Complex state logic with multiple sub-values or state transitions", "C. Fetching data", "D. Routing"], correctAnswer: 1, explanation: "useReducer is preferable to useState when you have complex state logic involving multiple sub-values or when the next state depends on the previous one." },
        { id: 5, question: "What is Concurrent Mode in React?", difficulty: "hard", options: ["A. Running React on multiple threads", "B. A set of features that help React apps stay responsive by rendering updates without blocking", "C. Running multiple React apps", "D. Parallel testing"], correctAnswer: 1, explanation: "Concurrent Mode enables React to interrupt long-running renders to handle high-priority events, keeping apps responsive." }
      ]
    ],
    TypeScript: [
      // Set 1
      [
        { id: 1, question: "What is TypeScript?", difficulty: "easy", options: ["A. A new programming language", "B. A typed superset of JavaScript that compiles to plain JavaScript", "C. A JavaScript framework", "D. A testing tool"], correctAnswer: 1, explanation: "TypeScript is a typed superset of JavaScript that adds optional static types and compiles to plain JavaScript." },
        { id: 2, question: "How do you define a variable with a specific type in TypeScript?", difficulty: "easy", options: ["A. var name = string", "B. let name: string", "C. string name", "D. define name as string"], correctAnswer: 1, explanation: "TypeScript uses a colon syntax (variable: type) to declare types, like let name: string." },
        { id: 3, question: "What is the 'any' type in TypeScript?", difficulty: "medium", options: ["A. A type for arrays", "B. A type that allows any value, opting out of type checking", "C. A required type", "D. A deprecated type"], correctAnswer: 1, explanation: "The any type allows any value and opts out of type checking, useful for migrating JavaScript but should be avoided when possible." },
        { id: 4, question: "What is the difference between interface and type in TypeScript?", difficulty: "medium", options: ["A. No difference", "B. Interfaces can be extended/merged, types can use unions", "C. Types are deprecated", "D. Interfaces are slower"], correctAnswer: 1, explanation: "Both can define object shapes, but interfaces can be extended and merged, while types can use unions and intersections." },
        { id: 5, question: "What are TypeScript generics used for?", difficulty: "hard", options: ["A. Creating generic HTML", "B. Creating reusable components that work with multiple types", "C. Generating code", "D. Generic error handling"], correctAnswer: 1, explanation: "Generics allow you to create reusable components that can work with any type while maintaining type safety." }
      ],
      // Set 2
      [
        { id: 1, question: "What file extension is used for TypeScript files?", difficulty: "easy", options: ["A. .js", "B. .ts", "C. .typescript", "D. .type"], correctAnswer: 1, explanation: "TypeScript files use the .ts extension, or .tsx for files containing JSX." },
        { id: 2, question: "What is a union type in TypeScript?", difficulty: "medium", options: ["A. A type for unions/groups", "B. A type that can be one of several types using | operator", "C. A merged type", "D. A labor union database type"], correctAnswer: 1, explanation: "Union types allow a value to be one of several types, written as Type1 | Type2, like string | number." },
        { id: 3, question: "What does the readonly modifier do?", difficulty: "medium", options: ["A. Makes files read-only", "B. Prevents reassignment of properties after initialization", "C. Enables read mode", "D. Improves read performance"], correctAnswer: 1, explanation: "The readonly modifier prevents reassignment of a property after the object is created." },
        { id: 4, question: "What are TypeScript decorators?", difficulty: "hard", options: ["A. Visual styling tools", "B. Special declarations that add metadata and modify classes/methods", "C. Documentation generators", "D. Code formatters"], correctAnswer: 1, explanation: "Decorators are a stage 3 proposal for JavaScript that TypeScript supports, allowing annotation and modification of classes and members." },
        { id: 5, question: "What is the 'never' type used for?", difficulty: "hard", options: ["A. Optional values", "B. Functions that never return or values that should never occur", "C. Null values", "D. Undefined values"], correctAnswer: 1, explanation: "The never type represents values that never occur, like functions that always throw or have infinite loops." }
      ],
      // Set 3  
      [
        { id: 1, question: "How do you make a property optional in a TypeScript interface?", difficulty: "easy", options: ["A. property: optional string", "B. property?: string", "C. optional property: string", "D. property: string | null"], correctAnswer: 1, explanation: "Adding a ? after the property name makes it optional: property?: string." },
        { id: 2, question: "What is type inference in TypeScript?", difficulty: "medium", options: ["A. Guessing types randomly", "B. Automatically determining types based on values", "C. Importing types", "D. Type conversion"], correctAnswer: 1, explanation: "Type inference is TypeScript's ability to automatically determine types based on the assigned values without explicit annotation." },
        { id: 3, question: "What is a TypeScript namespace?", difficulty: "medium", options: ["A. A naming convention", "B. A way to organize code and prevent name collisions", "C. A DNS feature", "D. A deprecated feature"], correctAnswer: 1, explanation: "Namespaces are a TypeScript-specific way to organize code and avoid naming collisions, though ES modules are now preferred." },
        { id: 4, question: "What is the 'keyof' operator in TypeScript?", difficulty: "hard", options: ["A. Creates keyboard shortcuts", "B. Takes an object type and produces a union of its keys", "C. Key generation", "D. Key validation"], correctAnswer: 1, explanation: "keyof takes an object type and produces a string or numeric literal union of its keys: keyof Person = 'name' | 'age'." },
        { id: 5, question: "What is a TypeScript mapped type?", difficulty: "hard", options: ["A. A map data structure", "B. A type that transforms properties of an existing type", "C. A geographic type", "D. A dictionary type"], correctAnswer: 1, explanation: "Mapped types transform properties of an existing type, like making all properties optional: Partial<T>." }
      ]
    ],
    NodeJS: [
      // Set 1
      [
        { id: 1, question: "What is Node.js?", difficulty: "easy", options: ["A. A web browser", "B. A JavaScript runtime built on Chrome's V8 engine", "C. A database", "D. A CSS framework"], correctAnswer: 1, explanation: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing JavaScript to run on the server." },
        { id: 2, question: "Which module is used to create a web server in Node.js?", difficulty: "easy", options: ["A. fs", "B. path", "C. http", "D. url"], correctAnswer: 2, explanation: "The http module provides functionality to create HTTP servers and make HTTP requests." },
        { id: 3, question: "What is npm in Node.js?", difficulty: "easy", options: ["A. Node Package Manager", "B. New Programming Module", "C. Node Process Manager", "D. Network Protocol Manager"], correctAnswer: 0, explanation: "npm (Node Package Manager) is the default package manager for Node.js, managing project dependencies." },
        { id: 4, question: "What is the purpose of package.json?", difficulty: "medium", options: ["A. Storing user data", "B. Defining project metadata, dependencies, and scripts", "C. Configuration for the V8 engine", "D. Log file for packages"], correctAnswer: 1, explanation: "package.json contains metadata about the project, its dependencies, scripts, and configuration." },
        { id: 5, question: "What is the Node.js Event Loop?", difficulty: "hard", options: ["A. A UI component", "B. A mechanism that handles async operations by offloading to the system kernel", "C. A game loop", "D. A testing framework"], correctAnswer: 1, explanation: "The event loop allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded." }
      ],
      // Set 2
      [
        { id: 1, question: "How do you import a module in Node.js (CommonJS)?", difficulty: "easy", options: ["A. import module", "B. require('module')", "C. include module", "D. load('module')"], correctAnswer: 1, explanation: "In CommonJS (traditional Node.js), modules are imported using require('module-name')." },
        { id: 2, question: "What is Express.js?", difficulty: "medium", options: ["A. A database", "B. A fast, minimalist web framework for Node.js", "C. A testing library", "D. A JavaScript compiler"], correctAnswer: 1, explanation: "Express.js is a minimal and flexible Node.js web application framework providing robust features for web and mobile apps." },
        { id: 3, question: "What is middleware in Express?", difficulty: "medium", options: ["A. Hardware components", "B. Functions that access request and response objects in the request-response cycle", "C. Database connectors", "D. CSS preprocessors"], correctAnswer: 1, explanation: "Middleware functions have access to req, res, and next, and can execute code, modify objects, or end the request-response cycle." },
        { id: 4, question: "What is the purpose of the 'cluster' module?", difficulty: "hard", options: ["A. Database clustering", "B. Creating child processes to utilize multi-core systems", "C. File organization", "D. Memory management"], correctAnswer: 1, explanation: "The cluster module allows creating child processes that share server ports, utilizing multi-core systems effectively." },
        { id: 5, question: "What is libuv in Node.js?", difficulty: "hard", options: ["A. A UI library", "B. A multi-platform C library providing async I/O", "C. A JavaScript engine", "D. A package manager"], correctAnswer: 1, explanation: "libuv is a C library that provides the event loop and async I/O operations in Node.js across different platforms." }
      ],
      // Set 3
      [
        { id: 1, question: "What does process.env contain?", difficulty: "easy", options: ["A. Process errors", "B. Environment variables", "C. Event handlers", "D. Express settings"], correctAnswer: 1, explanation: "process.env is an object containing the user environment variables, commonly used for configuration." },
        { id: 2, question: "What is the difference between dependencies and devDependencies?", difficulty: "medium", options: ["A. No difference", "B. dependencies are for production, devDependencies for development only", "C. devDependencies are faster", "D. dependencies are deprecated"], correctAnswer: 1, explanation: "dependencies are required for production, while devDependencies are only needed during development (testing, building, etc.)." },
        { id: 3, question: "What is a stream in Node.js?", difficulty: "medium", options: ["A. Video streaming", "B. Objects for reading/writing data in chunks continuously", "C. Network connections", "D. Log files"], correctAnswer: 1, explanation: "Streams are objects that let you read/write data continuously in chunks, useful for handling large files efficiently." },
        { id: 4, question: "What is the Worker Threads module used for?", difficulty: "hard", options: ["A. Managing employees", "B. Running JavaScript in parallel threads for CPU-intensive tasks", "C. Web Workers only", "D. Thread pool management"], correctAnswer: 1, explanation: "Worker Threads allow running JavaScript code in parallel threads, useful for CPU-intensive operations without blocking the event loop." },
        { id: 5, question: "What is the difference between spawn and exec in child_process?", difficulty: "hard", options: ["A. No difference", "B. spawn streams data, exec buffers output in memory", "C. exec is deprecated", "D. spawn is for Windows only"], correctAnswer: 1, explanation: "spawn returns a stream and is better for large outputs; exec buffers the entire output in memory and is better for small outputs." }
      ]
    ]
  },
  
  // ==================== APP DEVELOPMENT ====================
  AppDevelopment: {
    Flutter: [
      // Set 1
      [
        { id: 1, question: "What programming language is Flutter primarily built with?", difficulty: "easy", options: ["A. JavaScript", "B. Kotlin", "C. Dart", "D. Swift"], correctAnswer: 2, explanation: "Flutter uses Dart as its programming language, developed by Google." },
        { id: 2, question: "What is a Widget in Flutter?", difficulty: "easy", options: ["A. A debugging tool", "B. The basic building block of Flutter UI", "C. A database component", "D. A testing framework"], correctAnswer: 1, explanation: "In Flutter, everything is a widget - they are the basic building blocks used to create the user interface." },
        { id: 3, question: "What is the difference between StatelessWidget and StatefulWidget?", difficulty: "medium", options: ["A. No difference", "B. StatefulWidget can change over time, StatelessWidget cannot", "C. StatelessWidget is faster", "D. StatefulWidget is deprecated"], correctAnswer: 1, explanation: "StatelessWidget is immutable, while StatefulWidget maintains state that can change during the widget's lifetime." },
        { id: 4, question: "What is hot reload in Flutter?", difficulty: "easy", options: ["A. Restarting the app", "B. Instantly seeing code changes without losing app state", "C. Clearing cache", "D. Compiling in release mode"], correctAnswer: 1, explanation: "Hot reload injects updated source code files into the running Dart VM, allowing you to see changes instantly while preserving state." },
        { id: 5, question: "What is the purpose of the BuildContext in Flutter?", difficulty: "hard", options: ["A. Building APK files", "B. A handle to the location of a widget in the widget tree", "C. Context for API calls", "D. Database context"], correctAnswer: 1, explanation: "BuildContext is a handle to the location of a widget in the widget tree, used to access theme data, navigate, and more." }
      ],
      // Set 2
      [
        { id: 1, question: "Which widget is used for scrollable lists in Flutter?", difficulty: "easy", options: ["A. Column", "B. ListView", "C. Stack", "D. Container"], correctAnswer: 1, explanation: "ListView is the most common scrolling widget, displaying its children linearly in a scrollable list." },
        { id: 2, question: "What is Provider in Flutter?", difficulty: "medium", options: ["A. An API service", "B. A state management solution and dependency injection tool", "C. A UI component", "D. A testing framework"], correctAnswer: 1, explanation: "Provider is a popular state management solution that makes it easy to access and manage state across widgets." },
        { id: 3, question: "What does the 'const' keyword do for widgets in Flutter?", difficulty: "medium", options: ["A. Makes widgets constant size", "B. Creates compile-time constant widgets for better performance", "C. Constants the color", "D. Prevents widget changes"], correctAnswer: 1, explanation: "const widgets are created at compile-time and can be reused, improving performance by avoiding unnecessary rebuilds." },
        { id: 4, question: "What is the purpose of Keys in Flutter?", difficulty: "hard", options: ["A. API authentication", "B. Preserving state when widgets move in the widget tree", "C. Encryption", "D. Keyboard handling"], correctAnswer: 1, explanation: "Keys help Flutter identify widgets when they move around in the widget tree, preserving their state correctly." },
        { id: 5, question: "What is Flutter's rendering pipeline?", difficulty: "hard", options: ["A. A CI/CD tool", "B. The process from widget to pixels: build, layout, paint, composite", "C. Network rendering", "D. Video streaming"], correctAnswer: 1, explanation: "Flutter's rendering pipeline involves building the widget tree, laying out elements, painting them, and compositing to the screen." }
      ],
      // Set 3
      [
        { id: 1, question: "What is the MaterialApp widget used for?", difficulty: "easy", options: ["A. Creating materials", "B. Setting up Material Design app structure with routing and theming", "C. 3D rendering", "D. Physics simulations"], correctAnswer: 1, explanation: "MaterialApp is a convenience widget that wraps widgets commonly required for Material Design apps, including navigation and theming." },
        { id: 2, question: "What is a Future in Dart/Flutter?", difficulty: "medium", options: ["A. A prediction tool", "B. A value that will be available asynchronously", "C. A deprecated feature", "D. A testing mock"], correctAnswer: 1, explanation: "A Future represents a potential value or error that will be available at some time in the future, used for async operations." },
        { id: 3, question: "What is the Scaffold widget in Flutter?", difficulty: "medium", options: ["A. A construction tool", "B. A visual layout structure implementing Material Design basics", "C. A testing framework", "D. A scaffolding generator"], correctAnswer: 1, explanation: "Scaffold implements the basic Material Design visual layout structure, providing APIs for app bars, drawers, snackbars, etc." },
        { id: 4, question: "What is the difference between mainAxisAlignment and crossAxisAlignment?", difficulty: "hard", options: ["A. No difference", "B. Main is along primary direction, cross is perpendicular", "C. Main is horizontal only", "D. Cross is deprecated"], correctAnswer: 1, explanation: "mainAxisAlignment aligns children along the main axis (horizontal for Row, vertical for Column), crossAxisAlignment perpendicular to it." },
        { id: 5, question: "What is Riverpod in Flutter?", difficulty: "hard", options: ["A. A database", "B. A reactive state management and dependency injection framework", "C. A UI library", "D. A testing tool"], correctAnswer: 1, explanation: "Riverpod is a complete rewrite of Provider, offering improved compile-time safety, testability, and state management patterns." }
      ]
    ],
    ReactNative: [
      // Set 1
      [
        { id: 1, question: "What is React Native?", difficulty: "easy", options: ["A. A web framework", "B. A framework for building native mobile apps using React", "C. A database", "D. A testing tool"], correctAnswer: 1, explanation: "React Native is a framework that allows building native mobile applications using React and JavaScript." },
        { id: 2, question: "What is the difference between React Native and React?", difficulty: "easy", options: ["A. No difference", "B. React is for web, React Native is for mobile apps", "C. React Native is newer", "D. React is deprecated"], correctAnswer: 1, explanation: "React is for building web interfaces, while React Native uses React concepts to build native mobile applications." },
        { id: 3, question: "What is the purpose of the View component in React Native?", difficulty: "medium", options: ["A. Displaying images", "B. The most fundamental component for building UI, like a div", "C. Navigation only", "D. Text display"], correctAnswer: 1, explanation: "View is the fundamental building block for UI, similar to div in HTML, supporting layout with flexbox, styling, and touch handling." },
        { id: 4, question: "What is the Metro bundler in React Native?", difficulty: "medium", options: ["A. A UI component", "B. The JavaScript bundler that compiles and serves your code", "C. A database", "D. A testing framework"], correctAnswer: 1, explanation: "Metro is React Native's JavaScript bundler that processes JavaScript files, handles module resolution, and enables hot reloading." },
        { id: 5, question: "What is the bridge in React Native architecture?", difficulty: "hard", options: ["A. A UI component", "B. The communication layer between JavaScript and native code", "C. A network tool", "D. A testing utility"], correctAnswer: 1, explanation: "The bridge enables asynchronous, batched, serialized communication between JavaScript and native platform code." }
      ],
      // Set 2
      [
        { id: 1, question: "Which component is used to display text in React Native?", difficulty: "easy", options: ["A. <p>", "B. <Text>", "C. <Label>", "D. <span>"], correctAnswer: 1, explanation: "The Text component is used to display text in React Native - you cannot put raw text directly in View components." },
        { id: 2, question: "What is AsyncStorage in React Native?", difficulty: "medium", options: ["A. Cloud storage", "B. An unencrypted, persistent, key-value storage system", "C. Memory cache", "D. File system"], correctAnswer: 1, explanation: "AsyncStorage is a simple, unencrypted, asynchronous, persistent key-value storage system for React Native." },
        { id: 3, question: "What is the purpose of StyleSheet.create() in React Native?", difficulty: "medium", options: ["A. Creating CSS files", "B. Creating optimized style objects with validation", "C. Importing styles", "D. Generating themes"], correctAnswer: 1, explanation: "StyleSheet.create() creates an optimized stylesheet, validates styles at creation time, and improves performance." },
        { id: 4, question: "What is Hermes in React Native?", difficulty: "hard", options: ["A. A Greek god", "B. A JavaScript engine optimized for React Native", "C. A styling library", "D. A database"], correctAnswer: 1, explanation: "Hermes is a JavaScript engine optimized for React Native, reducing app size, memory usage, and improving start-up time." },
        { id: 5, question: "What is the new React Native architecture (TurboModules/Fabric)?", difficulty: "hard", options: ["A. A design pattern", "B. A rewrite removing the bridge for synchronous native calls", "C. A styling system", "D. A testing framework"], correctAnswer: 1, explanation: "The new architecture includes TurboModules (lazy-loading native modules) and Fabric (new rendering system) for better performance." }
      ],
      // Set 3
      [
        { id: 1, question: "How do you handle touch events in React Native?", difficulty: "easy", options: ["A. onClick", "B. TouchableOpacity or Pressable components", "C. addEventListener", "D. onTouch"], correctAnswer: 1, explanation: "React Native provides Touchable components (TouchableOpacity, Pressable) for handling touch interactions." },
        { id: 2, question: "What is FlatList used for in React Native?", difficulty: "medium", options: ["A. Displaying flat designs", "B. Rendering large lists efficiently with virtualization", "C. Creating flat files", "D. Flattening arrays"], correctAnswer: 1, explanation: "FlatList is a performant component for rendering large lists, only rendering items currently visible on screen." },
        { id: 3, question: "What is the difference between FlatList and ScrollView?", difficulty: "medium", options: ["A. No difference", "B. FlatList virtualizes content, ScrollView renders all at once", "C. ScrollView is deprecated", "D. FlatList is only for images"], correctAnswer: 1, explanation: "FlatList only renders visible items (virtualization), while ScrollView renders all children at once, making FlatList better for large lists." },
        { id: 4, question: "What are Native Modules in React Native?", difficulty: "hard", options: ["A. Built-in components", "B. Custom native code exposed to JavaScript", "C. npm packages", "D. React hooks"], correctAnswer: 1, explanation: "Native Modules are custom native code (Java/Kotlin/Swift/ObjC) that you can expose to JavaScript when React Native lacks needed functionality." },
        { id: 5, question: "What is CodePush in React Native?", difficulty: "hard", options: ["A. A version control system", "B. A service to push JavaScript updates without app store review", "C. A build tool", "D. A testing framework"], correctAnswer: 1, explanation: "CodePush allows pushing JavaScript and asset updates directly to users' devices, bypassing app store review processes." }
      ]
    ],
    Swift: [
      // Set 1
      [
        { id: 1, question: "What is Swift?", difficulty: "easy", options: ["A. A web framework", "B. Apple's programming language for iOS, macOS, watchOS, and tvOS", "C. A database", "D. A testing tool"], correctAnswer: 1, explanation: "Swift is a powerful and intuitive programming language developed by Apple for building apps across all Apple platforms." },
        { id: 2, question: "What is an Optional in Swift?", difficulty: "easy", options: ["A. An optional feature", "B. A type that can hold either a value or nil", "C. A deprecated type", "D. A configuration setting"], correctAnswer: 1, explanation: "Optionals represent variables that can either contain a value or be nil, providing type-safe handling of missing values." },
        { id: 3, question: "What is the difference between let and var in Swift?", difficulty: "easy", options: ["A. No difference", "B. let is constant, var is variable", "C. var is deprecated", "D. let is only for strings"], correctAnswer: 1, explanation: "let declares immutable constants whose value cannot change, while var declares mutable variables." },
        { id: 4, question: "What is a closure in Swift?", difficulty: "medium", options: ["A. Closing an app", "B. A self-contained block of functionality that can be passed around", "C. A type of loop", "D. An error handler"], correctAnswer: 1, explanation: "Closures are self-contained blocks of functionality that can be passed around and used in your code, similar to lambdas." },
        { id: 5, question: "What is ARC in Swift?", difficulty: "hard", options: ["A. A graphics library", "B. Automatic Reference Counting for memory management", "C. A testing framework", "D. A build system"], correctAnswer: 1, explanation: "ARC automatically manages memory by tracking and managing your app's memory usage, freeing instances when no longer needed." }
      ],
      // Set 2
      [
        { id: 1, question: "How do you unwrap an optional in Swift?", difficulty: "easy", options: ["A. unwrap(optional)", "B. Using !, if let, guard let, or ??", "C. optional.value", "D. getValue(optional)"], correctAnswer: 1, explanation: "Optionals can be unwrapped using force unwrapping (!), optional binding (if let, guard let), or nil coalescing (??)." },
        { id: 2, question: "What is SwiftUI?", difficulty: "medium", options: ["A. A Swift compiler", "B. A declarative framework for building UI across Apple platforms", "C. A database", "D. A testing tool"], correctAnswer: 1, explanation: "SwiftUI is Apple's modern, declarative framework for building user interfaces across all Apple platforms with Swift." },
        { id: 3, question: "What is the difference between struct and class in Swift?", difficulty: "medium", options: ["A. No difference", "B. Structs are value types, classes are reference types", "C. Classes are deprecated", "D. Structs can't have methods"], correctAnswer: 1, explanation: "Structs are value types (copied when passed), while classes are reference types (passed by reference) and support inheritance." },
        { id: 4, question: "What is a protocol in Swift?", difficulty: "hard", options: ["A. A network protocol", "B. A blueprint of methods, properties, and requirements", "C. A security feature", "D. A testing standard"], correctAnswer: 1, explanation: "A protocol defines a blueprint of methods, properties, and other requirements that suit a particular task or functionality." },
        { id: 5, question: "What is the @escaping attribute for closures?", difficulty: "hard", options: ["A. For exiting apps", "B. Indicates a closure that outlives the function it was passed to", "C. For error handling", "D. For memory optimization"], correctAnswer: 1, explanation: "@escaping marks closures that may be called after the function returns, stored for later execution (like completion handlers)." }
      ],
      // Set 3
      [
        { id: 1, question: "What is guard in Swift?", difficulty: "easy", options: ["A. A security feature", "B. An early exit statement requiring a condition to be true", "C. A loop type", "D. An access modifier"], correctAnswer: 1, explanation: "guard provides early exit from a function if conditions aren't met, with required else clause that must exit the scope." },
        { id: 2, question: "What is Combine in Swift?", difficulty: "medium", options: ["A. A merge tool", "B. A framework for handling asynchronous events with reactive streams", "C. A UI library", "D. A database connector"], correctAnswer: 1, explanation: "Combine is Apple's framework for processing values over time using reactive programming patterns with publishers and subscribers." },
        { id: 3, question: "What is the difference between weak and unowned references?", difficulty: "medium", options: ["A. No difference", "B. weak becomes nil when deallocated, unowned must always have a value", "C. unowned is deprecated", "D. weak is faster"], correctAnswer: 1, explanation: "weak references become nil when the instance is deallocated, while unowned expects the instance to always exist during its lifetime." },
        { id: 4, question: "What is Swift Concurrency (async/await)?", difficulty: "hard", options: ["A. A threading library", "B. Language-level support for asynchronous programming", "C. A parallel processing tool", "D. A testing framework"], correctAnswer: 1, explanation: "Swift Concurrency provides async/await syntax, actors, and structured concurrency for safe, efficient asynchronous code." },
        { id: 5, question: "What are property wrappers in Swift?", difficulty: "hard", options: ["A. UI decorators", "B. Custom attributes that add behavior to properties", "C. Database fields", "D. Testing annotations"], correctAnswer: 1, explanation: "Property wrappers define reusable logic for property access, like @State in SwiftUI or @Published in Combine." }
      ]
    ],
    Kotlin: [
      // Set 1
      [
        { id: 1, question: "What is Kotlin?", difficulty: "easy", options: ["A. A web framework", "B. A modern programming language for JVM, Android, and multiplatform", "C. A database", "D. A testing tool"], correctAnswer: 1, explanation: "Kotlin is a modern, concise, and safe programming language that runs on the JVM and is the preferred language for Android development." },
        { id: 2, question: "What is null safety in Kotlin?", difficulty: "easy", options: ["A. Security feature", "B. Type system feature that eliminates null pointer exceptions", "C. A null database", "D. Error handling"], correctAnswer: 1, explanation: "Kotlin's type system distinguishes nullable and non-nullable types, preventing null pointer exceptions at compile time." },
        { id: 3, question: "What is the difference between val and var in Kotlin?", difficulty: "easy", options: ["A. No difference", "B. val is read-only, var is mutable", "C. var is deprecated", "D. val is only for numbers"], correctAnswer: 1, explanation: "val declares read-only (immutable) references, while var declares mutable references that can be reassigned." },
        { id: 4, question: "What are data classes in Kotlin?", difficulty: "medium", options: ["A. Database models", "B. Classes that automatically generate equals, hashCode, toString, copy", "C. Abstract classes", "D. Sealed classes"], correctAnswer: 1, explanation: "Data classes automatically generate useful methods like equals(), hashCode(), toString(), and copy() based on properties." },
        { id: 5, question: "What is a coroutine in Kotlin?", difficulty: "hard", options: ["A. A design pattern", "B. A lightweight thread for asynchronous programming", "C. A data structure", "D. A testing utility"], correctAnswer: 1, explanation: "Coroutines are lightweight threads that allow writing asynchronous, non-blocking code in a sequential style." }
      ],
      // Set 2
      [
        { id: 1, question: "How do you declare a nullable type in Kotlin?", difficulty: "easy", options: ["A. nullable String", "B. String?", "C. String!", "D. @Nullable String"], correctAnswer: 1, explanation: "Adding ? after a type makes it nullable: String? can hold either a String or null." },
        { id: 2, question: "What is Jetpack Compose?", difficulty: "medium", options: ["A. A music app", "B. Android's modern toolkit for building native UI declaratively", "C. A database", "D. A testing framework"], correctAnswer: 1, explanation: "Jetpack Compose is Android's modern toolkit for building native UI using a declarative Kotlin-based approach." },
        { id: 3, question: "What is the Elvis operator (?:) in Kotlin?", difficulty: "medium", options: ["A. A music reference", "B. Returns the left value if not null, otherwise the right value", "C. A comparison operator", "D. An assignment operator"], correctAnswer: 1, explanation: "The Elvis operator (?:) returns the left expression if it's not null, otherwise returns the right expression: a ?: defaultValue." },
        { id: 4, question: "What are sealed classes in Kotlin?", difficulty: "hard", options: ["A. Encrypted classes", "B. Classes with restricted hierarchy known at compile time", "C. Final classes", "D. Abstract classes"], correctAnswer: 1, explanation: "Sealed classes restrict inheritance to a known set of subclasses, enabling exhaustive when expressions." },
        { id: 5, question: "What is Kotlin Flow?", difficulty: "hard", options: ["A. A control flow statement", "B. A cold asynchronous data stream built on coroutines", "C. A navigation library", "D. A layout system"], correctAnswer: 1, explanation: "Flow is a type that can emit multiple values sequentially, built on coroutines for handling asynchronous data streams." }
      ],
      // Set 3
      [
        { id: 1, question: "What is the safe call operator (?.) in Kotlin?", difficulty: "easy", options: ["A. A security feature", "B. Returns null if the receiver is null, otherwise calls the method", "C. An error handler", "D. A type checker"], correctAnswer: 1, explanation: "The safe call operator (?.) only calls the method or accesses the property if the receiver is not null, otherwise returns null." },
        { id: 2, question: "What are extension functions in Kotlin?", difficulty: "medium", options: ["A. Longer functions", "B. Functions that add new functionality to existing classes without inheritance", "C. Abstract functions", "D. Deprecated functions"], correctAnswer: 1, explanation: "Extension functions allow adding new functions to existing classes without modifying them or using inheritance." },
        { id: 3, question: "What is the difference between lazy and lateinit in Kotlin?", difficulty: "medium", options: ["A. No difference", "B. lazy is for val with computed initialization, lateinit is for var without initial value", "C. lateinit is deprecated", "D. lazy is faster"], correctAnswer: 1, explanation: "lazy initializes val properties on first access with a lambda; lateinit allows var to be initialized later without initial value." },
        { id: 4, question: "What is Kotlin Multiplatform?", difficulty: "hard", options: ["A. Running on multiple devices", "B. Sharing code between platforms while writing native platform-specific code", "C. A UI framework", "D. A testing tool"], correctAnswer: 1, explanation: "Kotlin Multiplatform allows sharing business logic across iOS, Android, web, and desktop while using platform-specific APIs." },
        { id: 5, question: "What is inline function in Kotlin?", difficulty: "hard", options: ["A. Single-line functions", "B. Functions whose bytecode is inserted at call sites to avoid lambda overhead", "C. Anonymous functions", "D. Recursive functions"], correctAnswer: 1, explanation: "Inline functions have their bytecode copied to call sites, eliminating the overhead of function calls and lambda object creation." }
      ]
    ]
  },

  // ==================== DATA SCIENCE ====================
  DataScience: {
    Python: [
      // Set 1
      [
        { id: 1, question: "Which library is primarily used for numerical computing in Python?", difficulty: "easy", options: ["A. Pandas", "B. NumPy", "C. Matplotlib", "D. Scikit-learn"], correctAnswer: 1, explanation: "NumPy provides support for large, multi-dimensional arrays and matrices, along with mathematical functions." },
        { id: 2, question: "What is Pandas used for in data science?", difficulty: "easy", options: ["A. Visualization", "B. Data manipulation and analysis with DataFrames", "C. Machine learning", "D. Web scraping"], correctAnswer: 1, explanation: "Pandas provides data structures like DataFrames for efficient data manipulation and analysis." },
        { id: 3, question: "What is the purpose of train_test_split in scikit-learn?", difficulty: "medium", options: ["A. Training the model", "B. Splitting data into training and testing sets", "C. Cross-validation", "D. Feature selection"], correctAnswer: 1, explanation: "train_test_split divides data into training and testing subsets to evaluate model performance on unseen data." },
        { id: 4, question: "What is overfitting in machine learning?", difficulty: "medium", options: ["A. Model is too simple", "B. Model performs well on training data but poorly on new data", "C. Training takes too long", "D. Model uses too much memory"], correctAnswer: 1, explanation: "Overfitting occurs when a model learns training data too well, including noise, and fails to generalize to new data." },
        { id: 5, question: "What is gradient descent?", difficulty: "hard", options: ["A. A data visualization technique", "B. An optimization algorithm for minimizing loss functions", "C. A data cleaning method", "D. A feature selection technique"], correctAnswer: 1, explanation: "Gradient descent iteratively adjusts parameters to minimize the loss function by moving in the direction of steepest descent." }
      ],
      // Set 2
      [
        { id: 1, question: "What does df.head() return in Pandas?", difficulty: "easy", options: ["A. Column names", "B. The first 5 rows of the DataFrame", "C. Data types", "D. Summary statistics"], correctAnswer: 1, explanation: "head() returns the first n rows (default 5) of a DataFrame, useful for quick data inspection." },
        { id: 2, question: "What is feature engineering?", difficulty: "medium", options: ["A. Building software", "B. Creating or transforming variables to improve model performance", "C. Testing features", "D. Deploying models"], correctAnswer: 1, explanation: "Feature engineering involves creating, transforming, or selecting input variables to improve machine learning model performance." },
        { id: 3, question: "What is cross-validation?", difficulty: "medium", options: ["A. Validating across teams", "B. A technique to assess model performance using different data splits", "C. Cross-checking data", "D. Validation documentation"], correctAnswer: 1, explanation: "Cross-validation trains and tests models on different data subsets, providing robust performance estimates." },
        { id: 4, question: "What is the bias-variance tradeoff?", difficulty: "hard", options: ["A. A negotiation strategy", "B. The tradeoff between model simplicity and complexity affecting errors", "C. A data balancing technique", "D. A hyperparameter"], correctAnswer: 1, explanation: "Bias-variance tradeoff is the balance between underfitting (high bias) and overfitting (high variance) in model complexity." },
        { id: 5, question: "What is regularization in machine learning?", difficulty: "hard", options: ["A. Making data regular", "B. Techniques that prevent overfitting by penalizing complex models", "C. Data normalization", "D. Scheduled training"], correctAnswer: 1, explanation: "Regularization adds a penalty term to the loss function, discouraging complex models and preventing overfitting." }
      ],
      // Set 3
      [
        { id: 1, question: "What is the purpose of df.describe() in Pandas?", difficulty: "easy", options: ["A. Describe the DataFrame structure", "B. Generate descriptive statistics of numerical columns", "C. Add descriptions", "D. Print column names"], correctAnswer: 1, explanation: "describe() generates descriptive statistics including count, mean, std, min, max, and quartiles for numerical columns." },
        { id: 2, question: "What is a confusion matrix?", difficulty: "medium", options: ["A. A matrix that causes confusion", "B. A table showing prediction results vs actual values for classification", "C. A correlation matrix", "D. A feature matrix"], correctAnswer: 1, explanation: "A confusion matrix shows true positives, true negatives, false positives, and false negatives for classification evaluation." },
        { id: 3, question: "What is PCA (Principal Component Analysis)?", difficulty: "medium", options: ["A. A classification algorithm", "B. A dimensionality reduction technique", "C. A clustering method", "D. A neural network"], correctAnswer: 1, explanation: "PCA reduces data dimensionality by finding principal components that capture maximum variance in the data." },
        { id: 4, question: "What is ensemble learning?", difficulty: "hard", options: ["A. Learning in groups", "B. Combining multiple models to improve predictions", "C. Sequential learning", "D. Transfer learning"], correctAnswer: 1, explanation: "Ensemble learning combines predictions from multiple models (like Random Forest or Gradient Boosting) for better performance." },
        { id: 5, question: "What is the difference between bagging and boosting?", difficulty: "hard", options: ["A. No difference", "B. Bagging trains models in parallel, boosting trains sequentially focusing on errors", "C. Boosting is deprecated", "D. Bagging uses neural networks"], correctAnswer: 1, explanation: "Bagging trains independent models in parallel on random subsets; boosting trains sequentially, each model correcting previous errors." }
      ]
    ],
    R: [
      // Set 1
      [
        { id: 1, question: "What is R primarily used for?", difficulty: "easy", options: ["A. Web development", "B. Statistical computing and data analysis", "C. Mobile apps", "D. System programming"], correctAnswer: 1, explanation: "R is a programming language and environment specifically designed for statistical computing and graphics." },
        { id: 2, question: "What is a data frame in R?", difficulty: "easy", options: ["A. A picture frame", "B. A table-like structure for storing data with rows and columns", "C. A graph type", "D. A function"], correctAnswer: 1, explanation: "A data frame is R's primary structure for tabular data, with rows representing observations and columns representing variables." },
        { id: 3, question: "What does the ggplot2 package do?", difficulty: "medium", options: ["A. Data cleaning", "B. Creates elegant data visualizations using grammar of graphics", "C. Machine learning", "D. Web scraping"], correctAnswer: 1, explanation: "ggplot2 is a powerful visualization package implementing the grammar of graphics for creating complex plots." },
        { id: 4, question: "What is the tidyverse in R?", difficulty: "medium", options: ["A. A clean environment", "B. A collection of R packages for data science workflows", "C. A testing framework", "D. A database"], correctAnswer: 1, explanation: "The tidyverse is a collection of R packages (dplyr, ggplot2, tidyr, etc.) designed for data science with consistent syntax." },
        { id: 5, question: "What is the purpose of the caret package?", difficulty: "hard", options: ["A. Text editing", "B. A unified interface for training machine learning models", "C. Data import", "D. Visualization"], correctAnswer: 1, explanation: "caret (Classification And REgression Training) provides a unified interface for training, tuning, and evaluating ML models." }
      ],
      // Set 2
      [
        { id: 1, question: "How do you install a package in R?", difficulty: "easy", options: ["A. download.package()", "B. install.packages()", "C. get.package()", "D. import package"], correctAnswer: 1, explanation: "install.packages('package_name') downloads and installs packages from CRAN." },
        { id: 2, question: "What does the dplyr package provide?", difficulty: "medium", options: ["A. Plotting functions", "B. Data manipulation verbs like filter, select, mutate", "C. Statistical tests", "D. File I/O"], correctAnswer: 1, explanation: "dplyr provides a grammar of data manipulation with verbs like filter(), select(), mutate(), summarize(), and arrange()." },
        { id: 3, question: "What is the pipe operator (%>%) in R?", difficulty: "medium", options: ["A. A math operator", "B. Chains operations by passing output as input to the next function", "C. A comparison operator", "D. A loop construct"], correctAnswer: 1, explanation: "The pipe operator passes the left-hand side as the first argument to the right-hand function, enabling readable code chains." },
        { id: 4, question: "What is Shiny in R?", difficulty: "hard", options: ["A. A visualization style", "B. A framework for building interactive web applications", "C. A data cleaning tool", "D. A package manager"], correctAnswer: 1, explanation: "Shiny is an R package that makes it easy to build interactive web applications directly from R without web development knowledge." },
        { id: 5, question: "What is the difference between lapply and sapply?", difficulty: "hard", options: ["A. No difference", "B. lapply returns a list, sapply simplifies to vector/matrix if possible", "C. sapply is deprecated", "D. lapply is faster"], correctAnswer: 1, explanation: "lapply always returns a list; sapply attempts to simplify the result to a vector or matrix when possible." }
      ],
      // Set 3
      [
        { id: 1, question: "What is a vector in R?", difficulty: "easy", options: ["A. A direction", "B. A basic data structure containing elements of the same type", "C. A graph type", "D. A function"], correctAnswer: 1, explanation: "A vector is R's basic data structure, containing elements of the same type (numeric, character, logical, etc.)." },
        { id: 2, question: "What does the gather() function do in tidyr?", difficulty: "medium", options: ["A. Collects data", "B. Converts wide data to long format", "C. Groups data", "D. Filters data"], correctAnswer: 1, explanation: "gather() (now pivot_longer()) converts data from wide to long format by collapsing columns into key-value pairs." },
        { id: 3, question: "What is the purpose of the lm() function?", difficulty: "medium", options: ["A. Loading models", "B. Fitting linear regression models", "C. Listing modules", "D. Log management"], correctAnswer: 1, explanation: "lm() fits linear regression models, estimating the relationship between dependent and independent variables." },
        { id: 4, question: "What is RMarkdown?", difficulty: "hard", options: ["A. A markup language", "B. A framework for combining R code, output, and narrative in documents", "C. A text editor", "D. A package manager"], correctAnswer: 1, explanation: "RMarkdown enables creating dynamic documents combining R code, results, and formatted text in HTML, PDF, or Word output." },
        { id: 5, question: "What are factors in R?", difficulty: "hard", options: ["A. Mathematical factors", "B. Vectors representing categorical data with defined levels", "C. Function parameters", "D. Multiplication"], correctAnswer: 1, explanation: "Factors are vectors that represent categorical data, storing both values and the allowed levels for statistical modeling." }
      ]
    ]
  },

  // ==================== CYBERSECURITY ====================
  CyberSecurity: {
    Python: [
      // Set 1
      [
        { id: 1, question: "What is the purpose of the hashlib module in Python?", difficulty: "easy", options: ["A. Hash table creation", "B. Implementing secure hash algorithms for cryptography", "C. Password storage", "D. Data compression"], correctAnswer: 1, explanation: "hashlib provides secure hash algorithms like SHA-256, MD5 for creating message digests and verifying data integrity." },
        { id: 2, question: "What is SQL injection?", difficulty: "easy", options: ["A. Database injection", "B. A code injection attack that manipulates SQL queries", "C. A SQL function", "D. Database optimization"], correctAnswer: 1, explanation: "SQL injection attacks insert malicious SQL code into queries through user input, potentially accessing or modifying databases." },
        { id: 3, question: "What Python library is commonly used for network packet manipulation?", difficulty: "medium", options: ["A. requests", "B. Scapy", "C. urllib", "D. http"], correctAnswer: 1, explanation: "Scapy is a powerful Python library for packet manipulation, network scanning, and protocol analysis." },
        { id: 4, question: "What is the purpose of parameterized queries?", difficulty: "medium", options: ["A. Faster queries", "B. Preventing SQL injection by separating SQL code from data", "C. Query optimization", "D. Database indexing"], correctAnswer: 1, explanation: "Parameterized queries treat user input as data, not code, preventing SQL injection attacks." },
        { id: 5, question: "What is a buffer overflow vulnerability?", difficulty: "hard", options: ["A. Too much data in memory", "B. Writing beyond buffer boundaries to execute arbitrary code", "C. Memory leak", "D. Slow performance"], correctAnswer: 1, explanation: "Buffer overflow occurs when a program writes data beyond buffer boundaries, potentially overwriting return addresses to execute malicious code." }
      ],
      // Set 2
      [
        { id: 1, question: "What is XSS (Cross-Site Scripting)?", difficulty: "easy", options: ["A. A scripting language", "B. An attack that injects malicious scripts into web pages", "C. A CSS feature", "D. Cross-browser testing"], correctAnswer: 1, explanation: "XSS attacks inject malicious scripts into websites, executing in victims' browsers to steal data or perform actions." },
        { id: 2, question: "What Python library is used for cryptographic operations?", difficulty: "medium", options: ["A. crypto", "B. cryptography", "C. encrypt", "D. secure"], correctAnswer: 1, explanation: "The cryptography library provides both high-level recipes and low-level interfaces for encryption, signing, and key derivation." },
        { id: 3, question: "What is CSRF (Cross-Site Request Forgery)?", difficulty: "medium", options: ["A. A form validation", "B. An attack that tricks users into performing unintended actions", "C. A caching technique", "D. A request method"], correctAnswer: 1, explanation: "CSRF attacks trick authenticated users into submitting requests they didn't intend, exploiting the site's trust in the user." },
        { id: 4, question: "What is the purpose of input validation in security?", difficulty: "hard", options: ["A. UI/UX improvement", "B. Ensuring user input meets expected format to prevent attacks", "C. Database optimization", "D. Performance tuning"], correctAnswer: 1, explanation: "Input validation ensures data conforms to expected formats, preventing injection attacks and malformed data processing." },
        { id: 5, question: "What is a timing attack?", difficulty: "hard", options: ["A. Attack based on time", "B. Exploiting time variations in operations to extract secrets", "C. DoS attack", "D. Scheduled attack"], correctAnswer: 1, explanation: "Timing attacks analyze time variations in cryptographic operations to deduce secret information like encryption keys." }
      ],
      // Set 3
      [
        { id: 1, question: "What is encryption?", difficulty: "easy", options: ["A. Data compression", "B. Converting data into a secure format using a key", "C. Password hashing", "D. Data backup"], correctAnswer: 1, explanation: "Encryption transforms readable data (plaintext) into unreadable format (ciphertext) using an algorithm and key." },
        { id: 2, question: "What is the difference between symmetric and asymmetric encryption?", difficulty: "medium", options: ["A. No difference", "B. Symmetric uses one key, asymmetric uses public/private key pair", "C. Asymmetric is faster", "D. Symmetric is deprecated"], correctAnswer: 1, explanation: "Symmetric encryption uses the same key for encryption/decryption; asymmetric uses different public and private keys." },
        { id: 3, question: "What is a man-in-the-middle (MITM) attack?", difficulty: "medium", options: ["A. Physical attack", "B. An attacker secretly intercepts and possibly alters communication", "C. Social engineering", "D. Brute force attack"], correctAnswer: 1, explanation: "MITM attacks involve an attacker secretly intercepting and potentially modifying communication between two parties." },
        { id: 4, question: "What is certificate pinning?", difficulty: "hard", options: ["A. Pinning certificates to walls", "B. Hardcoding expected certificates to prevent MITM attacks", "C. Certificate renewal", "D. SSL configuration"], correctAnswer: 1, explanation: "Certificate pinning associates a host with its expected certificate, preventing attackers from using fraudulent certificates." },
        { id: 5, question: "What is a zero-day vulnerability?", difficulty: "hard", options: ["A. A bug found on day zero", "B. An unknown vulnerability being exploited before a patch exists", "C. A testing term", "D. A backup term"], correctAnswer: 1, explanation: "A zero-day is a vulnerability unknown to those responsible for patching, giving them zero days to fix before exploitation." }
      ]
    ]
  },

  // ==================== DEVOPS ====================
  DevOps: {
    Docker: [
      // Set 1
      [
        { id: 1, question: "What is Docker?", difficulty: "easy", options: ["A. A virtual machine", "B. A platform for building and running containerized applications", "C. A programming language", "D. A database"], correctAnswer: 1, explanation: "Docker is a platform that enables developers to build, ship, and run applications in isolated containers." },
        { id: 2, question: "What is the difference between an image and a container?", difficulty: "easy", options: ["A. No difference", "B. An image is a template, a container is a running instance", "C. Container is the template", "D. Images are deprecated"], correctAnswer: 1, explanation: "An image is a read-only template; a container is a running instance of an image with its own writable layer." },
        { id: 3, question: "What is a Dockerfile?", difficulty: "medium", options: ["A. A configuration file", "B. A text file with instructions for building Docker images", "C. A Docker container", "D. A log file"], correctAnswer: 1, explanation: "A Dockerfile contains step-by-step instructions for Docker to build an image, including base image, commands, and configuration." },
        { id: 4, question: "What is Docker Compose used for?", difficulty: "medium", options: ["A. Writing Dockerfiles", "B. Defining and running multi-container Docker applications", "C. Docker documentation", "D. Container monitoring"], correctAnswer: 1, explanation: "Docker Compose uses a YAML file to define services, networks, and volumes for multi-container applications." },
        { id: 5, question: "What is the purpose of Docker volumes?", difficulty: "hard", options: ["A. Volume control", "B. Persisting data outside containers and sharing between containers", "C. Sound management", "D. Memory allocation"], correctAnswer: 1, explanation: "Volumes persist data beyond container lifecycle and enable data sharing between containers." }
      ],
      // Set 2
      [
        { id: 1, question: "What command runs a Docker container?", difficulty: "easy", options: ["A. docker start", "B. docker run", "C. docker execute", "D. docker launch"], correctAnswer: 1, explanation: "docker run creates and starts a new container from an image, combining create and start commands." },
        { id: 2, question: "What is a Docker registry?", difficulty: "medium", options: ["A. A registration form", "B. A storage and distribution system for Docker images", "C. A container log", "D. A configuration file"], correctAnswer: 1, explanation: "A registry stores Docker images; Docker Hub is the default public registry, and you can run private registries." },
        { id: 3, question: "What does the EXPOSE instruction do in a Dockerfile?", difficulty: "medium", options: ["A. Opens ports automatically", "B. Documents which ports the container listens on", "C. Exposes files", "D. Security exposure"], correctAnswer: 1, explanation: "EXPOSE documents intended ports but doesn't actually publish them; -p flag is needed for port mapping." },
        { id: 4, question: "What is a multi-stage build in Docker?", difficulty: "hard", options: ["A. Building multiple images", "B. Using multiple FROM statements to create smaller final images", "C. Staged deployment", "D. Multiple containers"], correctAnswer: 1, explanation: "Multi-stage builds use multiple FROM statements to create intermediate images, copying only needed artifacts to the final image." },
        { id: 5, question: "What is the difference between CMD and ENTRYPOINT?", difficulty: "hard", options: ["A. No difference", "B. ENTRYPOINT sets the executable, CMD provides default arguments", "C. CMD is deprecated", "D. ENTRYPOINT is for networking"], correctAnswer: 1, explanation: "ENTRYPOINT configures the container's main command; CMD provides default arguments that can be overridden at runtime." }
      ],
      // Set 3
      [
        { id: 1, question: "How do you list running Docker containers?", difficulty: "easy", options: ["A. docker list", "B. docker ps", "C. docker containers", "D. docker show"], correctAnswer: 1, explanation: "docker ps lists running containers; add -a to see all containers including stopped ones." },
        { id: 2, question: "What is Docker networking?", difficulty: "medium", options: ["A. Internet connection", "B. System for containers to communicate with each other and external networks", "C. Network cables", "D. WiFi settings"], correctAnswer: 1, explanation: "Docker networking enables communication between containers and with external networks through different network drivers." },
        { id: 3, question: "What is the purpose of .dockerignore?", difficulty: "medium", options: ["A. Ignoring Docker", "B. Excluding files from the build context to speed up builds", "C. Security settings", "D. Container configuration"], correctAnswer: 1, explanation: ".dockerignore specifies files to exclude from the build context, reducing build time and image size." },
        { id: 4, question: "What are Docker health checks?", difficulty: "hard", options: ["A. Container diagnostics", "B. Instructions to verify if a container is working correctly", "C. Network testing", "D. Memory checks"], correctAnswer: 1, explanation: "Health checks run commands inside containers to verify application health, affecting orchestration decisions." },
        { id: 5, question: "What is Docker Swarm?", difficulty: "hard", options: ["A. A bug swarm", "B. Docker's native clustering and orchestration solution", "C. Multiple containers", "D. A monitoring tool"], correctAnswer: 1, explanation: "Docker Swarm is Docker's built-in orchestration tool for managing clusters of Docker nodes and services." }
      ]
    ],
    Kubernetes: [
      // Set 1
      [
        { id: 1, question: "What is Kubernetes?", difficulty: "easy", options: ["A. A container runtime", "B. An open-source container orchestration platform", "C. A programming language", "D. A database"], correctAnswer: 1, explanation: "Kubernetes (K8s) is an open-source platform for automating deployment, scaling, and management of containerized applications." },
        { id: 2, question: "What is a Pod in Kubernetes?", difficulty: "easy", options: ["A. A container", "B. The smallest deployable unit containing one or more containers", "C. A server", "D. A network"], correctAnswer: 1, explanation: "A Pod is the smallest deployable unit in Kubernetes, representing one or more containers that share network and storage." },
        { id: 3, question: "What is a Kubernetes Deployment?", difficulty: "medium", options: ["A. Deploying apps", "B. A resource that manages ReplicaSets and provides declarative updates", "C. A container", "D. A network policy"], correctAnswer: 1, explanation: "Deployments manage ReplicaSets and provide declarative updates for Pods, handling rollouts and rollbacks." },
        { id: 4, question: "What is a Kubernetes Service?", difficulty: "medium", options: ["A. Customer service", "B. An abstraction that exposes Pods as a network service", "C. A container type", "D. A storage type"], correctAnswer: 1, explanation: "A Service provides a stable network endpoint for accessing a set of Pods, enabling service discovery and load balancing." },
        { id: 5, question: "What is a Kubernetes Namespace?", difficulty: "hard", options: ["A. A naming convention", "B. A virtual cluster for resource isolation", "C. A DNS feature", "D. A storage type"], correctAnswer: 1, explanation: "Namespaces provide virtual clusters within a physical cluster for resource isolation and multi-tenancy." }
      ],
      // Set 2
      [
        { id: 1, question: "What tool is used to interact with Kubernetes?", difficulty: "easy", options: ["A. kubeadm", "B. kubectl", "C. kubelet", "D. kube-proxy"], correctAnswer: 1, explanation: "kubectl is the command-line tool for communicating with the Kubernetes cluster's control plane." },
        { id: 2, question: "What is a ReplicaSet?", difficulty: "medium", options: ["A. A copy of data", "B. Ensures a specified number of Pod replicas are running", "C. A backup system", "D. A storage type"], correctAnswer: 1, explanation: "A ReplicaSet maintains a stable set of replica Pods running at any given time, ensuring availability." },
        { id: 3, question: "What is the purpose of ConfigMaps?", difficulty: "medium", options: ["A. Configuration management", "B. Storing non-sensitive configuration data separately from containers", "C. Network configuration", "D. Storage mapping"], correctAnswer: 1, explanation: "ConfigMaps decouple configuration from container images, storing non-sensitive configuration as key-value pairs." },
        { id: 4, question: "What is a Kubernetes Ingress?", difficulty: "hard", options: ["A. Entry point", "B. Manages external access to services with HTTP/HTTPS routing", "C. A container type", "D. A storage type"], correctAnswer: 1, explanation: "Ingress manages external access to cluster services, providing load balancing, SSL termination, and name-based routing." },
        { id: 5, question: "What is the control plane in Kubernetes?", difficulty: "hard", options: ["A. A flight simulator", "B. Components that make global decisions about the cluster", "C. A UI dashboard", "D. A monitoring tool"], correctAnswer: 1, explanation: "The control plane includes the API server, etcd, scheduler, and controller manager, making cluster-wide decisions." }
      ],
      // Set 3
      [
        { id: 1, question: "How do you scale a Deployment in Kubernetes?", difficulty: "easy", options: ["A. kubectl grow", "B. kubectl scale deployment --replicas=N", "C. kubectl expand", "D. kubectl increase"], correctAnswer: 1, explanation: "kubectl scale deployment name --replicas=N changes the number of Pod replicas in a Deployment." },
        { id: 2, question: "What is a StatefulSet?", difficulty: "medium", options: ["A. A set of states", "B. Manages stateful applications with stable identities and persistent storage", "C. A status indicator", "D. A configuration set"], correctAnswer: 1, explanation: "StatefulSets manage stateful applications, providing stable network IDs, persistent storage, and ordered deployment." },
        { id: 3, question: "What are Kubernetes Secrets?", difficulty: "medium", options: ["A. Hidden features", "B. Objects for storing sensitive data like passwords and tokens", "C. Private namespaces", "D. Encrypted volumes"], correctAnswer: 1, explanation: "Secrets store sensitive information like passwords, tokens, and keys, keeping them out of Pod specs and images." },
        { id: 4, question: "What is a DaemonSet?", difficulty: "hard", options: ["A. A daemon process", "B. Ensures a Pod runs on all or selected nodes", "C. A background service", "D. A system process"], correctAnswer: 1, explanation: "A DaemonSet ensures a copy of a Pod runs on all (or selected) nodes, useful for node-level services like logging." },
        { id: 5, question: "What is Helm in Kubernetes?", difficulty: "hard", options: ["A. A ship's wheel", "B. A package manager for Kubernetes applications", "C. A monitoring tool", "D. A security scanner"], correctAnswer: 1, explanation: "Helm is the package manager for Kubernetes, using charts to define, install, and upgrade applications." }
      ]
    ]
  },

  // ==================== MACHINE LEARNING ====================
  MachineLearning: {
    Python: [
      // Set 1
      [
        { id: 1, question: "What is a neural network?", difficulty: "easy", options: ["A. A computer network", "B. A computational model inspired by the human brain", "C. A social network", "D. A database structure"], correctAnswer: 1, explanation: "Neural networks are computing systems inspired by biological neural networks, consisting of interconnected nodes." },
        { id: 2, question: "What library is commonly used for deep learning in Python?", difficulty: "easy", options: ["A. NumPy", "B. TensorFlow/PyTorch", "C. Matplotlib", "D. Pandas"], correctAnswer: 1, explanation: "TensorFlow and PyTorch are the two most popular deep learning frameworks in Python." },
        { id: 3, question: "What is supervised learning?", difficulty: "medium", options: ["A. Learning with a teacher present", "B. Training models on labeled data to predict outputs", "C. Online learning", "D. Self-study"], correctAnswer: 1, explanation: "Supervised learning trains models on labeled datasets where the correct output is known for each input." },
        { id: 4, question: "What is a loss function?", difficulty: "medium", options: ["A. A function that loses data", "B. A function measuring prediction errors to guide training", "C. Memory loss function", "D. A debugging function"], correctAnswer: 1, explanation: "Loss functions quantify how wrong model predictions are, guiding optimization during training." },
        { id: 5, question: "What is backpropagation?", difficulty: "hard", options: ["A. Reversing data", "B. Algorithm for calculating gradients to update neural network weights", "C. Data backup", "D. Backward compatibility"], correctAnswer: 1, explanation: "Backpropagation calculates gradients of the loss function with respect to weights, enabling gradient descent optimization." }
      ],
      // Set 2
      [
        { id: 1, question: "What is a feature in machine learning?", difficulty: "easy", options: ["A. A product feature", "B. An individual measurable property used as input", "C. A model characteristic", "D. A software feature"], correctAnswer: 1, explanation: "A feature is an individual measurable property or characteristic of data used as input for a model." },
        { id: 2, question: "What is the difference between regression and classification?", difficulty: "medium", options: ["A. No difference", "B. Regression predicts continuous values, classification predicts categories", "C. Classification is older", "D. Regression is faster"], correctAnswer: 1, explanation: "Regression predicts continuous numerical values; classification predicts discrete categories or classes." },
        { id: 3, question: "What is dropout in neural networks?", difficulty: "medium", options: ["A. Quitting training", "B. Randomly deactivating neurons during training to prevent overfitting", "C. Removing layers", "D. Reducing data"], correctAnswer: 1, explanation: "Dropout randomly sets neuron outputs to zero during training, preventing overfitting by reducing co-adaptation." },
        { id: 4, question: "What is transfer learning?", difficulty: "hard", options: ["A. Moving models between computers", "B. Using pre-trained models as starting points for new tasks", "C. Data transfer", "D. Knowledge sharing"], correctAnswer: 1, explanation: "Transfer learning uses knowledge from pre-trained models to accelerate training on new, related tasks." },
        { id: 5, question: "What is the vanishing gradient problem?", difficulty: "hard", options: ["A. Gradients disappearing from memory", "B. Gradients becoming too small to effectively update weights", "C. Visual gradient issues", "D. Color fading"], correctAnswer: 1, explanation: "Vanishing gradients occur when gradients become extremely small during backpropagation, preventing effective learning in deep networks." }
      ],
      // Set 3
      [
        { id: 1, question: "What is an epoch in machine learning?", difficulty: "easy", options: ["A. A time period", "B. One complete pass through the entire training dataset", "C. A model version", "D. A milestone"], correctAnswer: 1, explanation: "An epoch is one complete pass through the entire training dataset during the training process." },
        { id: 2, question: "What is a convolutional neural network (CNN)?", difficulty: "medium", options: ["A. A conversation AI", "B. A neural network specialized for processing grid-like data (images)", "C. A computing network", "D. A classification network"], correctAnswer: 1, explanation: "CNNs are specialized neural networks for processing data with grid-like topology, primarily images." },
        { id: 3, question: "What is a recurrent neural network (RNN)?", difficulty: "medium", options: ["A. A repeating network", "B. A neural network designed for sequential data with memory", "C. A recursive algorithm", "D. A refreshing network"], correctAnswer: 1, explanation: "RNNs are designed for sequential data, maintaining hidden states that capture information from previous inputs." },
        { id: 4, question: "What is attention mechanism in deep learning?", difficulty: "hard", options: ["A. Focusing on training", "B. A mechanism allowing models to focus on relevant parts of input", "C. User attention tracking", "D. Alert system"], correctAnswer: 1, explanation: "Attention mechanisms allow models to dynamically focus on relevant parts of the input when generating outputs." },
        { id: 5, question: "What is a transformer architecture?", difficulty: "hard", options: ["A. Electrical transformer", "B. A model architecture based on self-attention for sequence tasks", "C. Data transformer", "D. Format converter"], correctAnswer: 1, explanation: "Transformers use self-attention mechanisms to process sequences in parallel, powering models like GPT and BERT." }
      ]
    ],
    TensorFlow: [
      // Set 1
      [
        { id: 1, question: "What is TensorFlow?", difficulty: "easy", options: ["A. A data visualization tool", "B. An open-source machine learning framework by Google", "C. A database", "D. A testing framework"], correctAnswer: 1, explanation: "TensorFlow is Google's open-source platform for building and deploying machine learning models." },
        { id: 2, question: "What is a tensor in TensorFlow?", difficulty: "easy", options: ["A. A stress measurement", "B. A multi-dimensional array used for data representation", "C. A neural network", "D. A training algorithm"], correctAnswer: 1, explanation: "A tensor is a multi-dimensional array, the primary data structure in TensorFlow for representing data." },
        { id: 3, question: "What is Keras in TensorFlow?", difficulty: "medium", options: ["A. A separate framework", "B. A high-level API for building neural networks", "C. A data preprocessor", "D. A visualization tool"], correctAnswer: 1, explanation: "Keras is TensorFlow's high-level API for building and training neural networks with user-friendly abstractions." },
        { id: 4, question: "What is TensorBoard used for?", difficulty: "medium", options: ["A. Creating boards", "B. Visualizing model training metrics and graphs", "C. Board games", "D. Hardware management"], correctAnswer: 1, explanation: "TensorBoard is TensorFlow's visualization toolkit for tracking metrics, visualizing graphs, and debugging models." },
        { id: 5, question: "What is eager execution in TensorFlow?", difficulty: "hard", options: ["A. Fast execution", "B. Operations execute immediately without building graphs first", "C. Eager learning", "D. Priority execution"], correctAnswer: 1, explanation: "Eager execution evaluates operations immediately, making debugging easier and enabling dynamic models." }
      ],
      // Set 2
      [
        { id: 1, question: "What does tf.keras.Sequential do?", difficulty: "easy", options: ["A. Creates sequences", "B. Creates a linear stack of layers for neural networks", "C. Sequence alignment", "D. Data sequencing"], correctAnswer: 1, explanation: "Sequential creates a linear stack of layers, the simplest way to build neural networks in Keras." },
        { id: 2, question: "What is a callback in TensorFlow?", difficulty: "medium", options: ["A. A phone callback", "B. Functions called at stages during training for monitoring/actions", "C. Error handling", "D. Data loading"], correctAnswer: 1, explanation: "Callbacks are functions called at various stages of training for logging, checkpointing, early stopping, etc." },
        { id: 3, question: "What is model.compile() used for?", difficulty: "medium", options: ["A. Compiling Python code", "B. Configuring the model with optimizer, loss, and metrics", "C. Compressing the model", "D. Code optimization"], correctAnswer: 1, explanation: "compile() configures the model for training by specifying optimizer, loss function, and evaluation metrics." },
        { id: 4, question: "What is TensorFlow Lite?", difficulty: "hard", options: ["A. A lightweight version", "B. TensorFlow for mobile and embedded devices", "C. A simplified API", "D. A testing tool"], correctAnswer: 1, explanation: "TensorFlow Lite is optimized for running ML models on mobile, embedded, and IoT devices with low latency." },
        { id: 5, question: "What is a custom training loop in TensorFlow?", difficulty: "hard", options: ["A. Repeated training", "B. Manually controlling training steps for full flexibility", "C. Loop optimization", "D. Training schedule"], correctAnswer: 1, explanation: "Custom training loops provide full control over training by manually handling forward passes, gradients, and updates." }
      ],
      // Set 3
      [
        { id: 1, question: "What optimizer is commonly used in TensorFlow?", difficulty: "easy", options: ["A. Optimizer Pro", "B. Adam optimizer", "C. Fast optimizer", "D. Simple optimizer"], correctAnswer: 1, explanation: "Adam (Adaptive Moment Estimation) is widely used for its efficiency and good performance on various problems." },
        { id: 2, question: "What is data augmentation in TensorFlow?", difficulty: "medium", options: ["A. Adding more data", "B. Artificially increasing training data through transformations", "C. Data enhancement", "D. Data backup"], correctAnswer: 1, explanation: "Data augmentation creates new training examples by applying transformations like rotations, flips, and zooms." },
        { id: 3, question: "What is tf.data.Dataset?", difficulty: "medium", options: ["A. A database", "B. An API for building efficient input pipelines", "C. Data storage", "D. Dataset download"], correctAnswer: 1, explanation: "tf.data.Dataset provides methods for building efficient, scalable input pipelines for training models." },
        { id: 4, question: "What is model quantization?", difficulty: "hard", options: ["A. Counting models", "B. Reducing model precision to decrease size and increase speed", "C. Model versioning", "D. Quality measurement"], correctAnswer: 1, explanation: "Quantization reduces numerical precision of model weights, decreasing size and increasing inference speed." },
        { id: 5, question: "What is TensorFlow Serving?", difficulty: "hard", options: ["A. Customer service", "B. A system for serving ML models in production", "C. Data serving", "D. API serving"], correctAnswer: 1, explanation: "TensorFlow Serving is a production-grade system for deploying and serving machine learning models." }
      ]
    ]
  },

  // ==================== GAME DEVELOPMENT ====================
  GameDevelopment: {
    Unity: [
      // Set 1
      [
        { id: 1, question: "What programming language does Unity primarily use?", difficulty: "easy", options: ["A. JavaScript", "B. C#", "C. Python", "D. C++"], correctAnswer: 1, explanation: "Unity primarily uses C# for scripting game logic and behavior." },
        { id: 2, question: "What is a GameObject in Unity?", difficulty: "easy", options: ["A. A video game", "B. The fundamental object that represents characters, props, and scenery", "C. A game genre", "D. A script"], correctAnswer: 1, explanation: "GameObjects are the fundamental objects in Unity scenes, serving as containers for components." },
        { id: 3, question: "What is a Component in Unity?", difficulty: "medium", options: ["A. A game part", "B. A modular piece of functionality attached to GameObjects", "C. A texture", "D. A sound file"], correctAnswer: 1, explanation: "Components are modular pieces of functionality (scripts, renderers, colliders) attached to GameObjects." },
        { id: 4, question: "What is the difference between Update() and FixedUpdate()?", difficulty: "medium", options: ["A. No difference", "B. Update is frame-based, FixedUpdate is physics-based at fixed intervals", "C. FixedUpdate is deprecated", "D. Update is slower"], correctAnswer: 1, explanation: "Update() runs every frame; FixedUpdate() runs at fixed intervals for physics calculations." },
        { id: 5, question: "What is Unity's Entity Component System (ECS)?", difficulty: "hard", options: ["A. A database system", "B. A data-oriented design paradigm for high-performance games", "C. An encryption system", "D. A networking system"], correctAnswer: 1, explanation: "ECS is Unity's data-oriented tech stack for high-performance games, separating data from behavior." }
      ],
      // Set 2
      [
        { id: 1, question: "What is a Prefab in Unity?", difficulty: "easy", options: ["A. A preference setting", "B. A reusable GameObject template", "C. A pre-made game", "D. A plugin"], correctAnswer: 1, explanation: "Prefabs are reusable GameObject templates that can be instantiated multiple times in scenes." },
        { id: 2, question: "What is a Rigidbody component used for?", difficulty: "medium", options: ["A. Rigid structures", "B. Enabling physics simulation on a GameObject", "C. Player health", "D. Audio playback"], correctAnswer: 1, explanation: "Rigidbody enables physics simulation, allowing GameObjects to respond to gravity and forces." },
        { id: 3, question: "What is a Collider in Unity?", difficulty: "medium", options: ["A. A collision detector", "B. A component defining the shape for physics interactions", "C. A renderer", "D. A script"], correctAnswer: 1, explanation: "Colliders define the shape used for detecting collisions and triggers in physics simulations." },
        { id: 4, question: "What is Scriptable Objects in Unity?", difficulty: "hard", options: ["A. Editable scripts", "B. Data containers for storing large amounts of shared data", "C. Object scripts", "D. Auto-generated scripts"], correctAnswer: 1, explanation: "Scriptable Objects are data containers that store data independently of game instances, ideal for shared data." },
        { id: 5, question: "What is Unity's DOTS?", difficulty: "hard", options: ["A. Debugging tools", "B. Data-Oriented Technology Stack for performance-critical code", "C. Design patterns", "D. Documentation tools"], correctAnswer: 1, explanation: "DOTS (Data-Oriented Technology Stack) includes ECS, Job System, and Burst Compiler for high-performance games." }
      ],
      // Set 3
      [
        { id: 1, question: "How do you access another GameObject's component?", difficulty: "easy", options: ["A. GameObject.Find()", "B. GetComponent<T>()", "C. FindComponent()", "D. AccessComponent()"], correctAnswer: 1, explanation: "GetComponent<T>() retrieves a component of type T from the same or another GameObject." },
        { id: 2, question: "What is a Coroutine in Unity?", difficulty: "medium", options: ["A. A routine task", "B. A function that can pause execution and resume later", "C. A bug", "D. A loop type"], correctAnswer: 1, explanation: "Coroutines are functions that can suspend execution (yield) and resume on subsequent frames." },
        { id: 3, question: "What is the Canvas component used for?", difficulty: "medium", options: ["A. Drawing pictures", "B. The area where all UI elements should be placed", "C. Game backgrounds", "D. Level design"], correctAnswer: 1, explanation: "Canvas is the component under which all UI elements (Text, Buttons, Images) must be placed." },
        { id: 4, question: "What is object pooling in Unity?", difficulty: "hard", options: ["A. Swimming pools", "B. Reusing objects instead of instantiating/destroying for performance", "C. Object grouping", "D. Memory pools"], correctAnswer: 1, explanation: "Object pooling reuses deactivated objects instead of creating/destroying them, improving performance." },
        { id: 5, question: "What is the Addressable Asset System?", difficulty: "hard", options: ["A. Address management", "B. A system for loading assets asynchronously by address", "C. Networking addresses", "D. Memory addresses"], correctAnswer: 1, explanation: "Addressables provide async loading of assets by address, supporting remote hosting and efficient memory management." }
      ]
    ],
    "Unreal Engine": [
      // Set 1
      [
        { id: 1, question: "What programming language does Unreal Engine use?", difficulty: "easy", options: ["A. C#", "B. C++", "C. Python", "D. JavaScript"], correctAnswer: 1, explanation: "Unreal Engine uses C++ for programming, along with Blueprints visual scripting." },
        { id: 2, question: "What is a Blueprint in Unreal Engine?", difficulty: "easy", options: ["A. A building plan", "B. A visual scripting system for game logic", "C. A texture type", "D. A level design"], correctAnswer: 1, explanation: "Blueprints are Unreal's visual scripting system, allowing game creation without writing code." },
        { id: 3, question: "What is an Actor in Unreal Engine?", difficulty: "medium", options: ["A. A character", "B. Any object that can be placed in a level", "C. A player", "D. An animation"], correctAnswer: 1, explanation: "An Actor is any object that can be placed in a level, serving as the base class for all placeable objects." },
        { id: 4, question: "What is the difference between a Pawn and a Character?", difficulty: "medium", options: ["A. No difference", "B. Character extends Pawn with movement and character-specific features", "C. Pawn is deprecated", "D. Character is for NPCs only"], correctAnswer: 1, explanation: "Character is a Pawn subclass with built-in movement components and character-specific functionality." },
        { id: 5, question: "What is Unreal's Gameplay Ability System?", difficulty: "hard", options: ["A. Cheat codes", "B. A framework for creating abilities, buffs, and attributes", "C. Game settings", "D. AI system"], correctAnswer: 1, explanation: "GAS is a flexible framework for implementing abilities, effects, attributes, and replication in multiplayer games." }
      ],
      // Set 2
      [
        { id: 1, question: "What is a Level in Unreal Engine?", difficulty: "easy", options: ["A. Difficulty setting", "B. A container for game world content, also called a Map", "C. Player rank", "D. A script"], correctAnswer: 1, explanation: "A Level (or Map) is a container for all the content that makes up a game world or environment." },
        { id: 2, question: "What is a UMG widget in Unreal?", difficulty: "medium", options: ["A. A gadget", "B. A UI element created with Unreal Motion Graphics", "C. A weapon", "D. A particle effect"], correctAnswer: 1, explanation: "UMG (Unreal Motion Graphics) widgets are UI elements like buttons, text, and images for creating interfaces." },
        { id: 3, question: "What is the Event Graph in Blueprints?", difficulty: "medium", options: ["A. A chart", "B. Where event-driven logic and gameplay code is created", "C. A timeline", "D. A debugger"], correctAnswer: 1, explanation: "The Event Graph is where you create event-driven logic, responding to gameplay events and implementing behavior." },
        { id: 4, question: "What is Level Streaming in Unreal?", difficulty: "hard", options: ["A. Video streaming", "B. Loading/unloading level portions dynamically for large worlds", "C. Data streaming", "D. Audio streaming"], correctAnswer: 1, explanation: "Level Streaming loads and unloads portions of levels dynamically, enabling large seamless worlds." },
        { id: 5, question: "What is Nanite in Unreal Engine 5?", difficulty: "hard", options: ["A. Small objects", "B. A virtualized geometry system for film-quality assets", "C. Nanotech", "D. A particle system"], correctAnswer: 1, explanation: "Nanite is UE5's virtualized micropolygon geometry system, rendering film-quality assets with automatic LOD." }
      ],
      // Set 3
      [
        { id: 1, question: "How do you add movement to a character?", difficulty: "easy", options: ["A. Movement Script", "B. Add Character Movement Component", "C. Physics only", "D. Animation only"], correctAnswer: 1, explanation: "The Character Movement Component provides built-in movement functionality for walking, jumping, swimming, etc." },
        { id: 2, question: "What is a Material in Unreal Engine?", difficulty: "medium", options: ["A. Physical material", "B. An asset defining surface appearance (color, texture, reflectivity)", "C. Building material", "D. Raw material"], correctAnswer: 1, explanation: "Materials define how surfaces appear, controlling color, texture, reflectivity, and other visual properties." },
        { id: 3, question: "What is the Construction Script in Blueprints?", difficulty: "medium", options: ["A. Building script", "B. Code that runs when placing or modifying an actor in the editor", "C. Setup script", "D. Installation script"], correctAnswer: 1, explanation: "The Construction Script runs when an actor is placed or modified in the editor, useful for procedural setup." },
        { id: 4, question: "What is Lumen in Unreal Engine 5?", difficulty: "hard", options: ["A. A light unit", "B. A dynamic global illumination and reflections system", "C. A lamp", "D. Brightness setting"], correctAnswer: 1, explanation: "Lumen is UE5's fully dynamic global illumination and reflections system, eliminating baked lighting needs." },
        { id: 5, question: "What is World Partition in Unreal Engine 5?", difficulty: "hard", options: ["A. Map division", "B. A system for automatic level streaming in large open worlds", "C. Territory system", "D. Save system"], correctAnswer: 1, explanation: "World Partition automatically divides worlds into a grid and streams cells, enabling massive open worlds." }
      ]
    ]
  }
};

// Connect to MongoDB and seed data
async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Define schema
    const questionSetSchema = new mongoose.Schema({
      domain: { type: String, required: true, index: true },
      language: { type: String, required: true, index: true },
      setNumber: { type: Number, required: true, index: true },
      questions: [{
        id: Number,
        question: String,
        difficulty: String,
        options: [String],
        correctAnswer: Number,
        explanation: String
      }],
      createdAt: { type: Date, default: Date.now }
    });

    questionSetSchema.index({ domain: 1, language: 1, setNumber: 1 }, { unique: true });
    
    const QuestionSet = mongoose.models.QuestionSet || mongoose.model('QuestionSet', questionSetSchema);

    // Clear existing data
    await QuestionSet.deleteMany({});
    console.log('🗑️  Cleared existing question sets');

    // Insert all question sets
    let totalSets = 0;
    let totalQuestions = 0;

    for (const [domain, languages] of Object.entries(questionBank)) {
      for (const [language, sets] of Object.entries(languages)) {
        for (let setIndex = 0; setIndex < sets.length; setIndex++) {
          const questions = sets[setIndex];
          await QuestionSet.create({
            domain,
            language,
            setNumber: setIndex + 1,
            questions
          });
          totalSets++;
          totalQuestions += questions.length;
          console.log(`   ✓ ${domain}/${language} Set ${setIndex + 1} (${questions.length} questions)`);
        }
      }
    }

    console.log('\n========================================');
    console.log(`🎉 Seeding complete!`);
    console.log(`   📦 Total Sets: ${totalSets}`);
    console.log(`   ❓ Total Questions: ${totalQuestions}`);
    console.log('========================================\n');

    await mongoose.disconnect();
    console.log('📤 Disconnected from MongoDB');
    process.exit(0);

  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();
