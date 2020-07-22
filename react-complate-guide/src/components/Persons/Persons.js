import React, {PureComponent} from 'react';
import Person from './Person/Person'


class Persons extends PureComponent {
//	static getDerivedStateFromProps(props,state){
//		console.log('Person.js getDerivedStateFromProps');
//		return state;
//	}
//	componentWillReceiveProps(props){
//		console.log('Person.js componentWillReceiveProps', props);
//		
//	}
//	componentWillUpdate() {
//		
//	}
//	shouldComponentUpdate(nextProps,nextState){
//		console.log('Person.js shouldComponentUpdate');
//		return true;
//	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('Person.js getSnapshotBeforeUpdate');
		return null;
	}
	componentDidUpdate(){
		console.log('Person.js componentDidUpdate');
	}
	render () {
		return this.props.persons.map((person, index) => {
				 return <Person 
				 name = {person.name}
				 age = {person.age}
				 click = {() => this.props.clicked(index)}
				 key ={person.id}
				 changed = {(event) => this.props.changed(event, person.id)}
				 isAuth = {this.props.isAuthenticated}
				 />
				});

	}
} 

export default Persons;
