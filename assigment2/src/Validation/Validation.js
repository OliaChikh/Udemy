import React from 'react';

const Validation = (props) => {
	let validationMessage = "Text long enought";
	if (props.inputLength <= 5){
		validationMessage = "Text too short"
	}
			
	return(
		<div>
			<p> {validationMessage} </p>
		</div>
//			other way 
//
//			{props.inputLength >5 ?
//				<p>Text long enough {props.inputLength}</p>:
//				<p>Text too short {props.inputLength}</p>
//			}
		
	)
};

export default Validation;