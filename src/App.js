// import our custom component
import Todo from './components/Todo.js'

// app is the root component which will return some JSX output
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      {/* Reusing the Todo component multiple times, also interesting comment syntax */}
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

// all components must export their functions 
export default App;