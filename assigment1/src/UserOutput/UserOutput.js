import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
	return (
		<div className = "UserOutput">
			<p>User name is : {props.userName}</p>
			<p>BbB</p>
		</div>
	)
}

export default UserOutput;