import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIAENT_PRICES = {
	salad: 0.5,
	bacon: 0.7,
	cheese: 0.4,
	meat: 1.3
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}
	updatePurchaseState(ingredients){
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey]
			})
			.reduce((sum, el)=>{
				return sum +el;
			} ,0);
		this.setState({purchasable: sum > 0})
	} 
	addIngrediantHanddler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const pricAddition = INGREDIAENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + pricAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	}
	removeIngrediantHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if(oldCount <= 0){
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIAENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	}
	
	purchaseHandler = ()  => {
		this.setState({purchasing: true});
	}
	purchaseCancelHandler = ()  => {
		this.setState({purchasing: false});
	}
	purchaseContinueHandler = () => {
		alert('You continue');
	}
	
	render() {
		const disabledInfo = {
			...this.state.ingredients
		}
		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <=0
		}
		return(
			<Auxiliary>
				<Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler} >
					<OrderSummary ingredients = {this.state.ingredients} 
								  purchaseCancelled={this.purchaseCancelHandler}
								  purchaseContinued = {this.purchaseContinueHandler}
								  price = {this.state.totalPrice.toFixed(2)} />
				</Modal>
				<Burger ingredients = {this.state.ingredients} />
				<BuildControls
					ingredientAdded = {this.addIngrediantHanddler}
					ingredientRemoved ={this.removeIngrediantHandler}
					disabled = {disabledInfo}
					price = {this.state.totalPrice}
					purchasable = {this.state.purchasable}
					ordered = {this.purchaseHandler}
				/>
			</Auxiliary>
		)
	}
}

export default BurgerBuilder;