import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
	let transformedIngrediants = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_,i) => {
				return <BurgerIngredients key = {igKey + i} type = {igKey} />
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el)
		},[]);
	if(transformedIngrediants.length ===0){
		transformedIngrediants = <p>Please start adding ingrediants!</p>
	}
	console.log(transformedIngrediants);
	return(
		<div className = {classes.Burger} >
			<BurgerIngredients type = 'bread-top'/>
			{transformedIngrediants}
			<BurgerIngredients type = 'bread-bottom'/>
		</div>
	);
};

export default Burger;