import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component{
	state = {
		showSidedrawer: false
	}
	sideDrawerClosedHandler = () =>{
		this.setState({showSidedrawer:false});
	}
	siderawerTogglehandler = () => {
		this.setState((prevState) => {
			return {showSidedrawer: !prevState.showSidedrawer}
		});
	}
	render(){
		return(
			<Auxiliary>
				<Toolbar drawerToggleClicked = {this.siderawerTogglehandler}/>
				<SideDrawer open = {this.state.showSidedrawer} closed = {this.sideDrawerClosedHandler}/>
				<main className = {classes.Content}>
					{this.props.children}
				</main>
			</Auxiliary>
		)
	}
}

export default Layout;