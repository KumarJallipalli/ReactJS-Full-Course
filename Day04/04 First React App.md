# 04. First React App

---

## Cons of React

- React is a Library → Can build Apps but cannot control the flow
    - Dev needs to Explicitly Control the Flow
    - Hence, Need support of various Frameworks explicitly
    - Need support of various 3rd party libraries [ for form & validations → Formik, API’s → Axios ]
- Very fast pace of development by React Developers
    - Hence, need to Implement those features regularly
    - Poor Documentation

## Env setup for React 18

1. We can use React in existing [ web ] application
2. we can create a new Application using React

STEPS:

1. Download & Install `nodeJS` 
    - Node.js is a JavaScript runtime environment built on Chrome’s V8 Engine
        - It is free, open-source, cross-platform
    - We need a Package Manager called `npm` hence we are installing `nodeJS`
    - `node -v` → Checks the node version
    - `npm -v` →  Checks the npm version
2. Download & Install `vs code` 
    - Install some extensions for vs code

<aside>
💡

NOTE:

---

- `npm` → Package Manager for Node [ It is NOT Node Package Manager ]
- `Package Manager` → Tool that helps to install, update, configure, manage & remove software packages on a computer system.
</aside>

## How to use React in existing [ web ] application [ using CDN ]

1. Create a New Folder for Project & open it in vs code
2. Open a New Terminal & run the command
    - `npm init` → Creates `package.json`
3. Add these 2 folders inside the Project Folder
    - public
        - This folder contains static files [ like html, images, pdf etc.. ]
        - Files in the public folder aren't processed by the build tools
    - src
        - This folder contains your application's source code
        - Files in the src folder are processed by the build tools.
4. Add following pages in the public folder
    - index.html [ without React ]
    - home.html [ with React ]

<aside>
💡

NOTE:

---

In order to use React in any page, we need 3 basic libraries

1. React [ core library ]
2. ReactDOM [ for VDOM/reconciliation ]
3. Babel [ JS Compiler ]

CDN’s are just ONE way of using the Libraries in the Application

We can also install the same libraries using package manager & use those libraries in the Application

</aside>

## React 17 Syntax

```html
    <!-- This is React 17 code -->
    <script>
        ReactDOM.render("Hi This is React Injected message", document.querySelector("p"))
    </script>
```

- This `render()` methods renders the elements & generates/Paints the output
- But we need to provide,  what to render & where to render
    - what to render → "Hi This is React Injected message"
    - where to render → `document.querySelector("p")`
    - i.e., render this msg into `<p>`  tag
- But here the script containing `ReactDOM.render()` is NOT JS, —> Hence Browser cannot compile this
    - Hence, we need to explicitly use Babel to compile this script → So, we tell to Browser to use Babel using `<script *type*="text/babel">`
    - Now Browser uses babel to compile this script instead of browser’s own JS compiler

```jsx
// Error we get when we use just default <script> tag
react-dom.development.js:29730  Uncaught Error: Target container is not a DOM element.
    at Object.render (react-dom.development.js:29730:13)
    at home.html:14:18
    
// Warning we get when we use ReactDOM.render()
Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. 
Until you switch to the new API, your app will behave as if it's running React 17. 
Learn more: https://reactjs.org/link/switch-to-createroot
```

<aside>
💡

NOTE:

---

- React is Backward Compatible
    - Hence, we are able to use React17 & build Apps
</aside>

## React 18 Syntax

```html
    <script type="text/babel">
        const root = ReactDOM.createRoot(document.querySelector('p'))
        root.render("This is React 18 script message")
    </script>
```

- Here, we will first create a Root by selecting the element —> i.e., where to Render is selected using Root
- now we will render this root element by passing what to render

<aside>
💡

NOTE:

---

- `root` → is the Entry point for ReactJS in any Application
    - It behaves as Root Element for ReactJS
- The Code before & after to this Root Element will be just a Normal JS code
</aside>

## CODE

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index Page</title>
</head>
<body>
    <h1>Index Page</h1>
    <h3>This Page is NOT Configured with ReactJS</h3>
    <div>Go to <a href="./home.html">Home Page</a></div>
</body>
</html>
```

home.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>

    <!-- React CDN Links -> To Use React Library -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <!-- Babel CDN Links -> To Compile ReactJS Code -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    
    <!-- React17 Style Code
    <script type="text/babel">
        ReactDOM.render("A simple React Code", document.querySelector("p"))
    </script> -->

    <!-- React18 Style Code -->
    <script type="text/babel">
        const root = ReactDOM.createRoot(document.querySelector("p"))
        root.render("React Injected Code Snippet")
    </script>

</head>
<body>
    <h1>React Page</h1>
    <h3>This Page is Configured with ReactJS</h3>
    <!-- This InnerHTML Code will be overwritten by React Code Snippet -->
    <p>This is the React Code</p>
    <div>Go back to <a href="./index.html">Index Page</a></div>
</body>
</html>
```

<aside>
💡

NOTE:

---

- The above code files `index.html` && `home.html` doesn’t require a `package.json` to work
- they can be directly created as standalone pages & it works
</aside>