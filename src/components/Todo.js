// react hook that creates a state that react is aware of
import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

// Todo component that can be written once and reused mutiple times
function Todo(props) {
  // useState always returns an array of a state value and a function to set the value
  // use array destructuring to capture the values that useState returns
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  // nested function for deleting
  function deleteHandler() {
    setModalIsOpen(true);
  }  


  return (
    // className is one of the few times a JS property doesn't match an HTML attribute
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      {/* use the state value to dynamcally render certain components */}
      { modalIsOpen && <Modal/> }
      { modalIsOpen && <Backdrop/> }
    </div>
  );
}

export default Todo;