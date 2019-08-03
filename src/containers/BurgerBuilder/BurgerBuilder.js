import React,{Component} from 'react';
import Aux from '../../HOC/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';
import {connect} from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component { 
    state = {
        purchasing: false,
    }

    componentDidMount(){
        this.props.onInitIngredients();
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum + el;
        },0);
        return sum>0;
    };

    purchaseHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({purchasing:true});
        }else{
            this.props.onSetRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    };

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
        // // alert('THANK YOU FOR ORDERING');
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    };

    render(){
       const disabledInfo = {
         ...this.props.ings
       };

       for (let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key] <= 0;
       }


       let orderSummary = null;
       let burger = this.props.error ? <h4 style={{textAlign:"center"}}> *** Ingredients Failed to be Loaded ***</h4> : <Spinner/>

       if(this.props.ings){
       burger = (
       <Aux>
       <Burger ingredients={this.props.ings}/>
       <BuildControls
       ingredientAdded = {this.props.onIngredientAdded}
       ingredientRemoved = {this.props.onIngredientRemoved}
       disabled = {disabledInfo}
       purchaseable = {this.updatePurchaseState(this.props.ings)}
       price={this.props.tp}
       ordered = {this.purchaseHandler}
       isAuth={this.props.isAuthenticated}
       />
       </Aux>);
        orderSummary = (<OrderSummary 
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        ingredients={this.props.ings}
        price={this.props.tp.toFixed(2)}
        />); 
       }

       return(
           <Aux>
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                {orderSummary}
                </Modal>
                {burger}
           </Aux>
       )
   } 
};

const mapStateToProps = state => {
    return{
        ings : state.burgerBuilder.ingredients,
        tp : state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated:state.auth.token !== null,
    };
}

const mapDispatchToProps = dispatch => {
    return{
    onIngredientAdded : 
    (ingName)=>dispatch(burgerBuilderActions.addIngredients(ingName)),
    onIngredientRemoved : 
    (ingName)=>dispatch(burgerBuilderActions.removeIngredients(ingName)),
    onInitIngredients : 
    () => dispatch(burgerBuilderActions.initIngredients()),
    onInitPurchase:
    () => dispatch(burgerBuilderActions.purchaseInit()),
    onSetRedirectPath:
    (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));