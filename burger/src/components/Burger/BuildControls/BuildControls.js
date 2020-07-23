import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{label: 'Salad', type: 'salad'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => (
	<div className = {classes.BuildControls}>
		<p>Current price: <strong> {props.price.toFixed(2)} </strong> </p>
		{controls.map(cntr => (
		 	<BuildControl 
				key = {cntr.label} 
				label = {cntr.label}
				added = {() => props.ingredientAdded(cntr.type)}
				removed = {() => props.ingredientRemoved(cntr.type)} 
				disabled = {props.disabled[cntr.type]}
				/>
		 ))}
		 <button 
		 	className ={classes.OrderButton} 
			disabled = {!props.purchasable}
			onClick = {props.ordered}>
			Oreder now</button>
	</div>
)

export default BuildControls;