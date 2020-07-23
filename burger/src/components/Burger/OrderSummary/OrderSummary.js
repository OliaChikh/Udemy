import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
	componentWillUpdate(){
		console.log('[OrderSummary] Willupdate')
	}
	render(){
		const ingredientSummary = Object.keys(this.props.ingredients)
		.map(igKey => {
			return (<li key = {igKey} ><span style = {{textTransform: 'capitalize'}} > {igKey} </span> : {this.props.ingredients[igKey]}</li>)
		});
		return(
			<Auxiliary>
				<p>Your order</p>
				<p>A delicious burger with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total price: {this.props.price}</strong></p>
				<p>Continue to checkout?</p>
			<Button btnType = "Danger" clicked = {this.props.purchaseCancelled}>CANCEL</Button>
			<Button btnType = "Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
			</Auxiliary>
		)
	}
}

export default OrderSummary;

