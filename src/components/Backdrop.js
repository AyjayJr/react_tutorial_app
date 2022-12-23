function Backdrop(props) {
	// in react any component can be self closing if it doesn't contain anything.
	return (
		<div className="backdrop" onClick={props.onClick}/>
	);
}

export default Backdrop;