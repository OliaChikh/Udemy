import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
state = {
	username: "superMaxx"
}
usernameChangeHandler = (event) => {
	this.setState({username: event.target.value})
}
render(){
  return (
    <div className="App">
     <UserInput 
	  changed = {this.usernameChangeHandler}
	  currentName = {this.state.username}/>
	 <UserOutput userName = {this.state.username}/>
	 <UserOutput userName = {this.state.username}/>
	 <UserOutput userName = {this.state.username}/>
    
    </div>
  );
}
}

export default App;
