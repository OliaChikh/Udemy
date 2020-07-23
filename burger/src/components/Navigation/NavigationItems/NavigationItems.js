import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
	<ul className = {classes.NavigationItems}>
		<NavigationItem link ='/' active = {true}> Burger Builder </NavigationItem>
		<NavigationItem link ='/'> Check out </NavigationItem>
	</ul>
);

export default NavigationItems