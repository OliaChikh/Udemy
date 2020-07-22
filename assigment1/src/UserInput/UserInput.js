import React from 'react';

const UserInput = (props) => {
	const styleUserInput = {
		border: '2px solid red'
	}
	return <input 
	style = {styleUserInput}
	type = "text" 
	onChange = {props.changed} 
	value = {props.currentName}/>;
}

export default UserInput; 
