import React, {Component} from 'react';
//import styled from 'styled-components';
import classes from'./Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

//
//const StyleDiv = styled.div`
//	width: 60%;
//	margin: 16px auto;
//	border: 1px solid #eee;
//	box-shadow: 0 2px 3px #ccc;
//	padding: 16px;
//	text-align: center;
//	@media (min-width: 500px){
//		width: 450px;
//	}
//`;
class Person extends Component {
	constructor(props){
		super(props);
		this.inputElementRef = React.createRef();
	}
	static contextType = AuthContext;
	
	componentDidMount(){
//		this.inputElement.focus();
		this.inputElementRef.current.focus();
	}
	render() {
		return (
		<Auxiliary>
			
			{this.context.authenticated ? (<p>Authenticated</p>) : (<p>Please log in</p>)}
			
			<p 
			onClick = {this.props.click}>
			Me name is 
			{this.props.name} 
			and I have 
			{this.props.age}
			years old</p>
			<p>{this.props.children}</p>
			<input type ="text" 
			onChange = {this.props.changed} 
//			ref = {(inputEl) => {this.inputElement = inputEl}}
			ref= {this.inputElementRef}
			/>
			
		</Auxiliary>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person, classes.Person);