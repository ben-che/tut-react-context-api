# React Context Tutorial
Official React Docs : https://reactjs.org/docs/context.html

## Some Context on Context
React is known best for its top-down data flow, but this is cumbersome at times, especially with complex applications. Developers would have to keep track of props across many different components, and restructuring the app could be problematic - especially when adding parent components. In the past, Redux (or other state-management libraries) were the solution to this problem - adding a global storage for state that any component could access and update. However, this also means that an additional library and its various dependencies would also have to be imported into the project.

Now, React has a new Context API (that functions quite similar to Redux) that allows developers to access and update state from anywhere within their React app.

### Redux vs React Context API
[Here's a good link](https://stackoverflow.com/questions/49568073/react-context-vs-react-redux-when-should-i-use-each-one) on whether or not you should use Redux or just the React Context API.


