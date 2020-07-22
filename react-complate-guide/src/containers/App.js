import React, {Component} from 'react';
import classes from './App.css';
//import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

//const StyledButton = styled.button`
//	background-color : ${props => props.alt ? 'red' : 'green'};
//	&:hover {
//		background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//	}
//`;
//
class App extends Component {
	constructor(props){
		super(props);
		console.log('constructor');
	}
	state = {
		persons: [
			{	id: 'qqq',name: "Max",age: 28},
			{	id: 'aaa',name: "Nick",age: 25},
			{	id: 'zzz',name: "Bill",age: 18},

		],
		showPerson: false,
		changeCounter: 0,
		authenticated: false
	};

//	static getDerivedStateFromProps(props,state){
//		console.log('getDerivedStateFromProps', props);
//		return state;
//	}
//	componentWillMount(){
//		console.log('componentWillMount');
//	}

	shouldComponentUpdate(nextProps,nextState){
		
		console.log('shouldComponentUpdate');
		return true;
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')
	}
	componentDidMount(){
		console.log('componentWillMount');
	}
	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}
 	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});
		const person = {
			...this.state.persons[personIndex]
		};
		
		person.name = event.target.value;
		const persons =  [...this.state.persons];
		persons[personIndex] = person;
		this.setState((prevState, props) => {
			return {
				persons: persons, 
				changeCounter: prevState.changeCounter + 1
			};
		}); 
	}
	
	togglePersonHandler = () => {
			const doesShow = this.state.showPerson;
			this.setState({showPerson: !doesShow});
 		}
	loginHandler = () => {
		this.setState({authenticated: true});
	}
	
	render(){
		let renderedPersons = null;
		if(this.state.showPerson){
			renderedPersons = <Persons 
				persons = {this.state.persons} 
				clicked = {this.deletePersonHandler}
				changed = {this.nameChangeHandler}
				isAuthenticated = {this.state.authenticated}
				/>;
		}
				return (	
				<Auxiliary>
					<AuthContext.Provider
					value = {{
					authenticated: this.state.authenticated, 
					login: this.loginHandler}}>
						<Cockpit
							showPerson = {this.state.showPerson} 
							persons = {this.state.persons}
							clicked = {this.togglePersonHandler}
						/>
						{renderedPersons}
					</AuthContext.Provider>
				</Auxiliary>
		  )

	}
}

export default withClass(App, classes.App);
