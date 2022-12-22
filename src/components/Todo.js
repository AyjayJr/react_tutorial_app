// Todo component that can be written once and reused mutiple times
function Todo(props) {
  return (
    // className is one of the few times a JS property doesn't match an HTML attribute
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default Todo;