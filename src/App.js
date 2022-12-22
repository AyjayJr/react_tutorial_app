// import our custom component
import Todo from './components/Todo.js'

// app is the root component which will return some JSX output
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      {/* Reusing the Todo component multiple times and passing data via props */}
      <Todo text='React 1'/>
      <Todo text='React 2'/>
      <Todo text='React 3'/>
    </div>
  );
}

// all components must export their functions 
export default App;