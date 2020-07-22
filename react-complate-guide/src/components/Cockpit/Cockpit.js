import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';


const Cockpit = (props) => {
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);
	useEffect (() => {
		console.log('[Cockpit.js] useEffect');
//		setTimeout(()=>{
//			alert('Save data to cloud');
//		},1000);
		toggleBtnRef.current.click();
		return () => {
			console.log('cleanup')
		}
	}, [props.persons]);
	const assigmentClasses = [];
	let btnClass = '';
	if(props.showPerson){
		btnClass = classes.Red;
	}
		if(props.persons.length <=2 ){
			assigmentClasses.push(classes.red);
		}
		if(props.persons.length <= 1){
			assigmentClasses.push(classes.bold);
		}

	return(
		<div className = {classes.Cockpit}>
			<h1>Hi , I am a React App</h1>
			<p className = {assigmentClasses.join(' ')} >This is really working</p>
			<button ref={toggleBtnRef} className = {btnClass} onClick ={props.clicked}>Toggle person</button>
			<button onClick = {authContext.login}>Log in</button>
			
		</div>
	)
};

export default Cockpit;