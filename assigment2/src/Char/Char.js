import React from 'react';

const Char = (props) => {
	const styleDiv = {
		display: 'inline-block',
		padding: '16px',
		margin: '16px',
		border: '1px solid black',
		textAlign: 'center'
	};
	return (
		<div style = {styleDiv} onClick = {props.clickDeletion} > 
			{props.character}
		</div>
	)
};

export default Char;